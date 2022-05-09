import LayoutFull from '@/components/Layout/Full'
import BoardDefault from '@/components/Board/Default'

import './game.scss'

export default function Menu () {
    return (
        <LayoutFull
            centered
            content=
                {
                    <div className="page-game">
                        <BoardDefault
                            width={10}
                            height={2}
                        />
                    </div>
                }
        />

    )
}
