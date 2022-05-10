import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import './modal.scss'

export default function Modal ({
    title,
    content,
    enabled = false,
    onButtonClose = () => {}
}) {
    Modal.propTypes = {
        title: PropTypes.string,
        enabled: PropTypes.bool,
        onButtonClose: PropTypes.func,
        content: PropTypes.node.isRequired
    }

    return (
        <>
            { enabled &&
            <div className='modal'>
                <div className='modal__inner'>
                    <div className="modal__header">
                        {title}
                    </div>
                    <div className="modal__content">
                        {content}
                    </div>
                </div>
            </div>
            }
        </>
    )
}
