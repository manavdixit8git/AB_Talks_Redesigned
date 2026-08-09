import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const [user] = await db.insert(users).values({
      name: "New Student",
      email: "student_" + Date.now() + "@example.com",
      streak: 3,
      currentDay: 12, 
      progress: 11,
    }).returning();

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("user_id", user.id.toString(), { httpOnly: true });
    
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}
