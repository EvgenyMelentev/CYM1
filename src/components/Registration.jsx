import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addData } from "../redux/todoSlice";
import data from "../user.json"
import { Link } from 'react-router-dom'

export function Registration() {
    const dispatch = useDispatch();
    const addTask = () => {
        let answ = data.find((item) => item.login === user.login)
        if (!!answ) {
            setStatus('Пользователь с таким логином уже зарегистрирован')
            return
        }
        if (user.password > 0 && user.password !== user.checkPassword) {
            setStatus('Пароль не совпадает')
            return
        }
        setStatus('Успешно')
        setVisibility(true)
        setUser({
            name: '',
            login: '',
            password: '',
            checkPassword: ''
        })
        dispatch(addData(user))
        localStorage.setItem('auth', true)
    }

    const [user, setUser] = useState({
        name: '',
        login: '',
        password: '',
        checkPassword: ''
    })
    const [status, setStatus] = useState(
        ''
    )
    const [visibility, setVisibility] = useState(false)
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="container_form">
                    <h1>Регистрация  {visibility && <Link to='/profile' className="link_to"><span>Перейти в профиль</span></Link>}</h1>
                    <span>{status}</span>

                    <hr />
                    <label htmlFor="name"><b>Имя</b></label>
                    <input value={user.name} type="text" placeholder="Введите имя" name="name" required onChange={(e) => setUser(prev => { return { ...prev, name: e.target.value } })} />
                    <label htmlFor="login"><b>Логин</b></label>
                    <input value={user.login} type="text" placeholder="Введите логин" name="login" required onChange={(e) => setUser(prev => { return { ...prev, login: e.target.value } })} />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input value={user.password} type="password" placeholder="Введите пароль" name="psw" required onChange={(e) => setUser(prev => { return { ...prev, password: e.target.value } })} />
                    <label htmlFor="psw_repeat"><b>Password</b></label>
                    <input value={user.checkPassword} type="password" placeholder="Повторите пароль" name="psw_repeat" required onChange={(e) => setUser(prev => { return { ...prev, checkPassword: e.target.value } })} />

                    <hr />
                    {/* 
                    <button type="submit" className="registerbtn" onClick={() => localStorage.setItem('remember', 2)}>Зарегистрироваться</button> */}
                    <button type="submit" className="registerbtn" onClick={addTask}>Зарегистрироваться</button>
                </div>


            </form>
        </>
    )
}