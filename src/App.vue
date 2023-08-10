<script setup lang="ts">
import { useStore } from 'vuex'
import CalendarTab from './components/CalendarTab.vue'
import ScheduleTab from './components/ScheduleTab.vue'
import Breadcrumb from 'primevue/breadcrumb'
import { computed } from 'vue'
const store = useStore()

//computed
const getSteps = computed(() => {
  return store.state.steps.map((step: { name: string; index: number; icon: string }) => {
    const active = step.index == store.state.currentStep
    let classes = active ? 'active-step' : 'inactive-step'
    if (step.index < store.state.currentStep) {
      classes = 'passed-step'
    }
    return {
      label: step.name,
      index: step.index,
      icon: step.icon,
      separator: true,
      class: classes
    }
  })
})

//functions
const changeScheduleState = (indexes: { time: number; index: number }) => {
  store.dispatch('changeScheduleState', indexes)
}
const changeFilterState = (indexes: { time: number; index: number; value: boolean }) => {
  store.dispatch('changeFilterState', indexes)
}
const updateMonitor = (monitors: Array<{ name: string; value: number; disabled: boolean }>) => {
  console.log(monitors)
  store.dispatch('updateMonitor', monitors)
}
</script>

<template>
  <div class="main-app-container container">
    <div class="main-app w-100 d-flex">
      <div class="app-main-contain px-md-5 px-2 mx-auto mt-5 mh-50">
        <div>
          <Breadcrumb class="booking-breadcrumb mb-4" :model="getSteps">
            <template #item="{ item }">
              <div class="btn-sm">
                <span :class="item.icon"></span>
                {{ item.label }}
              </div>
            </template>
            <template #separator></template>
          </Breadcrumb>
        </div>
        <CalendarTab
          v-if="store.state.currentStep == 1"
          :is-loading="false"
          :step-id="1"
          class="animate"
        />
        <ScheduleTab
          v-if="store.state.currentStep == 2"
          v-bind="store.state.steps[1].parameters"
          :can-select="store.state.userState.canSelect"
          :is-loading="false"
          :selected-schedules="store.state.steps[1].datas.schedulesCount"
          @change-schedule-state="changeScheduleState"
          @change-filtred-state="changeFilterState"
          @update-monitor="updateMonitor"
          class="animate"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-app {
  min-height: 100vh;
  .p-breadcrumb {
    padding: 0px;
    .breadcrumb-element {
      padding: 16px;
    }
  }
}
</style>
