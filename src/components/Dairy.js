import React,{useState, useRef} from 'react'
import style from '../style.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NoteAction } from '../redux/Calendaraction';
const Dairy = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const textInput = useRef(null);
    const [text, updateText] = useState('');
    const updateDisplay = (e) => {
      console.log(e.target.value);
        updateText(e.target.value);
        console.log(text);
        textInput.current.innerText=e.target.value;

    }
    const saveText = () => {
      let a = text;
      console.log("text------------->>",a);
      dispatch(NoteAction({a}));
      navigate("/year/month/day/diary/preview");
    }
  return (
    <div className={style.dairyContainer}>
        <div className={style.dairyView}>
            <textarea value={text} onChange={updateDisplay}/>
            <button onClick={saveText}>save</button>
            <pre ref={textInput}>
              
            </pre>
        </div>
    </div>
  )
}

export default Dairy