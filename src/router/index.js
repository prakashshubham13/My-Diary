import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { HomePage,Dashboard,PageNotFound } from '../Pages';
import {CalanderMonth,CalanderYear,Dairy,DisplayDairy,Login,Signup} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import Protected from '../components/Protected';

const Myrouter = () => {
  const dispatch = useDispatch();
  const year = useSelector((state) => state.year);
  const month = useSelector((state) => state.month);
  const day = useSelector((state) => state.day);
  return (
   <>
    <Routes>
      <Route path="/" element={<HomePage />} exact/>
      <Route path="/year" element={<Dashboard><CalanderYear yearFlag={true}/></Dashboard>} exact/>
      <Route path="/year/month" element={<Dashboard><CalanderYear/></Dashboard>} exact/>
      <Route path="/dashboard" element={<Protected><Dashboard><CalanderMonth/></Dashboard></Protected>} exact/>
      {/* <Route path="/dashboard" element={<Dashboard><DisplayDairy/></Dashboard>} exact/> */}
      <Route path="/dashboard/diary" element={ <Protected><Dashboard><DisplayDairy/></Dashboard></Protected>} exact/>
      <Route path="*" element={<PageNotFound />} exact/>
    </Routes>
    </>
  )
}

export default Myrouter