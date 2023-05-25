import logo from './logo.png'
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Login} from './components/Login'
import { Profile } from './components/Profile';
import { Registration } from './components/Registration';
import { MainPage } from './components/MainPage';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function App() {
  // const [login, setLogin] = useState(false)
  const login = useSelector(state => state.user.user);
  useEffect(()=>{
    console.log(login)
  })
  return (
    <div className="App">
      <header>
        <div className='container'>
          <div className='logo'>
            <img className='logo_img' src={logo}/>
          </div>
          <div className='menu'>
            <ul className='menu_container'>
              <li><Link to='/'>На главную</Link></li>
              <li><Link to='/login'>Логин</Link></li>
              <li><Link to={localStorage.getItem('auth') === 'true' ? '/profile' : '/login'}>Профиль</Link></li>
              <li><Link to={localStorage.getItem('auth') === 'true' ? '/' : '/registration'}>Регистрация</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className='main_page'>
          <Routes>
            <Route path='/' element = {<MainPage/>}/>
            <Route path='/profile' element = {<Profile/>} />
            <Route path='/registration' element = {<Registration/>}/>
            <Route path='/login' element = {<Login/>}/>

          </Routes>
       

        </div>
      </main>
    </div>
  );
}

export default App;
