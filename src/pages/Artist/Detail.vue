<template>
  <h4>{{ artistInfo.name }}</h4>
  <p>{{ artistInfo.briefDesc }}</p>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue"
import {useRoute} from "vue-router";
import {useArtistStore} from "../../stores/artist";
import {toRefs} from "vue";
import {ElLoading, ElMessage} from "element-plus";

const route = useRoute()
const { id } = route.params

const artist = useArtistStore()
const { artistInfo } = toRefs(artist)
</script>

<style scoped>
p {
  text-indent: 2em;
}
</style>
