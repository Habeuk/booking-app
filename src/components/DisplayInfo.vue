<script lang="ts">
import { ref } from 'vue'
import TimeLine from 'primevue/timeline'
console.log('Hello world')

export default {
  name: 'ResumedTab',
  props: {
    index: Number,
    steps: {
      type: Array<{ name: string; value: Array<string> | string }>,
      required: true
    },
    callToAction: String,
    step_title: String
  },
  emits: ['setReservation'],
  setup(props, { emit }) {
    //Refs
    const isConnected = ref(true)

    //Actions
    const setReservation = () => {
      emit('setReservation')
    }
    return {
      ...props,
      isConnected,
      setReservation
    }
  },
  components: { TimeLine }
}
</script>
<template>
  <div>
    <div class="myi-5">
      <h6 class="title-steps h2 font-weight-bold">
        <span class="ts-icon">
          <span :class="icon" class="mr-2"></span>
        </span>
        {{ step_title }}
      </h6>

      <div class="offers-content">
        <div class="option-selection os-selected" v-for="index in steps.length" :key="index">
          <div class="first-line">
            <div class="cc-titre">
              <span>{{ steps[index - 1].name }}</span>
            </div>
            <div class="check-circle">
              <span class="cc-rond">
                <p class="mb-0" :class="steps[index - 1].icon" font-scale="1"></p>
              </span>
            </div>
          </div>
          <div class="cc-description">
            <span
              v-if="
                steps[index - 1].value instanceof String ||
                typeof steps[index - 1].value == 'string'
              "
            >
              {{ steps[index - 1].value }}
            </span>
            <div v-else>
              <TimeLine :value="steps[index - 1].value" layout="horizontal">
                <template #content="slotProps">
                  <p v-html="slotProps.item.label"></p>
                </template>
              </TimeLine>
            </div>
          </div>
        </div>
      </div>
      <div class="book-bloc">
        <button class="book-btn" @click="setReservation()">
          {{ callToAction }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
