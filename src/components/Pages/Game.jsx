import LayoutGame from '@/components/Layout/Game'
import BoardDefault from '@/components/Board/Default'
import PropTypes from 'prop-types'

import './game.scss'
import useBoard from '@/hooks/useBoard'
import useDeck from '@/hooks/useDeck'

import Card from '../Board/Card'

export default function Game ({ width = 5, height = 5, blockeds = 5 }) {
    Game.propTypes = {
        width: PropTypes.number,
        height: PropTypes.bool,
        blockeds: PropTypes.string
    }
    const { deck: enemyDeck } = useDeck({
        isEnemy: true,
        size: 5
    })

    const { deck } = useDeck({
        size: 5
    })

    const { board } = useBoard({
        width,
        height,
        blockeds
    })
    return (
        <LayoutGame
            centered
            hand =
                {
                    deck.cards.map((card, i) => <Card
                        key={i}
                        flipped={card.flipped}
                        image={card.image}
                        directions={card.directions}
                    />)
                }
            enemyHand =
                {
                    enemyDeck.cards.map((card, i) => <Card
                        key={i}
                        flipped={card.flipped}
                        image={card.image}
                        directions={card.directions}
                    />)
                }
            content =
                {
                    <div className="page-game">
                        <BoardDefault
                            board={ board }
                        />
                    </div>
                }
        />

    )
}
