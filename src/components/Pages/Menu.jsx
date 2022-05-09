import LayoutFull from '@/components/Layout/Full'
import Button from '@/components/Base/Button'
import useMenu from '@/hooks/useMenu'

import './menu.scss'

export default function Menu () {
    const { MENU_OPTIONS } = useMenu()
    return (
        <LayoutFull
            centered
            content={
                <div className="page-menu">
                    {MENU_OPTIONS.map((entry) =>
                        <Button
                            key={entry.title}
                            path={entry.path}
                            text={entry.title}
                        />
                    )}

                </div>
            }
        />
    )
}
