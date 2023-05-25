import { useState } from "react"
import data from "../user.json"
import { useDispatch } from "react-redux"
import { addData } from "../redux/todoSlice";
import { useNavigate } from 'react-router-dom'
export function Login() {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        login: '',
        password: ''
    })
    const [status, setStatus] = useState('')

    const dispatch = useDispatch();
    const addTask = () => {
        console.log(data)
        let answ = data.find((item) => item.login === login.login)
        console.log(answ)
        if (!!answ && answ.password == login.password) {
            console.log('good')
            dispatch(addData(answ));
            setLogin({
                login: '',
                password: ''
            })
            setStatus('Успешно')

        } else {
            setStatus('Имя пользователя или пароль введены не верно')
        }
        localStorage.setItem('auth', true)
        setTimeout(() => navigate('/profile', { replace: true }), 2000)

    }

    return (
        <>
            <div className='login_layout'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="container_form">
                        <h1>Введите данные</h1>
                        <span>{status}</span>
                        <hr />
                        <label htmlFor="login"><b>Логин</b></label>
                        <input type="text" value={login.login} placeholder="Введите логин" name="login" required onChange={(e) => setLogin(prev => { return { ...prev, login: e.target.value } })} />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input value={login.password} type="password" placeholder="Введите пароль" name="psw" required onChange={(e) => setLogin(prev => { return { ...prev, password: e.target.value } })} />
                        <hr />

                        <button type="submit" className="registerbtn" onClick={addTask}>Войти</button>
                    </div>
                </form>
            </div>
        </>
    )
}