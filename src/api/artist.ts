
export function getArtists(query: string = "") {
  return fetch(`https://koo-music.vercel.app/artist/list?${query}`).then(res => res.json())
}
