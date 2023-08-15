import { stepsList } from './app-configs'
import Vuex from 'vuex'
import config from '../rootConfig'
export default new Vuex.Store({
  state: {
    dateCalendarUrl: '/booking-system/views-app-calendar?_format=json',
    // format de l'url Peut dans un getters. :)
    // dateCreneauxUrl:'/booking-system/views-app-creneaux/{booking_config_type_id}/{date}?_format=json',
    requestErrorMessage: '',
    currentStep: 0,
    steps: stepsList,
    userState: {
      canSelect: !(stepsList[1].datas.schedulesCount >= stepsList[1].parameters.maxSchedules)
    }
  },
  getters: {
    calandarConfig(state) {
      return state.steps[0]
    }
  },
  mutations: {
    /**
     *
     * @param {{value: any, index: number}} date
     */
    SET_STEP_VALUE(state, payload) {
      console.log(payload)
      state.steps[payload.index].datas.value = payload.value
      state.currentStep += 1
      state.steps[payload.index].selectable = true
      for (let index = payload.index + 1; index < state.steps.length; index++) {
        state.steps[index].selectable = false
        if (state.steps[index - 1].datas.value) {
          state.steps[index].selectable = true
        }
      }
    },
    /**
     *
     * @param {number} index
     */
    SET_CURRENT_STEP(state, index) {
      state.currentStep = index
    },
    /**
     *
     * @param {{value: boolean, index: {time: number, index: number}}} payload
     */
    SET_SCH_FILTER(state, payload) {
      const time = payload.index.time
      const index = payload.index.index
      console.log(payload)
      state.steps[1].parameters.schedulesList[time].times[index].scheduleFiltred = payload.value
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
    },
    /**
     *
     * @param {{index: number, state: boolean}} payload
     */
    SET_MONITOR_STATE(state, payload) {
      state.steps[1].parameters.monitorList[payload.index].disabled = payload.state
    }
  },
  getters: {},
  actions: {
    set_current_Step({ commit, state }, payload) {
      if (state[payload.stepId - 1].selectable) {
        commit('SET_CURRENT_STEP', payload.stepId)
      }
    },

    updateFilter({ commit, state }, payload) {
      let time = 0
      let index = 0
      const monitors = payload.monitors
      console.log('in')
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
    /**
     * à documenter ( vystii ! )
     * @param {*} param0
     */
    checkScheduleStep({ commit, dispatch, state }) {
      //shortcut for current State
      const selectedSchedules = state.steps[1].datas.selectedSchedules
      const schedulesList = state.steps[1].parameters.schedulesList

      //handling each monitors
      state.steps[1].parameters.monitorList.forEach((monitor) => {
        let monitorState = false
        if (selectedSchedules.length) {
          selectedSchedules.forEach((schIndex) => {
            console.log('starting')
            const schedule = schedulesList[schIndex.time].times[schIndex.index]
            //Disable the monitor filter if necessary
            if (!schedule.monitors.includes(monitor.value)) {
              monitorState = true
            }
          })
        } else {
          monitorState = true
          schedulesList.forEach((period) => {
            period.times.forEach((schedule) => {
              if (
                schedule.active &&
                !schedule.filtred &&
                schedule.monitors.includes(monitor.value)
              ) {
                monitorState = false
              }
            })
          })
        }
        commit('SET_MONITOR_STATE', { index: monitor.value, state: monitorState })
      })
      dispatch('updateAllSchedule')
    },
    /**
     * Désactiver les créneaux qui n'ont pas au moins un moniteur en commun avec les créneaux déjà selectionnés
     * @param {*} param0
     */
    updateAllSchedule({ commit, state }) {
      //shortcut for current State
      const schedulesList = state.steps[1].parameters.schedulesList
      const monitorList = state.steps[1].parameters.monitorList

      let time = 0
      let index = 0
      schedulesList.forEach((period) => {
        period.times.forEach((schedule) => {
          let filtred = true
          schedule.monitors.forEach((monitor) => {
            if (!monitorList[monitor].disabled) {
              filtred = false
            }
          })
          commit('SET_SCH_FILTER', { value: filtred, index: { time, index } })
          index += 1
        })
        time += 1
        index = 0
      })
    },
    /**
     * Recupere les données pour la configuration du calendrier.
     * @param {*} param0
     */
    loadDatesConfig({ state }) {
      // use dGet to enable authentication
      config
        .dGet(state.dateCalendarUrl)
        .then((response) => {
          // mapping reponse with defautl value.
          console.log('response : ', response)
        })
        .catch((err) => {
          state.requestErrorMessage = err.statusText
        })
    }
  },
  modules: {}
})
