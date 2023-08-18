<template>
  <div
    class="report"
    :class="[isLoading ? ['d-flex', 'justify-content-around', 'flex-column'] : '']"
  >
    <ProgressSpinner
      class="d-block mx-auto"
      v-if="isLoading"
      style="width: 50px; height: 50px"
      strokeWidth="8"
      fill="var(--surface-ground)"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
    <div
      v-else
      class="report-box"
      :class="{
        'report-box-success': reportState,
        'report-box-error': !reportState
      }"
    >
      <div class="dot"></div>
      <div class="dot two"></div>
      <div
        class="face"
        :class="{
          'face-happy': reportState,
          'face-sad': !reportState
        }"
      >
        <div class="eye"></div>
        <div class="eye right"></div>
        <div
          class="mouth"
          :class="{
            happy: reportState,
            sad: !reportState
          }"
        ></div>
      </div>
      <div
        class="shadow"
        :class="{
          scale: reportState,
          move: !reportState
        }"
      ></div>
      <div class="message">
        <div class="report-title alert">
          {{ getMessage }}
        </div>
        <div class="report-description">
          {{ getDescription }}
        </div>
      </div>

      <button @click="resetApp()" class="button-box">
        <div class="report-title green">
          {{ btnLabel }}
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, PropType } from 'vue'
import ProgressSpinner from 'primevue/progressspinner'
export default {
  name: 'BlocReservation',
  props: {
    isLoading: Boolean,
    reportState: Boolean,
    reportSuccess: {
      type: Object as PropType<{ resumed: String; message: String }>,
      required: true
    },
    reportError: {
      type: Object as PropType<{ resumed: String; message: String }>,
      required: true
    },
    btnLabel: {
      type: String,
      required: true
    }
  },
  emits: ['resetApp'],
  setup(props, { emit }) {
    //Computed
    const getMessage = computed(() => {
      return props.reportState ? props.reportSuccess.message : props.reportError.message
    })
    const getDescription = computed(() => {
      return props.reportState ? props.reportSuccess.resumed : props.reportError.resumed
    })

    //Functions
    //-Actions
    /**
     * reset the app
     */

    const resetApp = () => {
      emit('resetApp')
    }

    return {
      ...props,
      getMessage,
      getDescription,
      resetApp
    }
  },
  components: { ProgressSpinner }
}
</script>

<style lang="scss"></style>
