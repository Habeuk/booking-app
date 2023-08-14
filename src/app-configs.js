export const lang = 'fr'
export const stepsList = [
  {
    index: 0,
    name: 'calendar',
    title: 'Veuillez sélectionner le jour de réservation',
    icon: 'pi pi-calendar',
    selectable: true,
    isLoading: true,
    parameters: {
      disabledDate: [],
      locale: lang
    },
    datas: {
      value: null
    }
  },
  {
    index: 1,
    name: 'schedule',
    icon: 'pi pi-clock',
    title: 'veuillez selectionner les différentes plages horaires',
    selectable: false,
    isLoading: true,
    parameters: {
      schedulesList: [
        {
          name: '',
          times: [
            {
              hour: 'first',
              active: true,
              selected: false,
              monitors: [1, 2],
              scheduleFiltred: false,
              filtred: false
            },
            {
              hour: 'second',
              active: true,
              selected: false,
              monitors: [0, 1],
              scheduleFiltred: false,
              filtred: false
            },
            {
              hour: 'third',
              active: false,
              selected: false,
              monitors: [],
              scheduleFiltred: false,
              filtred: false
            },
            {
              hour: 'forth',
              active: true,
              selected: false,
              monitors: [2],
              scheduleFiltred: false,
              filtred: false
            }
          ]
        },
        {
          name: '',
          times: [
            {
              hour: 'first',
              active: false,
              selected: false,
              monitors: [],
              scheduleFiltred: false,
              filtred: false
            },
            {
              hour: 'second',
              active: true,
              selected: true,
              monitors: [1, 2],
              scheduleFiltred: false,
              filtred: false
            },
            {
              hour: 'third',
              active: false,
              selected: false,
              monitors: [],
              scheduleFiltred: false,
              filtred: false
            },
            {
              hour: 'forth',
              active: true,
              selected: true,
              monitors: [1, 2],
              scheduleFiltred: false,
              filtred: false
            }
          ]
        }
      ],
      monitorList: [
        { name: 'Ethan', value: 0, disabled: false },
        { name: 'John', value: 1, disabled: false },
        { name: 'Amina', value: 2, disabled: false }
      ],
      maxSchedules: 10
    },
    datas: {
      selectedSchedules: [
        { time: 1, index: 1 },
        { time: 1, index: 3 }
      ],
      selectedMonitor: null,
      schedulesCount: 8,
      value: null
    }
  },
  {
    index: 2,
    name: 'Résumé',
    icon: 'pi pi-server',
    selectable: false,
    isLoading: false
  }
]
