import React,{useState} from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';
import style from '../style.module.css';
const HomePage = () => {
    const [form,changeForm] = useState(true);
  return (
<>
<div className={style.formContainer}>
        <div className={style.form}>
            <div className={style.option}>
            {/* <div className={`${style.tab} ${form && style.selected}`} onClick={()=>changeForm(prev=>!prev)}>Signup</div>
            <div className={`${style.tab} ${!form && style.selected}`}onClick={()=>changeForm(prev=>!prev)}>Login</div> */}
            </div>
            {/* {form?<Login/>:<Signup/>} */}
            <Signup/>
            </div>
        </div>
    <div className={style.animation}>
    <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
</>
  )
}

export default HomePage