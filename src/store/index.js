import { stepsList } from './store-configs'
import Vuex from 'vuex'
import config from '../rootConfig'
export default new Vuex.Store({
  state: {
    currentStep: 0,
    steps: stepsList,
    configId: '',
    userState: {
      canSelect: !(stepsList[1].datas.schedulesCount >= stepsList[1].parameters.maxSchedules)
    },
    //Permet de determiner si l'utilisateur a acces à l'App.
    access: true,
    ban_reason: ''
  },
  mutations: {
    /**
     * Reset application
     */
    RESET_APP(state) {
      state.currentStep = 0
      state.steps[0].datas.value = { id: new Date() }
      for (let index = 1; index < state.steps.length; index++) {
        state.steps[index].datas.value = null
        state.steps[index].selectable = false
      }
      state.steps[1].datas.schedulesCount = 0
      state.steps[1].datas.selectedSchedules = []
      state.steps[1].datas.selectedMonitor = null
    },
    /**
     * Permet de mettre à jour l'id de la configuration à récupérer
     * @param {String} id
     */
    SET_CONFIG_ID(state, id) {
      state.configId = id
    },
    /**
     * definit l'url pour les paths
     * @param {{index: number, url: string}} payload
     */
    SET_STEP_URL(state, payload) {
      state.steps[payload.index].url = payload.url + '/'
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
        state.steps[index].isLoading = true
        if (state.steps[index - 1].datas.value) {
          state.steps[index].selectable = true
        }
      }
      if (state.currentStep == 1) {
        state.steps[1].datas.schedulesCount = 0
        state.steps[1].datas.selectedSchedules = []
        state.steps[1].datas.selectedMonitor = null
      }
    },

    /**
     * Mets à jours les paramètre d'une étape
     * @param {index: number, parameters: {any}} payload
     */
    SET_STEP_SETTINGS(state, payload) {
      state.steps[payload.index].parameters = payload.parameters
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
      state.steps[1].parameters.monitorList[payload.index].disabled = payload.state
    }
  },
  getters: {
    getBookResume(state) {
      let index = 0
      return [
        ...state.steps
          .map((step) => {
            if (index < 2) {
              let value = ''
              switch (index) {
                case 0:
                  value = step.datas.value.id
                  break
                case 1:
                  value = step.datas.value.map((schedule) => {
                    return {
                      label: schedule.begin + ' - ' + schedule.end,
                      begin: schedule.begin,
                      end: schedule.end
                    }
                  })
                  break
                default:
                  value = step.datas.value
                  break
              }
              index += 1
              return {
                icon: step.icon,
                name: step.resumedLabel,
                value: value
              }
            }
            index += 1
          })
          .filter((element) => typeof element !== 'undefined'),
        {
          icon: '<svg viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a3.499 3.499 0 1 0 0 6.996A3.499 3.499 0 1 0 7.5 0Zm-2 8.994a3.5 3.5 0 0 0-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 0 0-3.5-3.5h-4Z"/></svg>',
          name: 'Moniteur',
          monitor: state.steps[1].datas.selectedMonitor
            ? state.steps[1].datas.selectedMonitor
            : state.steps[1].parameters.monitorList.find((element) => !element.disabled),
          value: state.steps[1].datas.selectedMonitor
            ? state.steps[1].datas.selectedMonitor.name
            : state.steps[1].parameters.monitorList.find((element) => !element.disabled).name
        }
      ]
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
            state.steps[1].datas.selectedMonitor = null
          }
          let filtred = false

          monitors.forEach((monitorValue) => {
            state.steps[1].datas.selectedMonitor = monitorValue
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
      state.steps[1].parameters.monitorList.forEach((monitor) => {
        let monitorState = false
        if (selectedSchedules.length) {
          selectedSchedules.forEach((schIndex) => {
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
      // shortcut for current State
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
              state.access = response.data.access
              if (!state.access) state.ban_reason = response.data.ban_reason
              parameters.local = response.data.language
              parameters.minDate = new Date(response.data.date_begin)
              parameters.maxDate = new Date(response.data.date_end)
              parameters.disabledDates = [
                {
                  repeat: {
                    weekdays: response.data.disabled_days.map((day) => day + 1)
                  }
                }
              ]
              const periodes = response.data.disabled_dates_periode.map((period) => {
                return { start: new Date(period.value), end: new Date(period.end_value) }
              })
              parameters.disabledDates = [
                ...parameters.disabledDates,
                ...response.data.disabled_dates.map((date) => new Date(date)),
                ...periodes
              ]
              commit('SET_STEP_SETTINGS', { index: 0, parameters })
              state.steps[0].datas.value = { id: parameters.minDate }
              commit('SET_CONFIG_ID', response.data.booking_config_type_id)
              state.steps[0].isLoading = false
              if (
                state.steps[1].url.split('/').reverse()[1] != response.data.booking_config_type_id
              ) {
                state.steps[1].url += response.data.booking_config_type_id + '/'
                state.steps[2].url += response.data.booking_config_type_id + '/'
              }
            })
            .catch((err) => {
              console.log(err)
            })
          break
        case 1:
          config
            .get(state.steps[1].url + state.steps[0].datas.value.id)
            .then((response) => {
              parameters.monitorList = response.data.monitor_list.map((monitor) => {
                return { ...monitor, value: monitor.value - 1 }
              })
              parameters.maxSchedules = response.data.creneau_config.limit_reservation
              parameters.hoursRemaining = response.data.hours
              parameters.schedulesList = response.data.schedules_list.map((period) => {
                if (period.status) {
                  const schedules = period.times.map((schedule) => {
                    return {
                      hour: response.data.creneau_config.show_end_hour
                        ? schedule.hour.start + ' - ' + schedule.hour.end
                        : schedule.hour.start,
                      begin: schedule.hour.start,
                      end: schedule.hour.end,
                      active: schedule.active,
                      monitors: schedule.monitors.map((monitor) => monitor - 1),
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
              state.steps[1].isLoading = false
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
    },
    setReservation({ state, getters }) {
      this.commit('SET_STEP_VALUE', { index: 2, value: null })

      const formFilled = getters.getBookResume
      const data = {
        creneaux: formFilled[1].value.map((schedule) => {
          return {
            hour_start: schedule.begin,
            hour_end: schedule.end,
            equipe: formFilled[2].monitor,
            date_start: formFilled[0].value,
            date_end: formFilled[0].value
          }
        })
      }
      config
        .post(state.steps[2].url, data)
        .then(() => {
          state.steps[3].isLoading = false
          state.steps[3].parameters.reportState = true
        })
        .catch(() => {
          state.steps[3].isLoading = false
          state.steps[3].parameters.reportState = false
        })
    }
  },
  modules: {}
})
