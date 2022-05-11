import PropTypes from 'prop-types'
import './memberPlans.scss'
export default function MemberPlans ({ members = {} }) {
    MemberPlans.propTypes = {
        member: PropTypes.object
    }
    return (
        <div className="member-plans">
            {members.map((member, i) =>
                <span key={i} > {member.name} </span>
            )}
        </div>
    )
}
