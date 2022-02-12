<template>
  <ol>
    <li v-for="item of artistMV" :key="item.id" @click="playMV(item.id)">
      <img :src="item.imgurl" width="200" alt="">
      <p>{{ item.name }}</p>
    </li>
  </ol>
  <video controls :src="mp4" width="400" autoplay></video>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const artistMV = ref<any>({})

/*const getArtistMV = async () => {
  const { mvs } = await fetch(`http://localhost:3000/artist/mv?id=${id}`).then(res => res.json())
  artistMV.value = mvs
  console.log(mvs)
}*/

const mp4 = ref("")
const playMV = async (id: number) => {
  const { data } = await fetch(`http://localhost:3000/mv/url?id=${id}&r=1080`).then(res => res.json())
  console.log(data.url)
  mp4.value = data.url
}

onBeforeMount(async () => {
  // await getArtistMV()
})
</script>

<style scoped>

</style>
