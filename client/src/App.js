import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import './App.css'

const App = observer( () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout( () => {
    check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, 1000)
  }, [user])


  if (loading) {
    return <div className='spinner'>
      <Spinner animation="border" variant="dark"/>
      </div>
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
    </BrowserRouter>
  );
});

export default App;
