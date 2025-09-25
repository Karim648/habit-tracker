import { Categories, Frequencies } from "@/data/data";
import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const UsersTable = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    clerkUserId: text("clerk_user_id").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    clerkUserIdIndex: index("clerk_user_id_index").on(table.clerkUserId),
  }),
);

export const userRelations = relations(UsersTable, ({ many }) => ({
  habits: many(HabitsTable),
}));

// every user can have multiple habits but every habit must belong to one user

export const categoryEnum = pgEnum("categories", Categories);
export const frequencyEnum = pgEnum("frequencies", Frequencies);

export const HabitsTable = pgTable("habits", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => UsersTable.clerkUserId, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  category: categoryEnum("category").notNull(),
  frequency: frequencyEnum("frequency").notNull().default("Daily"),
  isCompleted: boolean("is_completed").notNull().default(false),
  target: integer("target").notNull().default(1),
  reminder: varchar("reminder", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const habitRelations = relations(HabitsTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [HabitsTable.userId],
    references: [UsersTable.id],
  }),
}));
