import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isTeamCardLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams

    const filteredData = teamsData.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: filteredData, isTeamCardLoading: false})
  }

  render() {
    const {teamsList, isTeamCardLoading} = this.state

    return (
      <div className="main-home-container">
        {isTeamCardLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="dash-board-title-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-logo-size"
                alt="ipl logo"
              />
              <h1 className="ipl-dash-board-text">IPL Dashboard</h1>
            </div>
            <ul className="team-match-container">
              {teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
