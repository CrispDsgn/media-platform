import { gogoanime } from "@/app/_lib/providers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const headers = request.headers;
  const query = headers.get("ep-id") as string;

  const results = await gogoanime.fetchEpisodeSources(query);
  return NextResponse.json(results, { status: 200 });
}
