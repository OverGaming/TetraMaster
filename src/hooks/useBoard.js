import { useEffect, useState } from 'react'

export default function useBoard({ width, height, blockeds }) {
    const STATUS = {
        BLOCKED: -1,
        EMPTY: 0,
        FILL: 1
    }

    const [board, setBoard] = useState([])

    const getRandomCell = () => getCell({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
    })

    const getCell = ({ x, y }) => board[y][x]
    const setCellStatus = (cell, status) => {
        console.log(cell)
        cell = status
    }
    const createBoardMatrix = () => {
        console.log()
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
        return cell // === 0 ? cell : getRandomEmptyCell()
    }

    useEffect(() => {
        if (board.length) {
            setCellStatus(getRandomEmptyCell(), STATUS.BLOCKED)
        }
    }, [board])

    useEffect(() => {
        createBoardMatrix()
    }, [width, height, blockeds])
    return {
        board
    }
}
