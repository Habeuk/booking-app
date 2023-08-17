import { stepsList } from './app-configs'
import Vuex from 'vuex'
import config from '../rootConfig'
export default new Vuex.Store({
  state: {
    currentStep: 0,
    steps: stepsList,
    configId: '',
    userState: {
      canSelect: !(stepsList[1].datas.schedulesCount >= stepsList[1].parameters.maxSchedules)
    }
  },
  mutations: {
    /**
     * Permet de mettre à jour l'id de la configuration à récupérer
     * @param {String} id
     */
    SET_CONFIG_ID(state, id) {
      state.configId = id
    },

    /**
     *
     * @param {{value: any, index: number}} payload
     */
    SET_STEP_VALUE(state, payload) {
      state.steps[payload.index].datas.value = payload.value
      state.currentStep += 1
      state.steps[payload.index].selectable = true
      for (let index = payload.index + 1; index < state.steps.length; index++) {
        state.steps[index].selectable = false
        if (state.steps[index - 1].datas.value) {
          state.steps[index].selectable = true
        }
      }
      if (state.currentStep == 1) {
        state.steps[1].datas.schedulesCount = 0;
        state.steps[1].datas.selectedSchedules = [];
      }
    },

    /**
     * Mets à jours les paramètre d'une étape
     * @param {{index: number, parameters: {any}} payload
     */
    SET_STEP_SETTINGS(state, payload) {
      state.steps[payload.index].parameters = payload.parameters
      console.log(payload)
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
      console.log("debug: ", payload)
      state.steps[1].parameters.monitorList[payload.index].disabled = payload.state
    }
  },
  getters: {
    getBookResume(state) {
      let index = 0
      return state.steps.map((step) => {
        let value = '';
        switch (index) {
          case 0:
            value = step.datas.value.id
            break;
          case 1:
            value = step.datas.value.map(schedule => schedule.hour)
            break;
          default:
            value = step.datas.value
            break;
        }
        return {
          icon: step.icon,
          name: step.name,
          value: value
        }
      })
    }
  },
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
      state.steps[1].parameters.schedulesList.forEach((period) => {
        period.times.forEach((schedule) => {
          schedule.filtred = true
          if (!monitors.length) {
            commit('SET_FILTER_STATE', { time, index, value: false })
          }
          let filtred = false
          monitors.forEach((monitorValue) => {
            if (!filtred && !schedule.monitors.includes(monitorValue.value)) {
              schedule.filtred = false
              filtred = true
              commit('SET_FILTER_STATE', { time, index, value: true })
              if (schedule.selected) {
                commit('SET_SCHEDULE_STATE', { time, index })
              }
            } else if (!filtred) {
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
      console.log(selectedSchedules);
      state.steps[1].parameters.monitorList.forEach((monitor) => {
        let monitorState = false
        if (selectedSchedules.length) {
          selectedSchedules.forEach((schIndex) => {
            console.log(schedulesList);
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
     */
    loadConfigs({ state, commit }) {
      // use dGet to enable authentication
      var parameters = {}
      switch (state.currentStep) {
        case 0:
          config
            .get(state.steps[0].url)
            .then((response) => {
              console.log(response.data.disabled_date)
              parameters.local = response.data.language
              parameters.minDate = new Date(response.data.date_begin)
              parameters.maxDate = new Date(response.data.date_end)
              parameters.disabledWeekDays = {
                repeat: {
                  every: 'weeks',
                  weekdays: response.data.disabled_days.map((day) => day + 1)
                }
              }
              const periodes = response.data.disabled_dates_periode.map((period) => {
                console.log(period)
                return { start: new Date(period.value), end: new Date(period.end_value) }
              })
              console.log(periodes)
              parameters.disabledDates = [
                ...response.data.disabled_dates.map((date) => new Date(date)),
                ...periodes
              ]
              commit('SET_STEP_SETTINGS', { index: 0, parameters })
              commit('SET_CONFIG_ID', response.data.booking_config_type_id)
              state.steps[1].url += response.data.booking_config_type_id + '/'
            })
            .catch((err) => {
              console.log(err)
            })
          break
        case 1:
          config
            .get(state.steps[1].url + state.steps[0].datas.value.id)
            .then((response) => {
              parameters.monitorList = response.data.monitor_list.map(monitor => {
                return { ...monitor, value: monitor.value - 1 }
              })
              parameters.maxSchedules = response.data.creneau_config.limit_reservation
              parameters.schedulesList = response.data.schedules_list.map((period) => {
                if (period.status) {
                  const schedules = period.times.map((schedule) => {
                    // alert("good")
                    // console.log("schedule: ", schedule)
                    return {
                      hour: response.data.creneau_config.show_end_hour
                        ? schedule.hour.start + ' - ' + schedule.hour.end
                        : schedule.hour.start,
                      begin: schedule.hour.start,
                      end: schedule.hour.end,
                      active: schedule.active,
                      monitors: schedule.monitors.map(monitor => monitor - 1),
                      selected: false,
                      scheduleFiltred: false,
                      filtred: false
                    }
                  })
                  return {
                    name: period.name,
                    times: schedules
                  }
                }
              })
              state.steps[1].parameters = parameters
              state.userState.canSelect = true
            })
            .catch((err) => {
              console.log(err)
            })
          break
        default:
          break
      }
      console.log('parameters: ', parameters)
      console.log(state)
    }
  },
  modules: {}
})
