<script lang="ts">
import Skeleton from 'primevue/skeleton'
export default {
  props: {
    isLoading: Boolean
  },
  emits: [],
  setup(props, { emit }) {
    console.log(props)
    return {
      ...props
    }
  },
  components: { Skeleton }
}
</script>
<template>
  <div v-if="isLoading">
    <Skeleton width="75%" class="mb-2" height="20px"></Skeleton>
    <Skeleton width="100%" height="220px" class="mb-2"></Skeleton>
  </div>
  <div class="main-contain" v-else>
    <VCalendar expanded />
  </div>
</template>
<style scoped>
.mb-2 {
  margin-bottom: 10px;
}
</style>
