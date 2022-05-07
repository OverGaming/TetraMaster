import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Footer ({ onEvent }) {
    Footer.propTypes = {
        onEvent: PropTypes.func
    }
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
