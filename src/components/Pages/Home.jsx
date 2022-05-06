import LayoutDefault from '@/components/Layout/Default'
import CounterEvents from '@/components/Sample/CounterEvents'

const Home = () => {
    const eventFromChildren = () => {
        console.log('clickEvent')
    }
    return (
        <LayoutDefault
            content={<CounterEvents
                onEvent={eventFromChildren}
            />}
        />

    )
}

export default Home
