<script lang="ts">
import Skeleton from 'primevue/skeleton'
import { ref, computed } from 'vue'

export default {
  props: {
    isLoading: Boolean,
    stepId: Number,
    title: String,
    icon: String,
    minDate: Date,
    maxDate: Date,
    unavailableDates: {
      type: Array,
      default: null
    },
    currentDate: {
      type: [Date, String],
      required: true,
      default: new Date()
    }
  },
  emits: ['setDate'],
  setup(props, { emit }) {
    const selectedDate = ref(null)
    // date.value.setDate(date.value.getDate() + 1)
    const disabledDates = computed(() => {
      return props.unavailableDates
    })
    console.log(disabledDates.value)
    const attr = computed(() => {
      return [
        {
          locale: 'fr',
          highlight: true,
          dates: new Date(props.currentDate)
        }
      ]
    })
    const onSelect = (day: { isDisabled: boolean; value: any; id: any }) => {
      // attr.value[0].dates = day.endDate
      if (!day.isDisabled) {
        // date.value = day.date
        console.log(attr.value)
        // attr.value[0].dates = day
        emit('setDate', { value: { value: day.value, id: day.id }, index: 0 })
      }
    }

    return {
      ...props,
      attr,
      selectedDate,
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
      :min-date="minDate"
      :max-date="maxDate"
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
