import './card.scss'
import PropTypes from 'prop-types'

export default function Card ({ state, image, flipped }) {
    Card.propTypes = {
        state: PropTypes.number,
        flipped: PropTypes.bool,
        image: PropTypes.string
    }
    return (
        <div className={`
        card
        ${state === -1 ? 'card--blocked' : ''}
        ${flipped ? 'card--flipped' : ''}
        ${image ? 'card--image' : ''}
        `
        }>
            {flipped ? <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRMrM4pUzee-1FIAnwRNozpPTUMJpirOlcQ&usqp=CAU'></img> : ''}
            {image && !flipped ? <img src={image}></img> : ''}
        </div>
    )
}
