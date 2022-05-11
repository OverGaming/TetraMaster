import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from '../components/Pages/Home'
import Splash from '../components/Pages/Splash'
import Menu from '../components/Pages/Menu'
import Game from '../components/Pages/Game'
import Oyster from '../components/Pages/Oyster'

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Splash />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route
                    exact
                    path="/game"
                    element={<Game width={4} height={4} />}
                />
                <Route exact path="/oyster" element={<Oyster/>} />

            </Routes>
        </BrowserRouter>
    )
}
