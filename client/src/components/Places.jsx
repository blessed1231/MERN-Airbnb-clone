import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Perks from "./Perks.jsx";

const Places = () => {
    const [title, setTitle] = useState('')
    const [adress, setAddress] = useState('')
    const [addedFotos, setAddedFotos] = useState([])
    const [fotoLink, setFoloLink] = useState('')
    const [desc, setDesc] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState(1)
    const {action} =useParams()

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }

    function inputDescription(text) {
        return (
            <p className="text-gray-200 text-sm">{text}</p>
        )
    }

    function preInput (header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        )
    }

    return (
        <div>
            {action !== 'new' && (
            <div className="text-center">
                <Link className=" inline-flex gap-1 bg-primary text-0a0a0a py-2 px-6 rounded-full" to={"/account/places/new"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Додай свое житло
                </Link>
            </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        {preInput('Заголовок', 'Заголовок для вашего житла')}
                                <input type="text" placeholder="Заголовок, на приклад: Затишний будиночок xD"/>
                        {preInput('Адреса','Певна адреса мешкання')}
                                <input type={"text"} placeholder={"Адреса"}/>
                        {preInput('Додай фотографії','Додай чудовi фотографії житла')}
                        <div className="flex">
                             <input type="text" placeholder="Додай використиючи посилання ...jpg"/>
                                  <button className="bg-gray-200 px-4 gap-2 rounded-2xl text-black">Додай&nbsp;фотографії</button>
                        </div>
                        <div className="mt-3 grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4">
                            <button className="border bg-transparent rounded-2xl p-8 text-2xl text-white-500 hover:bg-primary flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                Додай фотографії з вашего пристрою
                            </button>
                        </div>
                        {preInput('Опис до оголошення','Опишiть що дивовижного в вашему мекашнню')}
                                <textarea />
                        {preInput('Опц', '')}
                        <Perks />
                        <h2 className="text-2xl mt-4">Додаткова iнформацiя</h2>
                            <p className="text-gray-200 text-sm">Правила поведiнкi, зауваження до мешканцiв</p>
                                 <textarea />
                        <h2 className="text-2xl mt-4">Чек-iн та Чек-аут, максимальна кiлькiсть замешканцiв</h2>
                            <p className="text-gray-200 text-sm">Додай час Чек-iну, пам`ятай про час коли треба прибрати мешкання</p>
                                <div className="grid gap-2 sm:grid-cols-3">
                                    <div>
                                        <h3 className="mt-2 -mb-1 ">Час чек-iну</h3>
                                        <input type={"text"} placeholder="14:00"/>
                                    </div>
                                    <div>
                                        <h3 className="mt-2 -mb-1 ">Час чек-ауту</h3>
                                        <input type={"text"} placeholder="12:00"/>
                                    </div>
                                    <div>
                                        <h3 className="mt-2 -mb-1 ">Максимальна кiлькiсть гостей</h3>
                                        <input type={"text"}/>
                                    </div>
                                </div>
                        <button className="primary my-4">Зберiгти</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Places;