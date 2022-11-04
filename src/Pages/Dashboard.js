import React from 'react';
import {useLocation} from 'react-router-dom';
import style from '../style.module.css';
import { useNavigate,Link } from 'react-router-dom';
const Dashboard = ({children}) => {
  const location = useLocation();
  // console.log(location.pathname.contains('/dashboard'));
  let a = location.pathname.split('/');
  console.log(a.includes('dashboard'));
  let navigate = useNavigate();
  return (
    <div className={style.bread}>
      {/* <div className={style.container}>
<ul className={style.breadcrumb}>
{(location.pathname.toLocaleUpperCase().split('/')).slice(1).map((data)=>
<li className={`${style.breadcrumb__item}`} key={data} onClick={()=>navigate(`/${data.toLocaleLowerCase()}`)}>
<span className={style.breadcrumb__inner}>
<span className={style.breadcrumb__title}>{data}</span>
</span>
</li>)}
</ul>
</div> */}
  <nav>
      <Link to="/dashboard"
        className={location.pathname === "/dashboard" ? style['breadcrumb-active'] : style["breadcrumb-not-active"]}
      >
        Home
      </Link>
      <span className={style["breadcrumb-arrow"]} style={location.pathname.split('/').includes('diary')?{display:'block'}:{display:'none'}}>&gt;</span>
      <Link to="/dashboard/diary" style={location.pathname.split('/').includes('diary')?{display:'block'}:{display:'none'}}
        className={location.pathname.startsWith("/dashboard/diary") ? style["breadcrumb-active"] : style["breadcrumb-not-active"]}
      >
        Products
      </Link>
    </nav>
        {children}
    </div>
  )
}

export default Dashboard