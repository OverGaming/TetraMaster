import PropTypes from 'prop-types'
import Footer from '@/components/Core/Footer'
import Header from '@/components/Core/Header'
import './default.scss'

export default function Layout ({ content }) {
    Layout.propTypes = {
        content: PropTypes.node.isRequired
    }
    return (
        <div className='layout-default'>
            <Footer />
            <div className="layout-default__content">
                { content }
            </div>
            <Header />
        </div>
    )
}
