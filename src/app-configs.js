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
            { hour: 'first', active: true, selected: false, monitors: [1, 2], filtered: false},
            { hour: 'second', active: true, selected: false, monitors: [0, 1], filtered: false },
            { hour: 'third' , active: false, selected: false, monitors: [], filtered: false},
            { hour: 'forth', active: true, selected: false, monitors: [0, 2], filtered: false }
          ]
        },
        {
          name: '',
          times: [
            { hour: 'first' , active: false, selected: false, monitors: [], filtered: false},
            { hour: 'second', active: true, selected: true, monitors: [1, 2], filtered: false },
            { hour: 'third', active: false, selected: false, monitors: [], filtered: false },
            { hour: 'forth', active: true, selected: true, monitors: [0, 2], filtered: false }
          ]
        }
      ],
      monitorList: [
        { name: "Ethan", value: 0, disabled: false },
        { name: "John", value: 1, disabled: false },
        { name: "Amina", value: 2, disabled: false },
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
