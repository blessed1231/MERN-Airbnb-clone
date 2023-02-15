import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import React from "react";
import LoginPage from "./Pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import axios from "axios";
import {UserContextProvider} from "./UserContext.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import PlacesPage from "./Pages/PlacesPage.jsx";
import PlaceFormPage from "./components/PlaceFormPage.jsx";
import PlacePage from "./Pages/PlacePage.jsx";
import BookingsPage from "./Pages/BookingsPage.jsx";
import BookingPage from "./Pages/BookingPage.jsx";

axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.withCredentials = true
function App() {

  return (
      <UserContextProvider>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<MainPage />}/>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/account/" element={<ProfilePage  />} />
              <Route path="/account/places" element={<PlacesPage />} />
              <Route path="/account/places/new" element={<PlaceFormPage />} />
              <Route path="/account/places/:id" element={<PlaceFormPage />} />
              <Route path="/place/:id" element={<PlacePage/>} />
              <Route path="/account/bookings" element={<BookingsPage />}/>
              <Route path="/account/bookings/:id" element={<BookingPage />}/>
          </Route>
          </Routes>
      </UserContextProvider>

  )
}

export default App
