import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import AddressLink from "../components/AddressLink.jsx";
import PlaceImg from "../components/PlaceImg.jsx";
import PlaceGallery from "../components/PlaceGallery.jsx";
import BookingDates from "../components/BookingDates.jsx";

const BookingPage = () => {
    const {id} = useParams()
    const [booking, setBooking] = useState(null)
    useEffect(() => {
        if (id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id)
                if (foundBooking) {
                    setBooking(foundBooking)
                }
            })
        }
    }, [id])


    if (!booking) {
        return 'Loading... '
    }

    return (
        <div className="my-8">
            <h1 className={"text-3xl"}>{booking.place.title}</h1>
            <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
            <div className={"my-6 p-6 rounded-2xl bg-neutral-900 flex items-center justify-between"}>
                <div>
                    <h2 className={"text-2xl mb-4"}>Ваша інформація про резервацію:</h2>
                    <BookingDates booking={booking}/>
                </div>
                <div className={"bg-primary p-6 text-white rounded-2xl"}>
                  Загальна цiна:
                    <div className="text-3xl">{booking.place.price} UAH</div>
                </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div>
    );
};

export default BookingPage;