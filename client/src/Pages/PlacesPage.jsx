import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import AccountNav from "../components/AccountNav.jsx";
import axios from "axios";
import PlaceImg from "../components/PlaceImg.jsx";


const PlacesPage = () => {
    const [places, setPlaces] = useState([])
    const [redirectToPlacesList, setRedirectToPlacesList] = useState(false)
    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data)
        })
    },[])
    return (
        <div>
            <AccountNav />
            <div className="text-center">
                <Link className=" inline-flex gap-1 bg-primary text-0a0a0a py-2 px-6 rounded-full" to={"/account/places/new"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                       </svg>
                    Додай свое житло
                </Link>
            </div>
            <div className="mt-4 flex flex-wrap">
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/' + place._id} className="bg-gray-700 flex cursor-pointer gap-4 p-4 m-4  text-white rounded-2xl" key={place.title}>
                        <div className="w-44 h-auto bg-gray-300  flex shrink-0">
                                <PlaceImg  place={place}/>
                        </div>
                        <div className="grow-0 shrink">
                            <h2 className="text-xl">{place.title}</h2>
                            <p className="text-sm mt-2 ">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PlacesPage;