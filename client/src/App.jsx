import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import React, {useEffect} from "react";
import LoginPage from "./Pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import axios from "axios";
import {UserContextProvider} from "./UserContext.jsx";
import Account from "./Pages/Account.jsx";

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
              <Route path="/account/:subpage?" element={<Account />} />
              <Route path="/account/:subpage/:action" element={<Account />} />

          </Route>
          </Routes>
      </UserContextProvider>

  )
}

export default App
