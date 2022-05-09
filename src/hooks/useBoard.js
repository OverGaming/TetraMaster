import { useEffect, useState } from 'react'

export default function useBoard({ width, height, blockeds }) {
    const STATUS = {
        BLOCKED: -1,
        EMPTY: 0,
        FILL: 1
    }

    const [board, setBoard] = useState([])
    const [blockedCount, setBlockedCount] = useState(blockeds)

    const getRandomCell = () => getCell({
        x: Math.floor(Math.random() * height),
        y: Math.floor(Math.random() * width)
    })

    const getCell = ({ x, y }) => board[x][y]
    const setCellStatus = (cell, status) => {
        const clonedBoard = [...board]
        clonedBoard[cell.x][cell.y].status = status
        setBoard(clonedBoard)
    }
    const createBoardMatrix = () => {
        setBoard(
            new Array(height)
                .fill(0)
                .map((x, i) =>
                    Array(width).fill(STATUS.EMPTY).map((y, j) => ({
                        x: i,
                        y: j,
                        status: STATUS.EMPTY
                    }))
                ))
    }

    const getRandomEmptyCell = () => {
        const cell = getRandomCell()
        return cell.status === 0 ? cell : getRandomEmptyCell()
    }

    useEffect(() => {
        if (board.length && blockedCount) {
            setCellStatus(getRandomEmptyCell(), STATUS.BLOCKED)
            setBlockedCount(blockedCount - 1)
        }
    }, [board])

    useEffect(() => {
        createBoardMatrix()
    }, [width, height, blockeds])
    return {
        board
    }
}
