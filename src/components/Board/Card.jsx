import './card.scss'
import PropTypes from 'prop-types'

export default function EmptyCard ({ state }) {
    EmptyCard.propTypes = {
        state: PropTypes.number
    }
    return (
        <div className={`
        card
        ${state === -1 ? 'card--blocked' : ''}`
        }>{ state }</div>
    )
}
