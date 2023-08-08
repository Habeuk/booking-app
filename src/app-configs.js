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
            { hour: 'first', active: false, selected: false, monitor: [1, 2] },
            { hour: 'second', active: false, selected: false, monitor: [1, 2] },
            { hour: 'third' },
            { hour: 'forth', active: true, selected: false, monitor: [3] }
          ]
        },
        {
          name: '',
          times: [
            { hour: 'first' },
            { hour: 'second', active: true, selected: true, monitor: [1, 2] },
            { hour: 'third' },
            { hour: 'forth', active: true, selected: true, monitor: [1, 2] }
          ]
        }
      ],
      monitorList: ['monitor1', 'monitor2', 'monitor3'],
      maxSchedules: 10
    },
    datas: {
      selectedSchedules: [],
      selectedMonitor: null,
      schedulesCount: 10
    }
  }
]
