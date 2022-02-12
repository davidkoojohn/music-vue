
export function getArtist(id: number) {
  return fetch(`https://koo-music.vercel.app/artist/detail?id=${id}`).then(res => res.json())
}

export function getArtistMV(id: number) {
  return fetch(`https://koo-music.vercel.app/artist/mv?id=${id}`).then(res => res.json())
}

export function getArtistMVUrl(id: number) {
  return fetch(`https://koo-music.vercel.app/mv/url?id=${id}&r=1080`).then(res => res.json())
}

export function getArtists(query: string = "") {
  return fetch(`https://koo-music.vercel.app/artist/list?${query}`).then(res => res.json())
}
