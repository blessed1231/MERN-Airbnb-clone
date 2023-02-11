import React, {useState} from 'react';
import PhotosUploader from "./PhotosUploader.jsx";
import Perks from "./Perks.jsx";
import axios from "axios";
import AccountNav from "./AccountNav.jsx";
import {Navigate} from "react-router-dom";

const PlaceFormPage = () => {
    const [addedPhotos, setAddedPhotos] = useState('')
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [desc, setDesc] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState('1')
    const [perks, setPerks] = useState([])
    const [redirect, setRedirect] = useState(false)

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

    async function addNewPlace(e) {
        e.preventDefault()
        await axios.post('/places', {
            title,
            address,
            addedPhotos,
            desc,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests
        })
        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }
    return (
        <div>
            <AccountNav />
            <form onSubmit={addNewPlace}>
                {preInput('Заголовок', 'Заголовок для вашего житла')}
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Заголовок, на приклад: Затишний будиночок xD"/>
                {preInput('Адреса','Певна адреса мешкання')}
                <input type={"text"} value={address} onChange={e => setAddress(e.target.value)} placeholder={"Адреса"}/>
                {preInput('Додай фотографії','Додай чудовi фотографії житла')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                {preInput('Опис до оголошення','Опишiть що дивовижного в вашему мекашнню')}
                <textarea value={desc} onChange={e => setDesc(e.target.value)}/>
                {preInput('Опції', '')}
                <Perks selected={perks} onchnage={setPerks}/>
                {preInput('Додаткова інформація','Правила проживання, прохання та зауваження')}
                <textarea  value={extraInfo} onChange={e => setExtraInfo(e.target.value)}/>
                {preInput('Чек-iн та Чек-аут, максимальна кiлькiсть замешканцiв','Додай час Чек-iну, пам`ятай про час коли треба прибрати мешкання<')}
                <div className="grid gap-2 sm:grid-cols-3">
                    <div>
                        <h3 className="mt-2 -mb-1 ">Час чек-iну</h3>
                        <input type={"text"} placeholder="14:00" value={checkIn} onChange={e => setCheckIn(e.target.value)}/>
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1 ">Час чек-ауту</h3>
                        <input type={"text"} value={checkOut} onChange={e => setCheckOut(e.target.value)} placeholder="12:00"/>
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1 ">Максимальна кiлькiсть гостей</h3>
                        <input type={"number"} value={maxGuests} onChange={e => setMaxGuests(e.target.value)}/>
                    </div>
                </div>
                <button className="primary my-4">Зберiгти</button>
            </form>
        </div>
    );
};

export default PlaceFormPage;