import { CalendarDay, CalendarMontn, CalendarYear, Note, Cred } from './Calendartype';

const initialStore = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  note: '',
  cred: false,
  token: ''
};

const CalendarReducer = (state = initialStore, action) => {
  switch (action.type) {
    case CalendarDay:
      return {
        ...state,
        day: action.payload,
      };
    case CalendarMontn:
      return {
        ...state,
        month: action.payload,
      };
    case CalendarYear:
      return {
        ...state,
        year: action.payload,
      };
      case Note:
        return {
          ...state,
          note: action.payload,
        }; 
      case Cred:
        return {
          ...state,
          cred: action.payload.cred,
          token: action.payload.token
        };  
    default:
      return state;
  }
};

export default CalendarReducer;
