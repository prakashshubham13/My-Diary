import {
  CalendarDay,
  CalendarMontn,
  CalendarYear,
  Note,
  Cred
  } from './Calendartype';
  
  export const CalendarDayAction = (data) => ({
    type: CalendarDay,
    payload: data
  });
  export const CalendarMontnAction = (data) => ({
    type: CalendarMontn,
    payload: data,
  });
  export const CalendarYearAction = (data) => ({
    type: CalendarYear,
    payload: data,
  });
  export const NoteAction = (data) => ({
    type: Note,
    payload: data,
  });
  export const CredAction = (data) => ({
    type: Cred,
    payload: data,
  });