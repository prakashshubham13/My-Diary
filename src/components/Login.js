import React,{useState} from 'react';
import axios from 'axios';
import style from '../style.module.css';
const Login = () => {
    const [form,updateForm] = useState({
        email:'',
        password:''
    })
    const updatefomDetails = (val) => {
        updateForm(prev =>({ ...prev,[val.target.name]:val.target.value}));
    }
    // const loginUser = () =>{
    //     axios.post(`http://localhost:5000/api/user/login`,{
    //         'email':form.email,
    //         'password':form.password
    //     }).then((res)=>{
    //         console.log(res.data);
    //         localStorage.setItem('name',res.data.name);
    //         localStorage.setItem('token',res.data.token);
    //         localStorage.setItem('userId',res.data._id);
    //         navigate("/chat");
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // } 
  return (
    <div className={style.login}>
    <input placeholder='Email' name="email" value={form.email} onChange={updatefomDetails}/>
    <input placeholder='Password' type="password" name="password" value={form.password} onChange={updatefomDetails}/>
    <button> Login</button>
    </div>
  )
}

export default Login