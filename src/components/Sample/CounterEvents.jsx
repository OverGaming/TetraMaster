import { useState } from 'react'

export default function Footer ({ onEvent }) {
    const [date, setDate] = useState(new Date())
    const tick = () => {
        setDate(new Date())
    }
    setInterval(tick, 1000)
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2 onClick={onEvent} >It is {date.toLocaleString()}.</h2>
        </div>
    )
}
