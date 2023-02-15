import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import BookingWidget from "../components/BookingWidhet.jsx";
import PlaceGallery from "../components/PlaceGallery.jsx";
import AddressLink from "../components/AddressLink.jsx";

const PlacePage = () => {
    const [showAllPhotos, setShowAllPhotos] = useState(false)
    const {id} = useParams();
    const [place, setPlace] = useState(null)
    useEffect(() => {
        if(!id) {
            return
        }
        axios.get(`/places/${id}`).then(res => {
            setPlace(res.data)
        })
    },[id])

    if (!place) return ' '
    return (
        <div className="mt-4 bg-neutral-900 -mx-8 px-8 pt-8">
            <h1 className={"text-3xl mr-48"}>{place.title}</h1>
            <AddressLink>
                {place.address}
            </AddressLink>
           <PlaceGallery place={place} />

            <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div >
                    <div className="my-4">
                        <h1 className={"font-semibold text-2xl italic"}>Опис</h1>
                        {place.description}
                    </div>
                    <b>Check-in: </b>{place.checkIn}<br />
                    <b>Час виселення: </b>{place.checkOut}<br />
                    <b>Максимальна кiлькiсть готстей: </b>{place.maxGuests} <br/>

                </div>
                <div>
                    <BookingWidget place={place}/>
                </div>
            </div>
            <div className="bg-black -mx-8 px-8 py-8 border-t">
                <div>
                    <h2 className={"font-semibold text-2xl italic"}>Додаткова інформація</h2>
                </div>
                <div className="my-4 mt-2  text-gray-100 leading-5 text-sm">
                    {place.extraInfo}
                </div>
            </div>

        </div>
    );
};

export default PlacePage;