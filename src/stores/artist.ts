import { acceptHMRUpdate, defineStore } from "pinia"
import qs from "qs"
import { getArtists } from "../api/artist"

export const useArtistStore = defineStore("artist", {
  state: () => ({
    artistList: [],
    artistFilter: {
      area: -1,
      type: -1,
      initial: -1,
    } as any,
  }),
  actions: {
    setArtistFilter(channel: any, val: any) {
      this.artistFilter[channel] = val
    },
    async fetchArtistList() {
      const query = qs.stringify(this.artistFilter)
      const { artists = [] } = await getArtists(query)
      this.artistList = artists
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(
    useArtistStore,
    import.meta.hot
  ))
}
