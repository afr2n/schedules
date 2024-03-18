
export type ScheduleItemType = {
    id: number,
    title: string,
    description: string, 
    retire: boolean 
}
  

export type ScheduleLogEntriesType = {
    id: 1,
    scheduleId: 1,
    date: string,
    time: string,
    activity: string,
    location: string,
    presenters: string[],
    audience: string,
    purpose_objective: string,
    notes: string
}
  