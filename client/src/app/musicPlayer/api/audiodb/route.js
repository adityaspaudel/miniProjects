export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const artist = searchParams.get("artist");

  if (!artist) {
    return new Response(JSON.stringify({ error: "Missing artist parameter" }), {
      status: 400,
    });
  }

  const apiKey = "123";
  const url = `https://theaudiodb.com/api/v1/json/${apiKey}/searchtrack.php?s=${encodeURIComponent(
    artist
  )}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
