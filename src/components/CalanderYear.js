import React,{useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../style.module.css';
import { monthArray, yearArray } from '../data/Data';
import { useDispatch } from 'react-redux';
import { CalendarMontnAction, CalendarYearAction } from '../redux/Calendaraction';
const CalanderYear = ({yearFlag=false, toggle=()=>{}}) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
    const myRef = useRef(null);
    useEffect(() => {
        myRef.current?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        myRef.current.className = `${style.focus} ${style.yearlist}`;
    }, [])
    const updateYear = (val) => {
      dispatch(CalendarYearAction(val));
      toggle();
      // navigate('/year/month');
    };
    const updateMonth = (val) => {
      dispatch(CalendarMontnAction(val));
      toggle();
      // navigate('/year/month/day');
    };
  return (
    <div className={style.yearlistContainer} onClick={()=>{toggle()}}>
        <div>
        <div>
        {yearFlag?yearArray.map((val,index)=><li key={val} onClick={()=>updateYear(val)} className={style.yearlist} ref={new Date().getFullYear() == val ? myRef : null}>{val}</li>):monthArray.map((val,index)=><li key={val} onClick={()=>updateMonth(index)} ref={new Date().getMonth() == index ? myRef : null} className={style.yearlist}>{val}</li>)}
        </div>
        </div>
    </div>
  )
}

export default CalanderYear