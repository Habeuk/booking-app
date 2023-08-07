<script setup lang="ts">
import { ref } from 'vue'
import CalendarTab from './components/CalendarTab.vue'
const test = ref('hello')
</script>

<template>
  <CalendarTab :is-loading="false" />
</template>

<style lang="scss" scoped></style>
