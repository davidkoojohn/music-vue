import http from "../utils/http"

export function getArtist(id: number) {
  return http.get(`/artist/detail?id=${id}`)
}

export function getArtistMV(id: number) {
  return http.get(`/artist/mv`, {
    params: { id }
  })
}

export function getArtistAlbum(id: number) {
  return http.get(`/artist/album`, {
    params: { id }
  })
}

export function getArtistSimi(id: number) {
  return http.get(`/simi/artist`, {
    params: { id }
  })
}

export function getArtistMVUrl(id: number) {
  return http.get(`/mv/url?id=${id}&r=1080`)
}

export function getArtists(query: string = "") {
  return http.get(`/artist/list?${query}`)
}
