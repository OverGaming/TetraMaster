import LayoutDefault from '@/components/Layout/Default'
import CounterEvents from '@/components/Sample/CounterEvents'
import ListSamplePost from '@/components/List/SamplePost'
import useSampleGet from '@/hooks/useApi/posts/get'

const Home = () => {
    const {
        data: entries,
        loading
    } = useSampleGet()

    const eventFromChildren = () => {
        console.log('clickEvent')
    }
    return (
        <LayoutDefault
            content=
                {
                    <>
                        <CounterEvents onEvent={eventFromChildren} />
                        { !loading
                            ? <ListSamplePost entries={ entries } />
                            : 'loading' }
                    </>

                }
        />

    )
}

export default Home
