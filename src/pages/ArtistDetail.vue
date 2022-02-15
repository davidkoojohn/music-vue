<template>
  <base-layout>
    <h1>{{ artistInfo.name }}</h1>
    <img :src="artistInfo.cover" :alt="artistInfo.name" width="200">
    <p>单曲数：{{ artistInfo.musicSize }}</p>
    <p>专辑数：{{ artistInfo.albumSize }}</p>
    <p>mv数：{{ artistInfo.mvSize }}</p>
    <p class="desc">简介：{{ artistInfo.briefDesc }}</p>

    <el-divider content-position="left">
      <el-icon><headset /></el-icon>
    </el-divider>
    <el-space :size="size" :spacer="spacer">
      <router-link :to="{ name: 'ArtistAlbum', params: { id } }">专辑</router-link>
      <router-link :to="{ name: 'ArtistMV', params: { id } }">MV</router-link>
      <router-link :to="{ name: 'ArtistDetail', params: { id } }">歌手详情</router-link>
      <router-link :to="{ name: 'ArtistSimi', params: { id } }">相似歌手</router-link>
    </el-space>
    <router-view/>
  </base-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, h, toRefs } from "vue"
import { useRoute } from "vue-router"
import { Headset } from "@element-plus/icons-vue"
import { useArtistStore } from "../stores/artist"
import { ElLoading, ElMessage } from "element-plus";

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })

const route = useRoute()
const { id } = route.params

const artist = useArtistStore()
const { artistInfo } = toRefs(artist)

const getArtist = async (id: number) => {
  const loading = ElLoading.service({ fullscreen: true })
  try {
    await artist.fetchArtistDetail(id)
  } catch (e) {
    ElMessage.error("网络错误，请稍后重试！")
  } finally {
    loading.close()
  }
}

onBeforeMount(async () => {
  await getArtist(+id)
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
  color: inherit;
  margin: 0 20px;
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
