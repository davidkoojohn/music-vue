import { acceptHMRUpdate, defineStore } from "pinia"
import qs from "qs"
import { getArtists, getArtist } from "../api/artist"

export const useArtistStore = defineStore("artist", {
  state: () => ({
    artistList: [],
    artistFilter: {
      area: -1,
      type: -1,
      initial: -1,
    } as any,
    artistInfo: {}
  }),
  actions: {
    setArtistFilter(channel: any, val: any) {
      this.artistFilter[channel] = val
    },
    async fetchArtistList() {
      const query = qs.stringify(this.artistFilter)
      const res: any = await getArtists(query)
      const { artists = [] } = res
      this.artistList = artists
    },
    async fetchArtistDetail(id: number) {
      const res: any = await getArtist(id)
      const { artist } = res.data
      this.artistInfo = artist
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(
    useArtistStore,
    import.meta.hot
  ))
}
