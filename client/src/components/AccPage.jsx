import React, {useContext, useState} from 'react';
import {UserContext} from "../UserContext.jsx";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
//essa
const AccPage = () => {
    const {ready, user, setUser} = useContext(UserContext)
    let {subpage} = useParams()
    const [redirect, setRedirect] = useState(null)

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
            <div className="text-center max-w-lg mx-auto">
                Залогований яко: {user.name} ({user.email}) <br />
                <button onClick={logout} className="primary max-w-sm mt-2">Вихiд</button>

            </div>

    );
};

export default AccPage;