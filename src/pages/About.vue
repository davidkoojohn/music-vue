<template>
  <h1>About</h1>
  <button @click="addCount">count++ {{ counter.count }}</button>
  <ul>
    <li v-for="item of counter.timestampList">
      {{ item }}
    </li>
  </ul>
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

</style>
