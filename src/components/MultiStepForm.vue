<script lang="ts">
import CalendarTab from './CalendarTab.vue'
export default {
  props: {
    currentStep: Number
  },
  emits: ['changeStep'],
  setup(props, { emit }) {
    const updateStep = () => {
      console.log('changing step')
    }

    return { ...props, updateStep }
  },
  components: {
    CalendarTab
  }
}
</script>
<template>
  <div>
    <CalendarTab :is-loading="false" />
    <button @click="updateStep">click me</button>
  </div>
</template>
