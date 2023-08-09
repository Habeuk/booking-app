export const lang = 'fr'
export const stepsList = [
  {
    id: 1,
    name: 'calendar',
    title: 'Veuillez sélectionner le jour de réservation',
    selectable: false,
    isLoading: true,
    parameters: {
      disabledDate: [],
      locale: lang
    },
    datas: {
      selectedDate: null
    }
  },
  {
    id: 2,
    name: 'schedule',
    title: 'veuillez selectionner les différentes plages horaires',
    selectable: false,
    isLoading: true,
    parameters: {
      schedulesList: [
        {
          name: '',
          times: [
            { hour: 'first', active: true, selected: false, monitor: [1, 2] },
            { hour: 'second', active: true, selected: false, monitor: [0, 1] },
            { hour: 'third' },
            { hour: 'forth', active: true, selected: false, monitor: [0, 2] }
          ]
        },
        {
          name: '',
          times: [
            { hour: 'first' },
            { hour: 'second', active: true, selected: true, monitor: [1, 2] },
            { hour: 'third' },
            { hour: 'forth', active: true, selected: true, monitor: [0, 1, 2] }
          ]
        }
      ],
      monitorList: [
        { name: "Ethan", value: 1, disabled: false },
        { name: "John", value: 2, disabled: false },
        { name: "Amina", value: 3, disabled: false },
      ],
      maxSchedules: 10
    },
    datas: {
      selectedSchedules: [],
      selectedMonitor: null,
      schedulesCount: 10
    }
  }
]
