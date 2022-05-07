import PropTypes from 'prop-types'
import './button.scss'

export default function Button ({
    disabled,
    secondary,
    loading,
    text = 'Press',
    onButtonPress = () => {}
}) {
    Button.propTypes = {
        disabled: PropTypes.bool,
        secondary: PropTypes.bool,
        loading: PropTypes.bool,
        text: PropTypes.string,
        onButtonPress: PropTypes.func
    }

    const _onButtonPress = () => {
        // TODO: Add Tracking Here
        onButtonPress()
    }

    return (
        <button onClick={_onButtonPress} className={`
            button
            ${disabled ? 'button--disabled' : ''}
            ${secondary ? 'button--secondary' : ''}
            ${loading ? 'button--loading' : ''}
        }
        `}>{text}</button>
    )
}
