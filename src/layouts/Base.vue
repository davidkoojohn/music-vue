<template>
  <el-container>
    <el-header>
      <div class="content">
        <router-link class="logo" :to="{ name: 'Landing'}">
          <img height="40" src="../assets/logo.png" alt="音乐🎵">
        </router-link>
        <el-input
            placeholder="请输入搜索关键词"
            class="search"
        >
          <template #append>
            <el-button :icon="Search"></el-button>
          </template>
        </el-input>
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

<script setup>
import { Search } from "@element-plus/icons-vue"
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
  height: calc(100vh - 60px);
  overflow: auto;
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
