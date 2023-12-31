export const lang = 'fr'
export const stepsList = [
  {
    index: 0,
    name: 'calendar',
    title: 'Veuillez sélectionner le jour de réservation',
    resumedLabel: 'Date Selectionnée',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 39.105 43.086" xml:space="preserve"><path d="M37.571 43.086a1.54 1.54 0 0 0 1.534-1.545v-6.729l-8.214 8.274h6.68zm0-39.398h-3.519V1.347C34.052.602 33.451 0 32.716 0c-.74 0-1.338.602-1.338 1.347v2.341h-2.591V1.347A1.34 1.34 0 0 0 27.449 0c-.74 0-1.338.602-1.338 1.347v2.341H23.52V1.347A1.34 1.34 0 0 0 22.183 0c-.735 0-1.336.602-1.336 1.347v2.341H18.26V1.347C18.26.602 17.658 0 16.922 0c-.739 0-1.338.602-1.338 1.347v2.341h-2.591V1.347A1.34 1.34 0 0 0 11.656 0c-.736 0-1.337.602-1.337 1.347v2.341H7.732V1.347C7.732.602 7.13 0 6.394 0c-.74 0-1.338.602-1.338 1.347v2.341H1.534C.688 3.688 0 4.381 0 5.234V41.54c0 .854.688 1.547 1.534 1.547h25.573L39.106 31V5.234a1.542 1.542 0 0 0-1.535-1.546zM20.815 32.521c0 .739-.599 1.347-1.338 1.347-.076 0-.152-.006-.228-.021a1.256 1.256 0 0 1-.231.021h-6.563a1.344 1.344 0 0 1-1.338-1.347 1.34 1.34 0 0 1 1.338-1.349h5.686V26.95h-5.686c-.741 0-1.338-.604-1.338-1.349s.597-1.347 1.338-1.347h5.686V20.44h-5.686a1.343 1.343 0 0 1-1.338-1.347 1.34 1.34 0 0 1 1.338-1.349h6.563a.98.98 0 0 1 .231.023.975.975 0 0 1 .228-.023c.738 0 1.338.601 1.338 1.349v13.428zm7.175 0c0 .739-.598 1.347-1.339 1.347a1.346 1.346 0 0 1-1.337-1.347V19.094c0-.748.601-1.349 1.337-1.349.741 0 1.339.601 1.339 1.349v13.427z"/></svg>',
    url: '/booking-system/views-app-calendar/',
    // route provisoir
    // url: '/booking-system-auto/views-app-calendar',
    selectable: true,
    isLoading: true,
    parameters: {
      minDate: new Date(),
      maxDate: new Date(),
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
    icon: '<svg fill="currentColor" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm6.2 21.18a1 1 0 0 1-1.39.28l-5.9-4v-8.71a1 1 0 0 1 2 0v7.65l5 3.39a1 1 0 0 1 .29 1.39Zm-.35-14.95a11.39 11.39 0 1 0-8.54 20.83L15 30.63a13 13 0 1 1 9.7-23.77Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>',
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
      /**
       * Value => represente l'index dans le tableaux de moniteurs.( valeur possible 1+n et consecutive )
       */
      monitorList: [
        { name: 'Ethan', value: 0, disabled: false },
        { name: 'John', value: 1, disabled: false },
        { name: 'Amina', value: 2, disabled: false }
      ],
      maxSchedules: 10,
      hoursRemaining: 0
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
    icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M19.45 18.47a1.12 1.12 0 1 1 1.15-1.09 1.13 1.13 0 0 1-1.15 1.09Zm0 1a2.08 2.08 0 1 0-1.45-.63 2.08 2.08 0 0 0 1.47.61Zm.01-15.14A2.07 2.07 0 0 0 18 7.87a2 2 0 0 0 1.47.6 2.08 2.08 0 1 0 0-4.15Zm.8 2.86a1.08 1.08 0 0 1-.81.31 1.11 1.11 0 1 1 1.15-1.08 1.14 1.14 0 0 1-.34.77ZM15.9 10h-.05v.95h.07a1.11 1.11 0 0 1 0 2.22h-.07v1h.07a2.08 2.08 0 1 0 0-4.15Zm-4.58-8C6.43 2 2.46 4 2.46 6.4s4 4.41 8.86 4.41h.1V2Z"/><path fill="currentColor" d="M11.32 12.52a14 14 0 0 1-6.27-1.25 4.45 4.45 0 0 1-2.44-2.38h-.15V12c0 2.43 4 4.4 8.86 4.4h.1v-3.9Z"/><path fill="currentColor" d="M11.32 18.1a14 14 0 0 1-6.27-1.24 4.45 4.45 0 0 1-2.44-2.38h-.15v3.12c0 2.43 4 4.4 8.86 4.4h.1v-3.9ZM13.64 2h2.22v20h-2.22z"/></svg>',
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
