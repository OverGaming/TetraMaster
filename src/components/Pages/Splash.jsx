import LayoutFull from '@/components/Layout/Full'
import Logo from '@/components/Core/Graphics/Logo'
import './splash.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Splash () {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('menu')
        }, 5000)
    }, [navigate])

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
