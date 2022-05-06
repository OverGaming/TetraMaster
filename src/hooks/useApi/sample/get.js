import useAxios from '../useAxios'

const useSampleGet = ({ url, method, body = null, headers = null }) => {
    const { response, loading, error } = useAxios({
        method: 'pogetst',
        url: '/posts',
        params: {
            test: true
        }
    })

    return { response, loading, error }
}

export default useSampleGet
