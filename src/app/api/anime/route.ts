import { ANIME } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const headers = request.headers;
  const query = headers.get("query-search") as string;

  const gogoanime = new ANIME.Gogoanime();
  const results = await gogoanime.search(query);
  return NextResponse.json(results, { status: 200 });
}
