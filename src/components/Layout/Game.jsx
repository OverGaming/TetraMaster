import PropTypes from 'prop-types'
import './game.scss'

export default function Layout ({ content, hand, enemyHand, centered }) {
    Layout.propTypes = {
        content: PropTypes.node.isRequired,
        hand: PropTypes.node,
        enemyHand: PropTypes.node,
        centered: PropTypes.bool
    }

    return (
        <div className={`layout-game ${centered ? 'layout-game--centered' : ''}`}>
            <div className="layout-game__hand" >
                { enemyHand }
            </div>
            <div className="layout-game__board" >
                { content }
            </div>
            <div className="layout-game__hand" >
                { hand }
            </div>

        </div>
    )
}
