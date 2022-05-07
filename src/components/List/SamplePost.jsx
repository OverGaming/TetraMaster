import PropTypes from 'prop-types'

export default function SamplePost (props) {
    SamplePost.propTypes = {
        entries: PropTypes.array
    }

    return (
        <div className='header'>
            {props?.entries?.map((object, i) =>
                <div obj={object} key={i} > {object} </div>
            )}
        </div>
    )
}
