import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from '../components/Pages/Home'
import Splash from '../components/Pages/Splash'
import Menu from '../components/Pages/Menu'

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Splash />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}
