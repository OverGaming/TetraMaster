import { useState, useEffect, useCallback } from 'react'
import axios from '@/api/clients/app'

export default function useAxios(axiosParams) {
    const [response, setResponse] = useState(undefined)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback((params) => {
        axios.request(params)
            .then(setResponse)
            .catch(setError)
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetchData(axiosParams)
    }, [fetchData]) // execute once only

    return { response, error, loading }
}
