<template>
  <base-layout>
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
import { ref, onBeforeMount } from 'vue'
const artistList = ref([])
const getArtistList = () => {
  fetch(`http://music.eleuu.com/artist/list?type=1&area=7&initial=z`)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        const { artists } = res
        artistList.value = artists
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
</style>
