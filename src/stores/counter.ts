import { defineStore, acceptHMRUpdate } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    timestampList: <any>[]
  }),
  getters: {
    count10: (state) => state.count * 10
  },
  actions: {
    addCount() {
      this.count++
    },
    addTime(time: any) {
      this.timestampList.push(time)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(
    useCounterStore,
    import.meta.hot
  ))
}
