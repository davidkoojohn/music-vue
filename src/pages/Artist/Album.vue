<template>
  <el-row :gutter="10" v-loading="loading">
    <el-col
        v-for="item of artistAlbum"
        :key="item.id"
        :span="4"
        :xs="8"
        :sm="6"
        :md="4"
    >
      <el-card
          :body-style="{ padding: '10px' }"
      >
        <img :src="item.picUrl" class="image"/>
        <div style="padding-top: 10px">
          <span class="ellipsis">{{ item.name }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, toRefs } from "vue";
import { useRoute } from "vue-router"
import {  ElLoading, ElMessage } from "element-plus"
import { useArtistStore } from "../../stores/artist"

const { id } = useRoute().params
const artist = useArtistStore()
const { artistAlbum } = toRefs(artist)
const loading = ref<boolean>(false)
const getArtistAlbum = async (id: number) => {
  try {
    loading.value = true
    await artist.fetchArtistAlbum(id)
  } catch (e) {
    ElMessage.error("网络错误，请稍后重试！")
  } finally {
    loading.value = false
  }
}

onBeforeMount(async () => {
  await getArtistAlbum(+id)
})
</script>

<style scoped>
.image {
  width: 100%;
}

.ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.el-row {
  margin-top: 20px;
}

.el-card {
  margin-bottom: 10px;
}

.el-card:hover {
  background-color: #42b983;
}
</style>
