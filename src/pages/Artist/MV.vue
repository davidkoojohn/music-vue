<template>
  <el-row :gutter="10">
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
        <img height="200" :src="item.imgurl" class="image"/>
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

const getArtistMV = async (id: number) => {
  const loading = ElLoading.service({ fullscreen: true })
  try {
    await artist.fetchArtistMV(id)
  } catch (e) {
    ElMessage.error("网络错误，请稍后重试！")
  } finally {
    loading.close()
  }
}

onBeforeMount(async () => {
  await getArtistMV(+id)
})
</script>

<style scoped>
.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
</style>
