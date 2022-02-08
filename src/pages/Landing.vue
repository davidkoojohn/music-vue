<template>
  <base-layout>
    <div class="filter-row">
      <span>语种：</span>
      <el-tag
          v-for="(item, index) of artistArea"
          :key="item.val"
          :effect="item.val === obj.area ? 'dark' : 'plain'"
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
          :effect="item.val === obj.type ? 'dark' : 'plain'"
          @click="artistListFilter('type', item.val)"
      >
        {{ item.text }}
      </el-tag>
    </div>
    <div class="filter-row">
      <span>筛选：</span>
      <el-tag
          :effect="obj.initial === -1 ? 'dark' : 'plain'"
          @click="artistListFilter('initial', -1)"
      >
        热门
      </el-tag>
      <el-tag
          v-for="(item, index) of `abcdefghijklmnopqrstuvwxyz`"
          :key="item"
          :effect="item === obj.initial ? 'dark' : 'plain'"
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
        <el-card :body-style="{ padding: '10px' }" shadow="hover">
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
import { ref, onBeforeMount, reactive } from 'vue'
import { ElMessage, ElLoading } from "element-plus"
const tagTypes = ["", "success", "info", "warning", "danger"]

/**
 * object转化成url拼接样式
 * @param obj 需要转化的参数
 */
const objToUrl = (obj: any) => {
  let arr = [];
  for(let i in obj){
    if (obj.hasOwnProperty(i)) {
      arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
    }
  }
  return arr.join("&");
}
//调用
// objToUrl({name:'hehe',age:10})

const artistArea = [
    { text: "全部", val: -1 },
    { text: "华语", val: 7 },
    { text: "欧美", val: 96 },
    { text: "日本", val: 8 },
    { text: "韩国", val: 16 },
    { text: "其他", val: 0 },
]
const artistType = [
  { text: "全部", val: -1 },
  { text: "男歌手", val: 1 },
  { text: "女歌手", val: 2 },
  { text: "乐队", val: 3 },
]
const artistList = ref([])
const getArtistList = (query: string = "") => {
  const loading = ElLoading.service({ fullscreen: true })
  fetch(`http://localhost:3000/artist/list?${query}`)
      .then(res => res.json())
      .then(res => {
        const { artists } = res
        artistList.value = artists
      })
      .catch(() => {
        ElMessage.error("网络错误，请稍后重试！")
      })
      .finally(() => {
        loading.close()
      })
}
const obj: any = reactive({
  area: -1,
  type: -1,
  initial: -1,
})
const artistListFilter = async (channel: string, val: any) => {
  obj[channel] = val
  await getArtistList(objToUrl(obj))
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
