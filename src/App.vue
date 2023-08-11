<script setup lang="ts">
import { useStore } from 'vuex'
import CalendarTab from './components/CalendarTab.vue'
import ScheduleTab from './components/ScheduleTab.vue'
import Breadcrumb from 'primevue/breadcrumb'
import { computed } from 'vue'
const store: {
  state: { steps: Array<any>; currentStep: number; userState: { canSelect: boolean } }
  dispatch: Function
  commit: Function
} = useStore()

//computed
const getSteps = computed(() => {
  const datas = store.state.steps.map(
    (step: { name: string; index: number; icon: string; selectable: boolean }) => {
      const active = step.index == store.state.currentStep
      let classes = active ? 'active-step' : 'inactive-step'
      if (step.index < store.state.currentStep) {
        classes = 'passed-step'
      }
      if (!step.selectable) {
        classes += ' disabled'
      }
      return {
        label: step.name,
        index: step.index,
        icon: step.icon,
        separator: true,
        selectable: step.selectable,
        class: classes
      }
    }
  )
  console.log(datas)
  return datas
})

//**********functions**********//

//-Actions
//-breadcrumb actions

const selectStep = (index: number) => {
  console.log(index)
  if (store.state.steps[index].selectable) {
    store.commit('SET_CURRENT_STEP', index)
  }
}

//--CalendarTab actions

const setStepValue = (payload: { value: any; index: number }) => {
  console.log(payload)
  store.commit('SET_STEP_VALUE', payload)
}

//--ScheduleTab actions
const changeScheduleState = (indexes: { time: number; index: number }) => {
  store.commit('SET_SCHEDULE_STATE', indexes)
}
const changeFilterState = (indexes: { time: number; index: number; value: boolean }) => {
  store.commit('SET_FILTER_STATE', indexes)
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
              <div class="btn-sm d-flex justify-content-center" @click="selectStep(item.index)">
                <span :class="item.icon" class="d-flex breadcrumb-icon mr-md-1"></span>
                {{ item.label }}
              </div>
            </template>
            <template #separator></template>
          </Breadcrumb>
        </div>
        <CalendarTab
          v-if="store.state.currentStep == 0"
          :is-loading="false"
          :step-id="1"
          @set-date="setStepValue"
          class="animate"
        />
        <ScheduleTab
          v-if="store.state.currentStep == 1"
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
