<template>
  <base-layout>
    <h1>{{ artistInfo.name }}</h1>
    <img :src="artistInfo.cover" :alt="artistInfo.name" width="200">
    <p>单曲数：{{ artistInfo.musicSize }}</p>
    <p>专辑数：{{ artistInfo.albumSize }}</p>
    <p>mv数：{{ artistInfo.mvSize }}</p>
    <p class="desc">简介：{{ artistInfo.briefDesc }}</p>
    <div>
      <nav>
        <router-link :to="{ name: 'ArtistAlbum', params: { id } }">专辑</router-link>
        <router-link :to="{ name: 'ArtistMV', params: { id } }">MV</router-link>
        <router-link :to="{ name: 'ArtistDetail', params: { id } }">歌手详情</router-link>
        <router-link :to="{ name: 'ArtistSimi', params: { id } }">相似歌手</router-link>
      </nav>
      <router-view/>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const { id } = route.params

const artistInfo = ref<any>({})

/*
const getArtistDetail = async () => {
  const { data } = await fetch(`http://localhost:3000/artist/detail?id=${id}`).then(res => res.json())
  // console.log(data.artist)
  artistInfo.value = data.artist
}*/

onBeforeMount(async () => {
  // await getArtistDetail()
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

a {
  position: relative;
  text-decoration: none;
  margin-right: 10px;
  color: inherit;
}

a::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  border-bottom: 2px solid transparent;
}

.active {
  color: #42b983;
  font-weight: bold;
}

.active::after {
  border-color: #42b983;
}
</style>
