<template>
  <el-row :gutter="10" v-loading="loading">
    <el-col
      v-for="item of artistMV"
      :key="item.id"
      :span="6"
      :xs="12"
      :sm="8"
      :md="6"
    >
      <el-card
        :body-style="{ padding: '10px' }"
      >
        <img :src="item.imgurl16v9" class="image"/>
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
const { artistMV } = toRefs(artist)
const loading = ref<boolean>(false)
const getArtistMV = async (id: number) => {
  try {
    loading.value = true
    await artist.fetchArtistMV(id)
  } catch (e) {
    ElMessage.error("网络错误，请稍后重试！")
  } finally {
    loading.value = false
  }
}

onBeforeMount(async () => {
  await getArtistMV(+id)
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
