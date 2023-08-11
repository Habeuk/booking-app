import { stepsList } from '../app-configs'
import Vuex from 'vuex'
export default new Vuex.Store({
  state: {
    currentStep: 0,
    steps: stepsList,
    userState: {
      canSelect: !(stepsList[1].datas.schedulesCount >= stepsList[1].parameters.maxSchedules)
    }
  },
  mutations: {
    /**
     * 
     * @param {{value: any, index: number}} date 
     */
    SET_STEP_VALUE(state, payload) {
      console.log(payload)
      state.steps[payload.index].datas.value = payload.value;
      state.currentStep += 1;
      state.steps[payload.index].selectable = true;
      for (let index = payload.index + 1; index < state.steps.length; index++) {
        const step = state.steps[index];
        step.selectable = false;
      }
    },
    SET_CURRENT_STEP(state, payload) {
      state.currentStep = payload
    },
    /**
     *
     * @param {*} param0
     * @param {{time: number, index: number, value: boolean}} payload
     */
    SET_FILTER_STATE(state, payload) {
      const maxSchedules = state.steps[1].parameters.maxSchedules
      state.steps[1].parameters.schedulesList[payload.time].times[payload.index].filtred =
        payload.value
      if (state.steps[1].datas.schedulesCount >= maxSchedules) {
        state.userState.canSelect = false
      } else {
        state.userState.canSelect = true
      }
    },
    /**
     *
     * @param {*} param0
     * @param {{time: number, index: number}} payload
     */
    SET_SCHEDULE_STATE(state, payload) {
      console.log(payload)
      const maxSchedules = state.steps[1].parameters.maxSchedules
      const scheduleCount = state.steps[1].datas.schedulesCount
      const schedule = state.steps[1].parameters.schedulesList[payload.time].times[payload.index]
      if (
        (schedule.active && scheduleCount < maxSchedules) ||
        state.steps[1].parameters.schedulesList[payload.time].times[payload.index].selected
      ) {
        //reverse the value of selected
        state.steps[1].parameters.schedulesList[payload.time].times[payload.index].selected =
          !state.steps[1].parameters.schedulesList[payload.time].times[payload.index].selected
        if (schedule.selected) {
          state.steps[1].datas.schedulesCount += 1
          state.steps[1].datas.selectedSchedules.push(payload)
        } else {
          state.steps[1].datas.schedulesCount += -1
          state.steps[1].datas.selectedSchedules = state.steps[1].datas.selectedSchedules.filter(
            (element) => {
              return element.time != payload.time || element.index != payload.index
            }
          )
        }
        if (state.steps[1].datas.schedulesCount >= state.steps[1].parameters.maxSchedules) {
          state.userState.canSelect = false
        } else {
          state.userState.canSelect = true
        }
      }
    }
  },
  getters: {},
  actions: {
    set_current_Step({ commit, state }, payload) {
      if (state[payload.stepId - 1].selectable) {
        commit('SET_CURRENT_STEP', payload.stepId)
      }
    },

    updateMonitor({ commit, state }, payload) {
      let time = 0
      let index = 0
      const monitors = payload.monitors;
      state.steps[1].parameters.schedulesList.forEach((period) => {
        period.times.forEach((schedule) => {
          schedule.filtred = true
          if (!monitors.length) {
            console.log('changin state')
            commit('SET_FILTER_STATE', { time, index, value: false })
          }
          let filtred = false
          monitors.forEach((monitorValue) => {
            if (!filtred && !schedule.monitors.includes(monitorValue.value)) {
              console.log('disable')
              schedule.filtred = false
              filtred = true
              commit('SET_FILTER_STATE', { time, index, value: true })
              if (schedule.selected) {
                commit('SET_SCHEDULE_STATE', { time, index })
              }
            } else if (!filtred) {
              console.log('enable')
              commit('SET_FILTER_STATE', { time, index, value: false })
            }
          })
          index += 1
          return schedule
        })
        index = 0
        time += 1
      })
    },
  },
  modules: {}
})
