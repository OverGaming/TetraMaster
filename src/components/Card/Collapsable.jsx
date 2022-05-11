
import PropTypes from 'prop-types'
import { useState } from 'react'
import MemberPlans from '../Form/MemberPlans'
import './collapsable.scss'
export default function Collapsable ({ providerName, plans, members = [] }) {
    Collapsable.propTypes = {
        providerName: PropTypes.string,
        members: PropTypes.array,
        plans: PropTypes.array
    }

    const [isCollapsed, setCollapse] = useState()
    const [headerData, setHeaderData] = useState([])

    const toggleCollapse = () => {
        setCollapse(!isCollapsed)
    }

    return (
        <div className="collapsable">
            <div className="collapsable__wrapper">
                <div className="collapsable__title">
                    { providerName }
                </div>
                <div className="collapsable__action" onClick={toggleCollapse}>
                    { isCollapsed ? '+' : '-'}
                </div>
            </div>
            <div className={
                `collapsable__content
                ${isCollapsed && 'collapsable__content--collapsed'}`
            } >
                <MemberPlans members={members} />
            </div>
        </div>

    )
}
