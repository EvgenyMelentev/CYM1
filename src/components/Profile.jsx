import { useDispatch } from "react-redux"
import { addData } from "../redux/todoSlice";
import { useSelector } from 'react-redux';
export function Profile() {
    const login = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addData({ name: '', login: '', password: '' }))
        localStorage.clear()
    }
    return (
        <>
            <div className='profile'>
                <h1>Рад приветствовать</h1>
                <p>{login.name || 'Пожалуйста войдите в учетную запись'}</p>
                <button className='logout_button' onClick={addTask}>Я хочу выйти</button>
            </div>
        </>
    )
}