import PropTypes from 'prop-types'
import './full.scss'
import pkg from '../../../package.json'

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
            <div className='layout-full__wrapper'>
                <div className="layout-full__content" >
                    { content }
                </div>
            </div>
            <div className="layout-full__version">
                <div className="layout-full__version-content">
                    {pkg.status} {pkg.version}
                </div>
            </div>
        </div>
    )
}
