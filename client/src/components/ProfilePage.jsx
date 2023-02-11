import React, {useContext, useState} from 'react';
import {UserContext} from "../UserContext.jsx";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
import AccountNav from "./AccountNav.jsx";
//e
const ProfilePage = () => {
    const {ready, user, setUser} = useContext(UserContext)
    let {subpage} = useParams()
    const [redirect, setRedirect] = useState(null)

    if (subpage == undefined) {
        subpage = 'profile'
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (!ready) {
        return 'Loading...'
    }
    async function logout() {
        await axios.post('/logout')
        setRedirect('/')
        setUser(null)
    }

    if(redirect) {
        return <Navigate to={redirect}/>
    }

    return (
        <div>
        <AccountNav />
            <div className="text-center max-w-lg mx-auto">
                Залогований яко: {user.name} ({user.email}) <br />
                <button onClick={logout} className="primary max-w-sm mt-2">Вихiд</button>
            </div>
        </div>


    );
};

export default ProfilePage;