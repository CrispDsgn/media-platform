export async function getAnime(query: string) {
  try {
    const res = await fetch("http://localhost:3000/api/anime", {
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
