import './input.scss'
import PropTypes from 'prop-types'

export default function Input ({
    value,
    onChange = () => {},
    onBlur = () => {},
    label,
    type = 'text'
}) {
    Input.propTypes = {
        label: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }
    const _onChange = (e) => {
        onChange(e)
    }

    const _onBlur = () => {
        onBlur()
    }

    return (
        <div className="input">
            <label className="input__label">
                {label}
            </label>
            <input className="input__field" value={value}
                type={type}
                onChange={_onChange}
                onBlur={_onBlur}
            />
        </div>
    )
}
