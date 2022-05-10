import { useEffect, useState } from 'react'
import Button from '../Base/Button'
import Input from './Input'
import './login.scss'
import { useDispatch } from 'react-redux'
import {
    setName
} from '@/store/user'

export default function Login () {
    const [filled, setFilled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loginData, setLoginData] = useState({
        name: ''
    })
    const dispatch = useDispatch()

    const onChangeName = (e) => {
        setLoginData({
            ...loginData,
            name: e.target.value
        })
    }

    const handleSubmit = (e) => {
        setLoading(true)
        sendForm()
        e.preventDefault()
        setLoading(false)
    }

    const sendForm = () => {
        console.log('dispatching')
        dispatch(setName(loginData.name))
    }

    useEffect(() => {
        if (loginData.name) {
            setFilled(true)
        } else {
            setFilled(false)
        }
    }, [loginData])

    return (
        <form className='login' onSubmit={handleSubmit}>
            <div className='login__name'>
                <Input
                    value={loginData.name}
                    onChange={onChangeName}
                    label="Nickname"
                />
            </div>

            <Button
                disabled={!filled}
                secondary
                loading={loading}
                text="Enter"
            />
        </form>

    )
}
