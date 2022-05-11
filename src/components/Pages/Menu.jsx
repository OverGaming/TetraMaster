import LayoutFull from '@/components/Layout/Full'
import Button from '@/components/Base/Button'
import useMenu from '@/hooks/useMenu'
import Logo from '@/components/Core/Graphics/Logo'
import { useSelector } from 'react-redux'
import './menu.scss'
import { selectInits, selectName } from '@/store/user'
import Modal from '../Base/Modal'
import Login from '../Form/Login'

export default function Menu () {
    const { MENU_OPTIONS } = useMenu()
    const count = useSelector(selectInits)
    const name = useSelector(selectName)

    return (
        <LayoutFull
            centered
            content={
                <div className="page-menu">
                    <div className="page-menu__logo">
                        <Logo />
                    </div>
                    <div className="page-menu__content">

                        {MENU_OPTIONS.map((entry) =>
                            <Button
                                key={entry.title}
                                path={entry.path}
                                text={entry.title}
                                disabled={!entry.path}
                            />
                        )}
                        <div className="page-menu__inits">
                            {count}
                        </div>
                    </div>
                    {
                        <Modal
                            title="Modal"
                            content={<Login />}
                            enabled={!name}
                        />
                    }
                </div>
            }
        />
    )
}
