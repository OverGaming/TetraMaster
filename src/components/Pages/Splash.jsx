import LayoutFull from '@/components/Layout/Full'
import Logo from '@/components/Core/Graphics/Logo'
import './splash.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    increment
} from '@/store/user'

export default function Splash () {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        navigate('menu')
        dispatch(increment())
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
