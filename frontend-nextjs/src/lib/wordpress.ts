
const API = "https://YOURWORDPRESSSITE.com/wp-json/wp/v2";

export async function getTrack(slug: string) {
  const res = await fetch(`${API}/track?slug=${slug}`);
  const data = await res.json();
  return data[0];
}

export async function getArtist(slug: string) {
  const res = await fetch(`${API}/artist?slug=${slug}`);
  const data = await res.json();
  return data[0];
}
