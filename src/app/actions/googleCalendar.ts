"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { google } from "googleapis";

export async function createCalendarEventForHabit(
  clerkUserId: string,
  habit: { name: string; reminder: string },
) {
  const oAuthClient = await getOAuthClient(clerkUserId);
  if (!oAuthClient) throw new Error("Missing Google OAuth credentials");

  // Turn "21:00" into today’s datetime
  const [hours, minutes] = habit.reminder.split(":").map(Number);
  const start = new Date();
  start.setHours(hours, minutes, 0, 0);

  const end = new Date(start.getTime() + 30 * 60 * 1000); // 30 min event

  const calendar = google.calendar({ version: "v3", auth: oAuthClient });

  const event = await calendar.events.insert({
    calendarId: "primary",
    requestBody: {
      summary: habit.name,
      description: "Habit reminder from Habit Tracker",
      start: { dateTime: start.toISOString(), timeZone: "UTC" },
      end: { dateTime: end.toISOString(), timeZone: "UTC" },
    },
  });

  return event.data;
}

async function getOAuthClient(clerkUserId: string) {
  const token = (await clerkClient()).users.getUserOauthAccessToken(
    clerkUserId,
    "oauth_google",
  );

  if ((await token).data.length === 0 || !(await token).data[0].token)
    return null;

  const client = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URL,
  );

  client.setCredentials({
    access_token: (await token).data[0].token,
    // if Clerk gives you refresh_token and expiry_date, add them here too
  });

  return client;
}

// async function createGoogleTask(oAuthClient, title: string, dueDate: Date) {
//   const tasks = google.tasks({ version: "v1", auth: oAuthClient });

//   const res = await tasks.tasks.insert({
//     tasklist: "@default", // user’s default task list
//     requestBody: {
//       title,
//       due: dueDate.toISOString(), // only due date, no start time
//     },
//   });

//   return res.data;
// }