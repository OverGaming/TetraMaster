import './default.scss'
import Card from './Card'
import PropTypes from 'prop-types'
import useBoard from '@/hooks/useBoard'
export default function Board ({ board }) {
    Board.propTypes = {
        board: PropTypes.array
    }

    return (
        <div className="board">
            {board?.map((x, i) =>
                <div
                    className="board__row"
                    key={i + 1}>
                    {x.map((y, j) =>
                        <Card
                            state={y.status}
                            key={`${i}-${j}`}
                        />
                    )}
                </div>
            )}
        </div>
    )
}
