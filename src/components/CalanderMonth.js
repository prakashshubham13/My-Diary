import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CalendarDayAction, NoteAction } from '../redux/Calendaraction';
import style from '../style.module.css';
import { AiFillCaretDown } from "react-icons/ai";
import Dropdown from './Dropdown';
import CalanderYear from './CalanderYear';
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const CalanderMonth = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const year = useSelector((state) => state.CalendarReducer.year);
  const month = useSelector((state) => state.CalendarReducer.month);
  const day = useSelector((state) => state.CalendarReducer.day);
  const token = useSelector((state) => state.CalendarReducer.token);
  const [dateArr, updateDateArr] = useState([]);
  const [yearMonthFlag, updateyearMonthFlag] = useState({show:false,year:true});
    useEffect(() => {
      dispatch(NoteAction(''))
      console.log(year,month);
        let lastDate = new Date(year,month+1,0).getDate();
        console.log(lastDate);
        console.log("--->",lastDate);
        let a = new Date(`${year}/${month+1}/1`).getDay();
        console.log(a);
        console.log(weekday[a]);
        updateDateArr(Array(lastDate).fill().map((val,index)=>index+1));
        let c = Array(a).fill(".");
        updateDateArr(prev=>[...c,...prev]);
        console.log("--------------------------------------");
        console.log(new Date(year,month,29).setHours(0,0,0,0));
        console.log(new Date().setHours(0,0,0,0));
    }, []);
    const updateDay = (val) => {
      dispatch(CalendarDayAction(val));
      navigate('/dashboard/diary');
    }
  return (
    <>
    {yearMonthFlag?.show ? <CalanderYear yearFlag={yearMonthFlag.year} toggle={()=>{updateyearMonthFlag({show:false,year:true})}}/> : null}
    <div className={style.calender_container}>
    <div className={style.calender}>
    <div className={style.option}>
<div className={style.tab}>
{monthArr[month]}
      <span className={style.sub}> - {year}</span>
</div>
</div>
<div className={style.category}>
  <div className={style.category_name} onClick={()=>updateyearMonthFlag({show:!yearMonthFlag.show,year:false})}>
    <div>{monthArr[month]}  <span><AiFillCaretDown/></span></div>
    
  </div>
  <div className={style.category_name} onClick={()=>updateyearMonthFlag({show:!yearMonthFlag.show,year:true})}>
    <div>{year}  <span><AiFillCaretDown/></span></div>
  </div>
</div>
<ul className={style.weekdays}>
  {weekday.map((val)=><li key={val}>{val.substring(0,2)}</li>)}
</ul>

<ul className={style.days}>  
{dateArr.map((val,index)=><li key={index} onClick={()=>{updateDay(val)}}><div className={`${style.date} ${new Date().setHours(0,0,0,0)==new Date(year,month,val).setHours(0,0,0,0)?style.active:''} ${val=='.' ? style.none : ''}`}>{val}</div></li>)}
</ul>
</div>
</div>
</>
  )
}

export default CalanderMonth