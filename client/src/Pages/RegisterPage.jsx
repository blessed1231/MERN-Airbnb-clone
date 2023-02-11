import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  async function  regUser(e) {
        try {
            e.preventDefault()
            await axios.post('/register', {
                name,
                email,
                password,
            })
            alert('Регестрация успешна')
        } catch (e) {
            alert('Ошибка! попробуйте зарегестрироваться позже')
        }


    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-10">Реєстрація</h1>
                <form className="max-w-md mx-auto " onSubmit={regUser}>
                    <input type="text" placeholder={"Ваше ім'я"}  value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder={"Ваш@емейл.com"} value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Ваш пароль" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="primary">
                        Реєстрація
                    </button>
                    <div className="text-center py-2 text-gray-500">
                        Вже зареєстрований? <Link className="underline text-0a0a0a" to={'/login'}>Увiйти</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;