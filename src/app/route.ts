import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "generating my API using API route" });
}
