import { redirect } from "next/navigation";
import { isAuthenticated, saveProduct, deleteProduct, logout, seedDatabase } from "../actions";
import { getDb } from "../../db";
import { products as productsTable } from "../../db/schema";
import { asc } from "drizzle-orm";

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  let products = [];
  try {
    const db = getDb();
    products = await db.select().from(productsTable).orderBy(asc(productsTable.order));
  } catch (err) {
    console.error("DB error", err);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Управление продуктами</h2>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <form action={seedDatabase}>
            <button type="submit" className="edit-button">Заполнить данными по умолчанию</button>
          </form>
          <form action={logout}>
            <button type="submit" className="delete-button">Выйти</button>
          </form>
        </div>
      </div>

      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", marginTop: "1rem" }}>
        <h3>Добавить продукт</h3>
        <form action={saveProduct} className="admin-form">
          <input type="text" name="number" placeholder="Номер (напр. 01)" required />
          <input type="text" name="title" placeholder="Заголовок" required />
          <textarea name="text" placeholder="Описание" required />
          <input type="text" name="tags" placeholder="Теги (через запятую)" required />
          <label>
            <input type="checkbox" name="accent" /> Выделить (accent)
          </label>
          <input type="number" name="order" placeholder="Порядок сортировки (0)" defaultValue={0} required />
          <button type="submit">Сохранить</button>
        </form>
      </div>

      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.number}. {p.title}</h3>
            <p>{p.text}</p>
            <p><strong>Теги:</strong> {p.tags.join(", ")}</p>
            <form action={async () => {
              "use server";
              await deleteProduct(p.id);
            }}>
              <button type="submit" className="delete-button">Удалить</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
