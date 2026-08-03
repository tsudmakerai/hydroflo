import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  number: text("number").notNull(),
  title: text("title").notNull(),
  text: text("text").notNull(),
  tags: text("tags", { mode: "json" }).$type<string[]>().notNull(),
  accent: integer("accent", { mode: "boolean" }).default(false).notNull(),
  order: integer("order").notNull().default(0),
});

export const supplyRoutes = sqliteTable("supply_routes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  code: text("code").notNull(),
  label: text("label").notNull(),
  title: text("title").notNull(),
  text: text("text").notNull(),
  points: text("points", { mode: "json" }).$type<string[]>().notNull(),
  order: integer("order").notNull().default(0),
});

export const processSteps = sqliteTable("process_steps", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  step: text("step").notNull(),
  title: text("title").notNull(),
  text: text("text").notNull(),
  order: integer("order").notNull().default(0),
});

export const faqs = sqliteTable("faqs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  order: integer("order").notNull().default(0),
});
