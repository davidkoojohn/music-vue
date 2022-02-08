<template>
  <base-layout>
    <h1>{{ artistInfo.name }}</h1>
    <img :src="artistInfo.cover" :alt="artistInfo.name" width="200">
    <p>单曲数：{{ artistInfo.musicSize }}</p>
    <p>专辑数：{{ artistInfo.albumSize }}</p>
    <p>mv数：{{ artistInfo.mvSize }}</p>
    <p class="desc">简介：{{ artistInfo.briefDesc }}</p>
  </base-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const { id } = route.params
console.log(id)
const artistInfo = ref<any>({})
const getArtistDetail = async () => {
  const { data } = await fetch(`http://localhost:3000/artist/detail?id=${id}`).then(res => res.json())
  console.log(data.artist)
  artistInfo.value = data.artist
}

onBeforeMount(async () => {
  await getArtistDetail()
})
</script>

<style scoped>
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
