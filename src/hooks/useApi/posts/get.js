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
        // TODO: Change key to use camelCase or _ in key object
        // MOCK JSON
        const rawResponse = [
            {
                id: 1,
                name: 'Jason Bourne',
                provider: 'United Health',
                priceEstimates: [
                    {
                        plan: 'standard',
                        priceEstimate: 91
                    },
                    {
                        plan: 'premium',
                        priceEstimate: 121
                    }
                ]
            },
            {
                id: 2,
                name: 'James Bond',
                provider: 'United Health',
                priceEstimates: [
                    {
                        plan: 'standard',
                        priceEstimate: 90
                    },
                    {
                        plan: 'premium',
                        priceEstimate: 120
                    }
                ]
            },
            {
                id: 3,
                name: 'Ethan Hunt',
                provider: 'Distributed Health',
                priceEstimates: [
                    {
                        plan: 'basic',
                        priceEstimate: 50
                    },
                    {
                        plan: 'standard',
                        priceEstimate: 99
                    }
                ]
            }
        ]
        // MAPPED RESPONSE
        const mappedResponse = rawResponse.reduce((acc, entry) => {
            const key = entry.provider
            const iterationMember = {
                name: entry.name,
                prices: entry.priceEstimates
            }
            if (acc[key]) {
                acc[key].members.push(iterationMember)
            } else {
                acc[key] = {
                    id: entry.id,
                    name: entry.provider,
                    plans: entry.priceEstimates,
                    members: [iterationMember]
                }
            }
            return acc
        }, {})
        setData(mappedResponse)
    }, [response])

    return { data, response, loading, error }
}
