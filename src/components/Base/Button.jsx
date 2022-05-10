import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import './button.scss'

export default function Button ({
    disabled,
    secondary,
    loading,
    text = 'Press',
    path,
    onButtonPress = () => {}
}) {
    const navigate = useNavigate()
    Button.propTypes = {
        disabled: PropTypes.bool,
        secondary: PropTypes.bool,
        loading: PropTypes.bool,
        text: PropTypes.string,
        onButtonPress: PropTypes.func,
        path: PropTypes.object
    }

    const _onButtonPress = () => {
        if (path?.name) {
            navigate(path.name, path.params)
            return
        }
        onButtonPress()
    }

    return (
        <button onClick={_onButtonPress} className={`
            button
            ${disabled && 'button--disabled'}
            ${secondary && 'button--secondary'}
            ${loading && 'button--loading'}
        }
        `}>{text}</button>
    )
}
