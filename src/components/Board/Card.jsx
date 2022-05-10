import './card.scss'
import PropTypes from 'prop-types'
import Arrow from '../Core/Graphics/Arrow'

export default function Card ({ state, image, flipped }) {
    const cardBackImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRMrM4pUzee-1FIAnwRNozpPTUMJpirOlcQ&usqp=CAU'
    Card.propTypes = {
        state: PropTypes.number,
        flipped: PropTypes.bool,
        image: PropTypes.string
    }
    return (
        <div
            className={`
                card
                ${state === -1 ? 'card--blocked' : ''}
                ${flipped ? 'card--flipped' : ''}
                ${image ? 'card--image' : ''}
                `
            }>
            {flipped && <img src={cardBackImage}></img> }
            {(image && !flipped) &&
             <div className="card__content">
                 <img src={image}></img>
                 <div className="card__layout">
                     {
                         [1, 1, 1, 1, 1, 1, 1, 1]
                             .map((entry, i) => (
                                 <div key={i}className={`card__arrow card__arrow--${i}`}>
                                     {entry > 0 && <Arrow />}
                                 </div>

                             ))
                     }

                 </div>
             </div>}
        </div>
    )
}
