CREATE TYPE "public"."frequencies" AS ENUM('Daily', 'Weekly', 'Monthly');--> statement-breakpoint
ALTER TABLE "habits" ADD COLUMN "target" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "habits" ADD COLUMN "reminder" varchar(255) NOT NULL;