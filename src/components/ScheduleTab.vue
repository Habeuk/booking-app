<script lang="ts">
import Skeleton from 'primevue/skeleton'
import pButton from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import ProgressBar from 'primevue/progressbar'

import { ref, computed } from 'vue'
export default {
  props: {
    title: String,
    icon: String,
    canSelect: {
      type: Boolean,
      required: true
    },
    schedulesList: {
      type: Array<{
        times: Array<{
          hour: string
          active: boolean
          selected: boolean
          filtred: boolean
          scheduleFiltred: boolean
          monitors: Array<Number>
        }>
        name: String
      }>,
      required: true
    },
    monitorList: {
      type: Array<{ name: string; value: number; disabled: boolean }>,
      required: true
    },
    currentMonitor: {
      type: String,
      default: null
    },
    maxSchedules: {
      type: Number,
      required: true
    },
    selectedSchedules: {
      type: Number,
      required: true
    },
    isLoading: Boolean
  },
  emits: ['validateSchedule', 'changeScheduleState', 'updateFilter'],
  setup(props, { emit }) {
    /************Refs**************/
    const localMonitor = ref([])

    /************Computed**************/
    const selectionLeft = computed(() => {
      const difference = props.maxSchedules - props.selectedSchedules
      const percentage = (props.selectedSchedules / props.maxSchedules) * 100
      let color = null
      switch (true) {
        case percentage == 100:
          color = 'red'
          break
        case percentage > 75:
          color = 'orange'
          break
        default:
          color = 'green'
          break
      }
      return { label: difference + '/' + props.maxSchedules, percentage: percentage, color: color }
    })

    //Functions
    const selectSchedule = (time: number, index: number) => {
      if (props.schedulesList[time].times[index].active) {
        // allTime.value[time].times[index].selected =allTime.value[time].times[index].selected == true ? false : true
        emit('changeScheduleState', { time, index })
      }
    }
    const updateFilter = () => {
      const monitors = localMonitor.value ? [localMonitor.value] : []
      console.log
      emit('updateFilter', { monitors: monitors })
    }

    return {
      ...props,
      selectionLeft,
      localMonitor,
      selectSchedule,
      updateFilter
    }
  },
  components: { Skeleton, pButton, SelectButton, ProgressBar }
}
</script>
<template>
  <div>
    <div class="myi-5" v-show="!isLoading">
      <h6 class="title-steps">
        <span :class="icon" class="mr-2"></span>
        <span>{{ title }}</span>
      </h6>
      <div class="monitor-selector">
        <div class="monitor-form d-flex">
          <SelectButton
            v-model="localMonitor"
            :options="monitorList"
            optionDisabled="disabled"
            optionLabel="name"
            class="d-inline-block"
            @update:modelValue="updateFilter"
          />
        </div>
      </div>
      <div class="hours-content">
        <div class="block-time" v-for="(time, index) in schedulesList" :key="index">
          <h5 class="time-title">{{ time.name }}</h5>
          <div class="time-list justify-content-between">
            <button
              class="mb-2 time-btn"
              :class="{
                'active-btn':
                  (heure.active && canSelect && !heure.filtred && !heure.scheduleFiltred) ||
                  heure.selected,
                'desabled-btn':
                  (!(heure.active && canSelect) && !heure.selected) ||
                  heure.filtred ||
                  heure.scheduleFiltred,
                'selected-btn': heure.selected
              }"
              v-for="(heure, i) in time.times"
              :key="i"
              :disabled="
                (!(heure.active && canSelect) && !heure.selected) ||
                heure.filtred ||
                heure.scheduleFiltred
              "
              @click="selectSchedule(index, i)"
            >
              <span class="time">{{ heure.hour }}</span>
            </button>
          </div>
        </div>
      </div>
      <ProgressBar
        :showValue="false"
        :value="selectionLeft.percentage"
        :pt="{
          value: { style: { background: selectionLeft.color } }
        }"
        class="time-progress-bar w-100"
      ></ProgressBar>
      <div class="hours-footer d-flex mt-4 justify-content-between">
        <div class="hours-action w-100 mx-auto justify-content-end d-flex">
          <div class="btn-container pr-0">
            <pButton
              class="ml-n3 w-100 mx-auto submit-btn"
              icon="pi pi-arrow-right"
              iconPos="right"
              label="Submit"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2" v-show="isLoading">
      <div class="mb-4">
        <Skeleton class="mb-3" animation="wave" width="40%" height="20px" />
        <div class="row">
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
        </div>
      </div>
      <div class="mb-4">
        <Skeleton class="mb-3" animation="wave" width="40%" />
        <div class="row">
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
          <div class="col-3 mb-2">
            <Skeleton animation="wave" height="30px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
