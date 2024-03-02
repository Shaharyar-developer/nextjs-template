import { db } from "@/lib/db";
import { migrate } from "drizzle-orm/neon-http/migrator";

await migrate(db, { migrationsFolder: "drizzle" });
