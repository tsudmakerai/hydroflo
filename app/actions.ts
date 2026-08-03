"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDb } from "../db";
import { products, supplyRoutes, processSteps, faqs } from "../db/schema";
import { eq } from "drizzle-orm";

const ADMIN_PASSWORD = "admin"; // Very simple password

export async function login(formData: FormData) {
  const password = formData.get("password");
  if (password === ADMIN_PASSWORD) {
    (await cookies()).set("admin_session", "true", { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 });
    redirect("/admin");
  } else {
    throw new Error("Неверный пароль");
  }
}

export async function logout() {
  (await cookies()).delete("admin_session");
  redirect("/");
}

export async function isAuthenticated() {
  return (await cookies()).get("admin_session")?.value === "true";
}

export async function saveProduct(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error("Unauthorized");
  const db = getDb();
  
  const id = formData.get("id") ? Number(formData.get("id")) : null;
  const data = {
    number: formData.get("number") as string,
    title: formData.get("title") as string,
    text: formData.get("text") as string,
    tags: (formData.get("tags") as string).split(",").map(s => s.trim()),
    accent: formData.get("accent") === "on",
    order: Number(formData.get("order") || 0),
  };

  if (id) {
    await db.update(products).set(data).where(eq(products.id, id));
  } else {
    await db.insert(products).values(data);
  }
}

export async function deleteProduct(id: number) {
  if (!(await isAuthenticated())) throw new Error("Unauthorized");
  await getDb().delete(products).where(eq(products.id, id));
}

export async function seedDatabase() {
  if (!(await isAuthenticated())) throw new Error("Unauthorized");
  const { seed } = await import("../db/seed");
  await seed();
}

