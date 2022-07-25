import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchDetails

  const matchStatusTextColor =
    matchStatus === 'Won' ? 'won-text-color' : 'lost-text-color'

  return (
    <li className="match-card-inside-container">
      <img
        src={competingTeamLogo}
        className="match-card-image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-compete-date">{competingTeam}</p>
      <p className="match-result-text">{result}</p>
      <p className={`match-status-date ${matchStatusTextColor}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
