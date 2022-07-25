import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <>
      <div className="latest-match-first-container">
        <p className="competing-team-text">{competingTeam}</p>
        <p className="compete-date">{date}</p>
        <p className="venue-result-text">{venue}</p>
        <p className="venue-result-text">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="latest-match-last-container">
        <p className="innings-text">First Innings</p>
        <p className="right-value-text">{firstInnings}</p>
        <p className="innings-text">Second Innings</p>
        <p className="right-value-text">{secondInnings}</p>
        <p className="man-of-the-match-umpires-text">Man Of The Match</p>
        <p className="right-value-text">{manOfTheMatch}</p>
        <p className="man-of-the-match-umpires-text">Umpires</p>
        <p className="right-value-text">{umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
