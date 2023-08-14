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

store.dispatch('checkScheduleStep')

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
      if (step.selectable) {
        classes += ' selectable'
      }
      return {
        label: step.name,
        index: step.index,
        icon: step.icon,
        separator: true,
        selectable: step.selectable,
        class: classes,
        displayName: step.index < store.state.currentStep
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
  store.dispatch('checkScheduleStep')
}
const updateFilter = (monitors: Array<{ name: string; value: number; disabled: boolean }>) => {
  console.log(monitors)
  store.dispatch('updateFilter', monitors)
}
</script>

<template>
  <div class="main-app-container container">
    <div class="main-app w-100 d-flex">
      <div class="app-main-contain px-md-5 px-2 mx-auto mt-5 mh-50">
        <div class="px-5">
          <div>
            <Breadcrumb class="booking-breadcrumb mb-4" :model="getSteps">
              <template #item="{ item }">
                <div class="py-2 d-flex justify-content-center" @click="selectStep(item.index)">
                  <span :class="item.icon" class="d-flex breadcrumb-icon mr-md-1"></span>
                  <span class="step-label">{{ item.label }}</span>
                </div>
              </template>
              <template #separator></template>
            </Breadcrumb>
          </div>
          <CalendarTab
            v-if="store.state.currentStep == 0"
            :is-loading="false"
            :step-id="1"
            :title="store.state.steps[0].title"
            :icon="store.state.steps[0].icon"
            @set-date="setStepValue"
            class="animate"
          />
          <ScheduleTab
            v-if="store.state.currentStep == 1"
            v-bind="store.state.steps[1].parameters"
            :can-select="store.state.userState.canSelect"
            :is-loading="false"
            :selected-schedules="store.state.steps[1].datas.schedulesCount"
            :title="store.state.steps[1].title"
            :icon="store.state.steps[1].icon"
            @change-schedule-state="changeScheduleState"
            @update-filter="updateFilter"
            class="animate"
          />
        </div>
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
