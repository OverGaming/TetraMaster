import LayoutFull from '@/components/Layout/Full'
import Logo from '@/components/Core/Graphics/Logo'
import './splash.scss'
const Home = () => {
    return (
        <LayoutFull
            centered
            content=
                {
                    <div className="page-splash">
                        {<Logo /> }
                    </div>
                }
        />

    )
}

export default Home
