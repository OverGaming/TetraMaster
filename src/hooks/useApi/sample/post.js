import useAxios from '../useAxios'

const useSampleGet = (params) => {
    const { response, loading, error } = useAxios({
        method: 'post',
        url: '/posts',
        data: {
            id: params?.id
        }
    })

    return { response, loading, error }
}

export default useSampleGet
