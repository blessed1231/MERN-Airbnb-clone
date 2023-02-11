import React, {useContext, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../UserContext.jsx";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
   const {setUser} = useContext(UserContext)
    async function handleLoginSubmit(e) {
        e.preventDefault()
        try {
            const {data}= await axios.post('/login', {email, password})
            setUser(data)
            alert('победа!')
            setRedirect(true)
        } catch (e) {
            alert('Попробуйте войти позже')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-10">Доброго дня</h1>
                <form className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
                    <input type="email" placeholder={"Ваш@емейл.com"} onChange={e => setEmail(e.target.value)} value={email}/>
                    <input type="password" placeholder="Ваш пароль"  value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="primary">
                        Увiйти
                    </button>
                    <div className="text-center py-2 text-gray-500">
                        Досi не маш аккаунту?  <Link className="underline text-0a0a0a" to={'/register'}>Зареєструйся</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;