CREATE TYPE "public"."categories" AS ENUM('Health', 'Fitness', 'Personal', 'Home', 'Social');--> statement-breakpoint
ALTER TABLE "habits" ADD COLUMN "category" "categories" NOT NULL;