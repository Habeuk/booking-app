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
    }
  },
  emits: ['setDate'],
  setup(props, { emit }) {
    const date = ref(new Date())
    date.value.setDate(date.value.getDate() + 1)
    const disabledDates = computed(() => {
      return props.unavailableDates
    })
    console.log(disabledDates.value)
    const attr = ref([
      {
        locale: 'fr'
      }
    ])
    const onSelect = (day: { date: Date }) => {
      // attr.value[0].dates = day.endDate
      if (!day.isDisabled) {
        date.value = day.date
        emit('setDate', { value: { value: date.value, id: day.id }, index: 0 })
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
