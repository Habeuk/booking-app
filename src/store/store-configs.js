export const lang = 'fr'
export const stepsList = [
  {
    index: 0,
    name: 'calendar',
    title: 'Veuillez sélectionner le jour de réservation',
    resumedLabel: 'Date Selectionnée',
    icon: 'pi pi-calendar',
    // url: '/booking-system/views-app-calendar/',
    // route provisoir
    url: '/booking-system-auto/views-app-calendar',
    selectable: true,
    isLoading: true,
    parameters: {
      disabledDates: [],
      locale: lang,
      initialPage: { month: 8, year: 2022 }
    },
    datas: {
      value: {
        id: new Date()
      }
    }
  },
  {
    index: 1,
    name: 'schedule',
    title: 'veuillez selectionner les différentes plages horaires',
    icon: 'pi pi-clock',
    url: '/booking-system/views-app-creneaux/',
    resumedLabel: 'Créneaux Selectionnés',
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
      schedulesCount: 0,
      value: null
    }
  },
  {
    index: 2,
    name: 'Résumé',
    title: 'Bilan de la commande',
    icon: 'pi pi-server',
    selectable: false,
    isLoading: false,
    url: '/booking-system/save-reservation/',
    datas: {
      value: null
    },
    parameters: {
      callToAction: 'Book now'
    }
  },
  {
    index: 3,
    name: 'Rapport',
    title: '',
    icon: '',
    isLoading: true,
    parameters: {
      reportState: false,
      reportSuccess: { resumed: 'yay, everything is working.', message: 'Success' },
      reportError: { resumed: 'oh no, something went wrong.', message: 'Error' },
      btnLabel: 'Book again'
    },
    datas: {}
  }
]
