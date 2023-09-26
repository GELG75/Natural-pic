import React, { useState } from "react";
import MyContext from './Context/MyContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Favoritos from './pages/Favoritos'
import Menu from './Components/Menu';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import data from './local-json/photos.json';

function App() {
  const [images, setImages] = useState(data.photos);

  const sharedCounterState = {
    images,
    setImages,
  }
  return (
    <>
      <MyContext.Provider value={sharedCounterState}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}
export default App