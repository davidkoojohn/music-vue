<template>
  <base-layout>
    <div class="content">
      <h1>About</h1>
      <div>Author: <a href="https://github.com/davidkoojohn">@ davidkoojohn</a></div>
      <div>Email: <a href="mailto:davidkoojohn@gmail.com">davidkoojohn@gmail.com</a></div>
      <button @click="addCount">count++ {{ counter.count }}</button>
      <ul>
        <li v-for="item of counter.timestampList">
          {{ item }}
        </li>
      </ul>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter"
const counter = useCounterStore()

const addCount = () => {
  counter.addCount()
  counter.addTime(Date.now())
}
</script>

<style scoped>
.content {
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
