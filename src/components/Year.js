import React,{useRef, useEffect} from 'react'
import style from '../style.module.css'
import { yearArray } from '../data/Data';
const Year = () => {
    const myRef = useRef(null);
    useEffect(() => {
        myRef.current?.scrollIntoView({behavior: "smooth" });
        myRef.current.className = style.focus;
    }, [])
  return (
    <div className={style.year_container}>
{yearArray.map((val)=><li ref={new Date().getFullYear() == val ? myRef : null}>{val}</li>)}
    </div>
  )
}

export default Year