<script setup>
import { ref } from 'vue'
const selectedValue = ref(1)
</script>

<template>
  <div>
    <div>{{ selectedValue }}</div>
    <select v-model="selectedValue">
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
    </select>
  </div>
</template>
