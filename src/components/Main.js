import React from 'react'
import nba from 'nba'
import { ShotChart } from './ShotChart'
import { Profile } from './Profile'

export class Main extends React.Component {
  state = {
    playerId: nba.findPlayer('Stephen Curry').playerId
  }

  componentDidMount() {
    nba.stats.playerInfo({ PlayerID: this.state.playerId }).then((info) => {
      console.log(info);
    })
  }

  render () {
    return (
      <div className="main">
        <Profile/>
        <ShotChart playerId={this.state.playerId}/>
      </div>
    );
  }
}