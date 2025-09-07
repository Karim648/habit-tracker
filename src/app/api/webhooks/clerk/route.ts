import { db } from "@/db";
import { UsersTable } from "@/db/schema";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type;

    if (eventType === "user.created") {
      const { id } = evt.data;

      const createdAt = new Date(evt.data.created_at);
      const updatedAt = new Date(evt.data.updated_at);

      await db.insert(UsersTable).values({
        name: `${evt.data.first_name} ${evt.data.last_name}`,
        email: evt.data.email_addresses?.[0]?.email_address ?? null,
        clerkUserId: id,
        createdAt: createdAt,
        updatedAt: updatedAt,
      });
    }

    if (eventType === "user.updated") {
      const { id } = evt.data;

      await db.update(UsersTable).set({
        clerkUserId: id,
        name: `${evt.data.first_name} ${evt.data.last_name}`,
        email: evt.data.email_addresses?.[0]?.email_address ?? null,
        updatedAt: new Date(evt.data.updated_at),
      });
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;

      if (!id) return new Response("User not found", { status: 400 });

      await db.delete(UsersTable).where(eq(UsersTable.clerkUserId, id));
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
