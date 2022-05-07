import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from './components/Pages/Home'
import Splash from './components/Pages/Splash'

function App () {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Splash />} />
                    <Route
                        exact
                        path="/home"
                        element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App
