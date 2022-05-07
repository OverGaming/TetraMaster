import useAxios from '../useAxios'

export default function useSamplePost (params) {
    const { response, loading, error } = useAxios({
        method: 'post',
        url: '/entries',
        data: {
            id: params?.id
        }
    })

    return { response, loading, error }
}
