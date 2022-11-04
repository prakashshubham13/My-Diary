import React from 'react'
import { useSelector } from 'react-redux';
import { PageNotFound } from '../Pages';
const Protected = ({children}) => {
    const cred = useSelector((state) => state.CalendarReducer.cred);
  return (
    <>{cred ? children : <PageNotFound/>}</>
  )
}

export default Protected