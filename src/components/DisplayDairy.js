import React,{useState, useEffect} from 'react'
import style from '../style.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { NoteAction } from '../redux/Calendaraction';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiFillSave,AiTwotoneLock,AiOutlineUnlock } from "react-icons/ai";
const DisplayDairy = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const note = useSelector((state) => state.CalendarReducer.note);
  const year = useSelector((state) => state.CalendarReducer.year);
  const month = useSelector((state) => state.CalendarReducer.month);
  const day = useSelector((state) => state.CalendarReducer.day);
  const token = useSelector((state) => state.CalendarReducer.token);
  const [date, updateDate] = useState("");
  const [lock, updateLock] = useState(true);
  useEffect(() => {
    updateDate(new Date(year,month,day).toDateString());
    axios.post(`http://localhost:5000/api/note/getnote`,{"user":token,"date":new Date(year,month,day).toDateString()}).then((res)=>{
      console.log(res.data.note);
      dispatch(NoteAction(res.data.note))
  }).catch((err)=>{
      console.log(err);
  })
  }, []);
  const saveNotes = () => {
    axios.post(`http://localhost:5000/api/note/save`,{"user":token,date:date,note:note}).then((res)=>{
      console.log(res.data);
  }).catch((err)=>{
      console.log(err);
  })
  }
  return (
    <div className={style.displayContainer}>
        <div className={style.dairyoption}>
          <button className={!lock ? style.focusBtn : style.disableBtn} onClick={()=>updateLock(prev=>!prev)}>{lock ? <div><AiTwotoneLock/> Edit Mode Off</div>: <div><AiOutlineUnlock/> Edit Mode On</div>  }</button>
          <button className={style.focusBtn} onClick={saveNotes}>Save <AiFillSave/></button>
        </div>
                <div className={style.dairyDisplay}>
            <div className={style.dairyDisplayContainer}>
                <div className={style.dairyDisplayInner} >
                  <h6 className={style.date_heading}>{""}{date}</h6>
               <textarea onChange={(e)=>{dispatch(NoteAction(e.target.value))}} disabled={lock} value={note}></textarea>
  </div>

            </div>
        </div>
    </div>
  )
}

export default DisplayDairy