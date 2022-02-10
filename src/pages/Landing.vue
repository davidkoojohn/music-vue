<template>
  <base-layout>
    <div class="filter-row">
      <span>语种：</span>
      <el-tag
          v-for="(item, index) of artistArea"
          :key="item.val"
          :effect="item.val === artistFilter.area ? 'dark' : 'plain'"
          @click="artistListFilter('area', item.val)"
      >
        {{ item.text }}
      </el-tag>
    </div>
    <div class="filter-row">
      <span>分类：</span>
      <el-tag
          v-for="(item, index) of artistType"
          :key="item.val"
          :effect="item.val === artistFilter.type ? 'dark' : 'plain'"
          @click="artistListFilter('type', item.val)"
      >
        {{ item.text }}
      </el-tag>
    </div>
    <div class="filter-row">
      <span>筛选：</span>
      <el-tag
          :effect="artistFilter.initial === -1 ? 'dark' : 'plain'"
          @click="artistListFilter('initial', -1)"
      >
        热门
      </el-tag>
      <el-tag
          v-for="(item, index) of `abcdefghijklmnopqrstuvwxyz`"
          :key="item"
          :effect="item === artistFilter.initial ? 'dark' : 'plain'"
          @click="artistListFilter('initial', item)"
      >
        {{ item.toUpperCase() }}
      </el-tag>
    </div>
    <el-row :gutter="10">
      <el-col
          v-for="item of artistList"
          :key="item.id"
          :span="4"
          :xs="8"
          :sm="6"
          :md="4"
      >
        <el-card
            :body-style="{ padding: '10px' }"
            shadow="hover"
            @click="toArtistDetailPage(item.id)"
        >
          <img :src="item.picUrl" class="image"/>
          <div style="padding-top: 10px">
            <span>{{ item.name }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </base-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, toRefs } from 'vue'
import { useRouter } from "vue-router"
import { ElMessage, ElLoading } from "element-plus"
import { useArtistStore } from "../stores/artist"
import { artistArea, tagTypes, artistType } from "../stores/artist.static"

const router = useRouter()

const artist = useArtistStore();
const { artistList, artistFilter } = toRefs(artist)

const getArtistList = async () => {
  const loading = ElLoading.service({ fullscreen: true })
  try {
    await artist.fetchArtistList()
  } catch (e) {
    ElMessage.error("网络错误，请稍后重试！")
  } finally {
    loading.close()
  }
}
const obj: any = reactive({
  area: -1,
  type: -1,
  initial: -1,
})

const artistListFilter = async (channel: string, val: any) => {
  artist.setArtistFilter(channel, val)
  await getArtistList()
}

const toArtistDetailPage = (id: number) => {
  router.push({
    name: "ArtistDetail",
    params: {
      id
    }
  })
}

onBeforeMount(async () => {
  await getArtistList()
})

</script>

<style scoped>
.image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.el-card {
  margin-bottom: 10px;
}

.el-card:hover {
  background-color: #42b983;
}

.el-tag {
  margin-right: 5px;
  margin-bottom: 5px;
}

.filter-row {
  padding-bottom: 5px;
}
</style>
