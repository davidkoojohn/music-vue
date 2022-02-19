<template>
  <el-autocomplete
    class="search"
    placeholder="请输入搜索关键词"
    v-model="state"
    :fetch-suggestions="fetchSuggestions"
    @select="handleSelect"
    @keydown.enter="handleSearch"
  >
    <template #append>
      <el-button
        :icon="Search"
        @click="handleSearch"
      />
    </template>
  </el-autocomplete>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { Search } from "@element-plus/icons-vue"

const state = ref('')

const props = defineProps<{
  fetchSuggestions: () => void
}>()

const { fetchSuggestions } = toRefs(props)

const emit = defineEmits(["onSearch", "onSelect"])
const handleSearch = () => {
  emit("onSearch", state.value)
}

const handleSelect = (item: any) => {
  emit("onSelect", item)
}
</script>

<style scoped>

</style>
