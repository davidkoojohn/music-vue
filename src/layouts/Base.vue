<template>
  <el-container>
    <el-header>Header</el-header>
    <div class="container">
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer>Footer</el-footer>
    </div>
  </el-container>
</template>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
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
</style>
