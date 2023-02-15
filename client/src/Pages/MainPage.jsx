import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const MainPage = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data)
        })
    }, [])

    return (
            <div className={"mt-8 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                {places.length > 0 && places.map(place => (
                    <Link to={'/place/' + place._id}>
                        <div className="bg-gray-700  mb-2 rounded-2xl flex">
                            {place.photos?.[0] && (
                                <img className={"rounded-2xl object-cover aspect-square"} src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt={"elo"} />
                            )}
                        </div>
                        <h2 className="font-bold leading-4 my-2">{place.address}</h2>
                        <h2 className={"text-sm leading-4 text-gray-250"}>{place.title}</h2>
                        <div className="mt-2">
                            <span className="font-bold">{place.price} UAH</span> <em>за нiч</em>
                        </div>
                    </Link>
                ))}
            </div>
    );
};

export default MainPage;