import { Categories } from "@/MockData/data";
import {
  boolean,
  index,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

const createdAt = timestamp("created_at").defaultNow();
const updatedAt = timestamp("updated_at")
  .defaultNow()
  .$onUpdate(() => new Date());

export const UsersTable = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    clerkUserId: text("clerk_user_id").notNull().unique(),
    createdAt,
    updatedAt,
  },
  (table) => index("clerk_user_id_index").on(table.clerkUserId),
);

// every user can have multiple habits but every habit must belong to one user

export const categoryEnum = pgEnum("categories", Categories);

export const HabitsTable = pgTable("habits", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  category: categoryEnum("category").notNull(),
  isCompleted: boolean("is_completed").notNull().default(false),
  createdAt,
  updatedAt,
});
