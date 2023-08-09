<script lang="ts">
import Skeleton from 'primevue/skeleton'
import pButton from 'primevue/button'
import SelectButton from 'primevue/selectbutton'

import { ref, computed } from 'vue'
export default {
  props: {
    canSelect: {
      type: Boolean,
      required: true
    },
    schedulesList: {
      type: Array<{
        times: Array<{ hour: string, active: boolean, selected: boolean, filtred: boolean, monitors: Array<Number> }>
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
  emits: ['validateSchedule', 'changeScheduleState', 'updateFilter', 'changeFiltredState'],
  setup(props, { emit }) {
    /************Refs**************/
    const localMonitor = ref([])



    /************Computed**************/
    const selectionLeft = computed(() => {
      const difference = props.maxSchedules - props.selectedSchedules
      return difference + '/' + props.maxSchedules
    })

    //Functions
    const selectSchedule = (time: number, index: number) => {
      if (props.schedulesList[time].times[index].active) {
        // allTime.value[time].times[index].selected =allTime.value[time].times[index].selected == true ? false : true
        emit('changeScheduleState', { time, index })
      }
    }
    const updateMonitor = () => {
      let time = 0;
      let index = 0;
      props.schedulesList.forEach((period) => {
        period.times.forEach((schedule) => {
          schedule.filtred = true;
          localMonitor.value.forEach(monitorValue => {
            console.log("time = " + time + "\nindex = " + index);
            if (!schedule.monitors.includes(monitorValue.value)) {
              schedule.filtred = false;
              if (schedule.selected) {
                emit('changeFiltredState', { time, index, value: true })
                emit('changeScheduleState', { time, index })
              }
              else {
                emit('changeFiltredState', { time, index, value: false })
              }
            }
          });
          index += 1;
          return schedule;
        })
        index = 0;
        time += 1;
        return period;
      })
    }

    return {
      ...props,
      selectionLeft,
      localMonitor,
      selectSchedule,
      updateMonitor,
    }
  },
  components: { Skeleton, pButton, SelectButton }
}
</script>
<template>
  <div>
    <div class="myi-5" v-show="!isLoading">
      <h6 class="title-steps">
        <span> Hello world</span>
      </h6>
      <div class="monitor-selector">
        <div class="monitor-form d-flex justify-content-center">
          <SelectButton v-model="localMonitor" :options="monitorList" optionDisabled="disabled" multiple
            optionLabel="name" class="d-inline-block" @update:modelValue="updateMonitor" />
        </div>
      </div>
      <div class="hours-content">
        <div class="block-time" v-for="(time, index) in schedulesList" :key="index">
          <h5 class="time-title">{{ time.name }}</h5>
          <div class="time-list">
            <button class="mb-2 time-btn" :class="{
              'active-btn': (heure.active && canSelect && !heure.filtred) || heure.selected,
              'desabled-btn': !(heure.active && canSelect) && !heure.selected || heure.filtred,
              'selected-btn': heure.selected
            }" v-for="(heure, i) in time.times" :key="i" :disabled="!heure.active || heure.filtred"
              @click="selectSchedule(index, i)">
              <span class="time">{{ heure.hour }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="hours-footer d-flex mt-4 justify-content-between">
        <div class="hours-action w-100 row col-md-6 justify-content-between d-flex">
          <div class="btn-container ml-n3 col-md-6">
            <pButton class="ml-n3 w-100 mx-auto" label="hello" />
          </div>
          <div class="btn-container col-md-6">
            <pButton class="w-100 mx-auto" label="Secondary" severity="secondary" />
          </div>
        </div>
        <div class="col-md-6">({{ selectionLeft }})</div>
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
