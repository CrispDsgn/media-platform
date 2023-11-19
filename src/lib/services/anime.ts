const SERVICE_URL = process.env.NEXT_PUBLIC_CONSUMET_SERVICE_URL;
const SERVICE_PORT = process.env.NEXT_PUBLIC_CONSUMET_SERVICE_PORT;

export async function getAnimeList(query: string) {
  if (!query) return [];

  try {
    const res = await fetch(`${SERVICE_URL}:${SERVICE_PORT}/api/anime`, {
      method: "GET",
      headers: {
        "query-search": query,
      },
    });

    const json = await res.json();
    return json.data.results;
  } catch (e) {
    return [];
  }
}
