ALTER TABLE "habits" DROP CONSTRAINT "habits_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "habits" ALTER COLUMN "user_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "habits" ADD CONSTRAINT "habits_user_id_users_clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("clerk_user_id") ON DELETE cascade ON UPDATE no action;