import { useEffect, useState } from 'react'
import useAxios from '../useAxios'

export default function useSampleGet(params) {
    const [data, setData] = useState(null)
    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/7b539186-e7dd-4fbf-8a3d-b448cb1c742d',
        params: {
            test: true
        }
    })

    useEffect(() => {
        setData(response?.data)
    }, [response])

    return { data, response, loading, error }
}
