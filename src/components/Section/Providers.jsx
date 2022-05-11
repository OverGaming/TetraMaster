
import PropTypes from 'prop-types'
import Collapsable from '@/components/Card/Collapsable'
import { useState } from 'react'
import './providers.scss'

export default function Providers ({ title = '', providers = {} }) {
    const [providerArray, setProviderArray] = useState()

    Providers.propTypes = {
        title: PropTypes.string,
        providers: PropTypes.object
    }
    return (
        <div className="providers">
            <div className="providers__title">{title}</div>
            <div className="providers__content">
                {Object.keys((providers || {})).map((key, i) => {
                    return <Collapsable
                        providerName={key}
                        members={providers[key]?.members}
                        key={i} />
                })}

            </div>
        </div>

    )
}
