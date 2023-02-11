import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import AccountNav from "../components/AccountNav.jsx";


const PlacesPage = () => {
    const [redirectToPlacesList, setRedirectToPlacesList] = useState(false)
    return (
        <div>
            <AccountNav />
            <div className="text-center">
                list of all added places
                <br />
                <Link className=" inline-flex gap-1 bg-primary text-0a0a0a py-2 px-6 rounded-full" to={"/account/places/new"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                       </svg>
                    Додай свое житло
                </Link>
            </div>
        </div>
    );
};

export default PlacesPage;