import axios from 'axios'

export default axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 0,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
