import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import '@/assets/css/animations.css'

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
