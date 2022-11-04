import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage';
import HomePage from './Pages/HomePage';
import Myrouter from './router';
import {BrowserRouter} from 'react-router-dom';
import CalanderMonth from './components/CalanderMonth';
import CalanderYear from './components/CalanderYear';
import Dairy from './components/Dairy';
import DisplayDairy from './components/DisplayDairy';
import { Provider } from "react-redux";
import store from "./redux/Store";
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Provider store={store}>  
    <Myrouter/>
    </Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
