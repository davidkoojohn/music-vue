<template>
  <base-layout>
    <h1>{{ artistInfo.name }}</h1>
    <img :src="artistInfo.cover" :alt="artistInfo.name" width="200">
    <p>单曲数：{{ artistInfo.musicSize }}</p>
    <p>专辑数：{{ artistInfo.albumSize }}</p>
    <p>mv数：{{ artistInfo.mvSize }}</p>
    <p class="desc">简介：{{ artistInfo.briefDesc }}</p>
    <ol>
      <li v-for="item of artistSong50" :key="item.id">{{ item.name }}</li>
    </ol>
    <hr>
    <ol>
      <li v-for="item of artistMV" :key="item.id" @click="playMV(item.id)">
        <img :src="item.imgurl" width="200" alt="">
        <p>{{ item.name }}</p>
      </li>
    </ol>
    <video controls :src="mp4" width="400" autoplay></video>
  </base-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const { id } = route.params

const artistInfo = ref<any>({})
const artistSong50 = ref<any>({})
const artistMV = ref<any>({})

const getArtistDetail = async () => {
  const { data } = await fetch(`http://localhost:3000/artist/detail?id=${id}`).then(res => res.json())
  // console.log(data.artist)
  artistInfo.value = data.artist
}

const getArtist50 = async () => {
  const { songs } = await fetch(`http://localhost:3000/artist/top/song?id=${id}`).then(res => res.json())
  artistSong50.value = songs
}

const getArtistMV = async () => {
  const { mvs } = await fetch(`http://localhost:3000/artist/mv?id=${id}`).then(res => res.json())
  artistMV.value = mvs
  console.log(mvs)
}

const mp4 = ref("")
const playMV = async (id: number) => {
  const { data } = await fetch(`http://localhost:3000/mv/url?id=${id}&r=1080`).then(res => res.json())
  console.log(data.url)
  mp4.value = data.url
}

onBeforeMount(async () => {
  await getArtistDetail()
  await getArtist50()
  await getArtistMV()
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
