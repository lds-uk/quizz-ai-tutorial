import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      process.env.DATABASE_URL ||
      "postgresql://postgres.nsygrjkgqesdysvxrogh:Catbbclondon2024!@aws-0-eu-west-2.pooler.supabase.com:6543/postgres",
  },
} satisfies Config;
