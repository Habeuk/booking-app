export const results :  {
    maxSchedules: Number,
    schedulesCount: Number,
    monitorList: Array<{ name: String, value: Number}>,
    schedulesList: Array<
    {
      name: String,
      times: Array<
        {
          hour: String,
          active: Boolean,
          monitors: Array<Number>
        }>
    }>
}
  =
    {
        schedulesList: [
            {
                name: '',
                times: [
                    { 
                        hour: 'first',
                        active: true,
                        monitors: [1, 2]
                    },
                ]
            }
        ],
        monitorList: [
            { 
                name: 'Ethan',
                value: 0
            }
        ],
        maxSchedules: 10,
        schedulesCount: 8,
    }