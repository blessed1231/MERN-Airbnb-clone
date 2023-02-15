import React, {useContext, useEffect, useState} from 'react';
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext.jsx";

const BookingWidget = ({place}) => {
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [numOfGuests, setNumOfGuests] = useState(1)
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [redirect, setRedirect] = useState('')
    const {user} = useContext(UserContext)


    useEffect(() => {
        if (user) {
            setName(user.name)
        }
    }, [user])

    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut),new Date(checkIn))
    }

    async function bookThisPlace() {
        const response =  await axios.post('/booking', {
             checkIn, checkOut, numOfGuests, name, mobile,
             place:place._id,
             price: numberOfNights * place.price
         })
        const bookingID = response.data._id
        setRedirect(`/account/bookings/${bookingID}`)
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
            <div className="bg-gray-700 shadow p-4 rounded-2xl">
                <h3 className="text-center text-2xl">
                    <b>Цiна: </b>UAH {place.price} / за нiч
                </h3>
                <div className="border rounded-2xl">
                    <div className="flex">
                        <div>

                        </div>
                        <div className="py-3 px-4">
                             <label>Заселення: </label>
                            <input className="rounded-xl mt-2
                            text-black p-2" type={"date"}
                                   value={checkIn}
                                   onChange={e => setCheckIn(e.target.value)}/>
                        </div>
                        <div className="py-3 px-4 border-l">
                            <label>Виселення: </label>
                            <input className="rounded-xl mt-2 p-2
                            text-black" type={"date"}
                                   value={checkOut}
                                   onChange={e => setCheckOut(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <div className="py-3 px-4 border-t">
                            <label>Кiлькiсть гостей</label>
                            <input className="rounded-xl mt-2 p-2 text-black"
                            type={"number"}
                            value={numOfGuests}
                            onChange={e => setNumOfGuests(e.target.value)}/>
                        </div>
                        <div>
                            {numberOfNights > 0 && (
                                <div className="py-3 px-4 border-t">
                                    <label>Ваше iм'я: </label>
                                    <input className="rounded-xl mt-2 p-2 text-black"
                                           type={"text"}
                                           value={name}
                                           onChange={e => setName(e.target.value)}/>
                                    <label>Ваш номер телефону: </label>
                                    <input className="rounded-xl mt-2 p-2 text-black"
                                           type={"tel"}
                                           value={mobile}
                                           onChange={e => setMobile(e.target.value)}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <button onClick={bookThisPlace} className={"primary mt-4"}>Забронюй це житло
                    <br />
                    {numberOfNights > 0 && (
                        <span> {numberOfNights * place.price} UAH</span>
                    )}
                </button>
            </div>
    );
};

export default BookingWidget;