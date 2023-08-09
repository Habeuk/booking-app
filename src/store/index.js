import { stepsList } from '../app-configs'
import Vuex from 'vuex'
export default new Vuex.Store({
  state: {
    currentStep: 1,
    steps: stepsList,
    userState: {
      canSelect: !stepsList[1].datas.schedulesCount >= stepsList[1].parameters.maxSchedules
    }
  },
  mutations: {
    SET_CURRENT_STEP(state, payload) {
      state.currentStep = payload
    },
    /**
     *
     * @param {*} param0
     * @param {{time: number, index: number, value: boolean}} payload
     */
    SET_FILTER_STATE(state, payload){
      const maxSchedules = state.steps[1].parameters.maxSchedules
      state.steps[1].parameters.schedulesList[payload.time].times[payload.index].filtered = payload.value;
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
    /**
     *
     * @param {*} param0
     * @param {{time: number, index: number}} payload
     */
    changeScheduleState({ commit }, payload) {
      console.log(payload)
      commit('SET_SCHEDULE_STATE', payload)
    },
    /**
     * @param {*} param0
     * @param {{time:number, index: number, value: boolean}} payload
     */
    changeFilterState({commit}, payload){
      commit('SET_FILTER_STATE', payload);
    }
  },
  modules: {}
})
