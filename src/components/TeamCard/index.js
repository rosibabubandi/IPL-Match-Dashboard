import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-card-item-container">
        <img src={teamImageUrl} className="team-card-image" alt={`${name}`} />
        <p className="team-name-text">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
