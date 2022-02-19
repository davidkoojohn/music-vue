<template>
  <base-layout>
    <el-skeleton :loading="isLoading" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 200px; margin-bottom: 20px" />
        <el-skeleton-item variant="text" style="width: 240px" />
        <el-skeleton-item variant="text" style="width: 240px" />
        <el-skeleton-item variant="text" style="width: 240px" />
        <el-skeleton-item variant="text" />
        <el-skeleton-item variant="text" />
      </template>
      <template #default>
        <el-row :gutter="10">
          <el-col
            :span="6"
            :xs="24"
          >
            <img :src="artistInfo.cover" :alt="artistInfo.name" style="width: 100%; max-width: 240px">
          </el-col>
          <el-col
            :span="18"
            :xs="24"
            class="info"
          >
            <h1>{{ artistInfo.name }}</h1>
            <p>单曲数：{{ artistInfo.musicSize }}</p>
            <p>专辑数：{{ artistInfo.albumSize }}</p>
            <p>mv数：{{ artistInfo.mvSize }}</p>
            <p class="desc">简介：{{ artistInfo.briefDesc }}</p>
          </el-col>
        </el-row>
      </template>
    </el-skeleton>
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
import { ElMessage } from "element-plus";

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })

const route = useRoute()
const { id } = route.params

const artist = useArtistStore()
const { artistInfo } = toRefs(artist)

const isLoading = ref<boolean>(false)
const getArtist = async (id: number) => {
  isLoading.value = true
  try {
    await artist.fetchArtistDetail(id)
  } catch (e) {
    ElMessage.error("网络错误，请稍后重试！")
  } finally {
    isLoading.value = false
  }
}

onBeforeMount(async () => {
  await getArtist(+id)
})
</script>

<style scoped>
.info h1,
.info p {
  margin: 0 0 8px 0;
}

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
