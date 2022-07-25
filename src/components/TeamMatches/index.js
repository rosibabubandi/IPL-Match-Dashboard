import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    backGroundColor: '',
    teamBanner: '',
    latestMatchDetails: {},
    recentMatchesDetails: [],
    isTeamMatchingLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
    this.getMainBackGroundColor()
  }

  getMainBackGroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    let teamBackgroundColor

    if (id === 'RCB') {
      teamBackgroundColor = 'rcb-background'
    } else if (id === 'KKR') {
      teamBackgroundColor = 'kkr-background'
    } else if (id === 'KXP') {
      teamBackgroundColor = 'kxp-background'
    } else if (id === 'CSK') {
      teamBackgroundColor = 'csk-background'
    } else if (id === 'RR') {
      teamBackgroundColor = 'rr-background'
    } else if (id === 'MI') {
      teamBackgroundColor = 'mi-background'
    } else if (id === 'SH') {
      teamBackgroundColor = 'sh-background'
    } else {
      teamBackgroundColor = 'dc-background'
    }

    this.setState({backGroundColor: teamBackgroundColor})
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamFinalBanner = data.team_banner_url

    const teamLatestMatch = data.latest_match_details

    const updatedTeamLatestMatch = {
      umpires: teamLatestMatch.umpires,
      result: teamLatestMatch.result,
      manOfTheMatch: teamLatestMatch.man_of_the_match,
      id: teamLatestMatch.id,
      date: teamLatestMatch.date,
      venue: teamLatestMatch.venue,
      competingTeam: teamLatestMatch.competing_team,
      competingTeamLogo: teamLatestMatch.competing_team_logo,
      firstInnings: teamLatestMatch.first_innings,
      secondInnings: teamLatestMatch.second_innings,
      matchStatus: teamLatestMatch.match_status,
    }

    const teamRecentMatches = data.recent_matches

    const updatedTeamRecentMatches = teamRecentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      teamBanner: teamFinalBanner,
      latestMatchDetails: updatedTeamLatestMatch,
      recentMatchesDetails: updatedTeamRecentMatches,
      isTeamMatchingLoading: false,
    })
  }

  getAllMatchStats = () => {
    const {teamBanner, latestMatchDetails, recentMatchesDetails} = this.state

    return (
      <>
        <img src={teamBanner} className="team-banner-image" alt="team banner" />
        <p className="latest-matches-text">Latest Matches</p>
        <div className="latest-matches-banner">
          <LatestMatch
            key={latestMatchDetails.id}
            matchDetails={latestMatchDetails}
          />
        </div>
        <ul className="match-card-container">
          {recentMatchesDetails.map(eachMatch => (
            <MatchCard key={eachMatch.id} recentMatchDetails={eachMatch} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {backGroundColor, isTeamMatchingLoading} = this.state

    return (
      <div className={`team-matches-main-container ${backGroundColor}`}>
        {isTeamMatchingLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getAllMatchStats()
        )}
      </div>
    )
  }
}

export default TeamMatches
