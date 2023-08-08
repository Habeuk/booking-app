<script setup lang="ts">
import { useStore } from 'vuex'
import CalendarTab from './components/CalendarTab.vue'
import ScheduleTab from './components/ScheduleTab.vue'

const store = useStore()

//functions
const changeScheduleState = (indexes: { time: number; index: number }) => {
  console.log
  store.dispatch('changeScheduleState', indexes)
}
</script>

<template>
  <div class="main-app-container container">
    <div class="main-app w-100 d-flex">
      <div class="app-main-contain px-md-5 px-2 mx-auto my-auto mh-50">
        <CalendarTab v-if="false" :is-loading="false" :step-id="1" />
        <ScheduleTab
          v-bind="store.state.steps[1].parameters"
          :can-select="store.state.userState.canSelect"
          :is-loading="false"
          :selected-schedules="store.state.steps[1].datas.schedulesCount"
          @change-schedule-state="changeScheduleState"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-app {
  min-height: 100vh;
}
</style>
