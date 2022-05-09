import './default.scss'
import Card from './Card'
import PropTypes from 'prop-types'
import useBoard from '@/hooks/useBoard'
export default function Board ({
    width = 3,
    height = 3
}) {
    Board.propTypes = {
        width: PropTypes.number,
        height: PropTypes.height
    }

    const { board } = useBoard({
        width,
        height,
        blockeds: 5
    })

    console.log(board)
    /*

            */

    return (
        <div className="board">
            {board?.map((x, i) =>
                <div
                    className="board__row"
                    key={i + 1}>
                    {x.map((y, j) =>
                        <Card
                            key={`${i}-${j}`}
                        />
                    )}
                </div>
            )}
        </div>
    )
}
