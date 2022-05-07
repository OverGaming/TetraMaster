import PropTypes from 'prop-types'
import './full.scss'

export default function Layout ({ content, centered }) {
    Layout.propTypes = {
        content: PropTypes.node.isRequired,
        centered: PropTypes.bool
    }

    return (
        <div className={`
            layout-full
            ${centered ? 'layout-full--centered' : ''}
            `}>
            <div className="layout-full__content" >
                { content }
            </div>
        </div>
    )
}
