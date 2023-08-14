<script lang="ts">
import Skeleton from 'primevue/skeleton'
import { ref } from 'vue'

export default {
  props: {
    isLoading: Boolean,
    stepId: Number,
    title: String,
    icon: String,
    unavailableDates: {
      type: [],
      default: null
    }
  },
  emits: ['setDate'],
  setup(props, { emit }) {
    const date = ref(new Date())
    date.value.setDate(date.value.getDate() + 1)
    const disabledDates = ref([{ start: null, end: new Date() }])
    console.log(...disabledDates.value)
    if (props.unavailableDates) {
      disabledDates.value = [...disabledDates.value, ...props.unavailableDates]
    }
    const attr = ref([
      {
        highlight: true,
        dates: date,
        locale: 'fr'
      }
    ])
    const onSelect = (day: { date: Date }) => {
      // attr.value[0].dates = day.endDate
      // console.log(day.date < new Date())
      if (day.date > new Date()) {
        date.value = day.date
        emit('setDate', { value: date.value, index: 0 })
      }
    }

    return {
      ...props,
      attr,
      disabledDates,
      onSelect
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
    <h6 class="title-steps">
      <span :class="icon" class="mr-2"></span>
      <span>{{ title }}</span>
    </h6>
    <VCalendar
      :attributes="attr"
      :disabled-dates="disabledDates"
      @dayclick="onSelect"
      color="blue"
      locale="fr"
      expanded
    />
  </div>
</template>
<style lang="scss" scoped>
// .app-main-contain {
//   width: 100%;
//   @include media-breakpoint-up(md) {
//     width: 50%;
//   }
// }
</style>
