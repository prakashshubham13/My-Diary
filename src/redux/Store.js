import { applyMiddleware, compose, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import CalendarReducer from './Calendarreducer';
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [ sagaMiddleware];

const rootReducer = combineReducers({
    CalendarReducer
})

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: middleWares,
        devTools: process.env.NODE_ENV !== 'production',
    }
);
sagaMiddleware.run(rootSaga);
export default store;
