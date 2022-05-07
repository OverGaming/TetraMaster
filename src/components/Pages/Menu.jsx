import LayoutFull from '@/components/Layout/Full'
import Button from '@/components/Base/Button'

import './menu.scss'
import { useNavigate } from 'react-router-dom'

export default function Menu () {
    const navigate = useNavigate()

    return (
        <LayoutFull
            centered
            content=
                {
                    <div className="page-menu">
                        <Button text="test 1"/>
                        <Button loading text="test 2"/>
                        <Button disabled text="test 3"/>
                    </div>
                }
        />

    )
}
