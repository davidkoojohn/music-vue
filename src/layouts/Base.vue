<template>
  <el-container>
    <el-header>
      <div class="content">
        <router-link class="logo" :to="{ name: 'Landing'}">
          <img height="40" src="../assets/logo.png" alt="音乐🎵">
        </router-link>
        <SearchComponent
          :fetchSuggestions="querySearchAsync"
          @onSearch="handleSearch"
          @onSelect="handleSelect"
        />
      </div>
    </el-header>
    <div class="container">
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer>
        <div>
          <span>Links: </span>
          <router-link :to="{ name: 'About' }">About</router-link>
        </div>
      </el-footer>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import SearchComponent from "../components/SearchComponent.vue"
import { debounce } from "lodash"

const handleSearch = debounce((data: string) => {
  console.log(data)
}, 500)

const handleSelect = (item: any) => {
  console.log(item)
}

const suggestions = [
  { value: 'vue', link: 'https://github.com/vuejs/vue' },
  { value: 'element', link: 'https://github.com/ElemeFE/element' },
  { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
  { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
  { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
  { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
  { value: 'babel', link: 'https://github.com/babel/babel' },
]

let timeout: number = 0
const querySearchAsync = debounce((queryString: string, callback: (arg: any) => void) => {
  console.log(queryString)
  callback(suggestions)
}, 1000)

</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  //color: var(--el-text-color-primary);
}

.content {
  height: 100%;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 40px;
}

.search {
  width: 250px;
}

.container {
  min-height: calc(100vh - 60px);
}

.el-main {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.el-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
