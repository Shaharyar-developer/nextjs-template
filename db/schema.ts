import { randomUUID } from "crypto";
import { pgTable, text } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey().default(randomUUID()),
  email: text("email").notNull(),
});
