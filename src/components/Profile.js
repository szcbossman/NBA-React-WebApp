import React from 'react';
import { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from '../constants';

export class Profile extends React.Component {
  render() {
    const {
      teamCity,
      teamName,
      playerName,
      height,
      weight,
      pts, reb, ast, pie,
    } = this.props.playerInfo;
    return (
      <div className="profile">
        <div className="profile-entry player-name">{`${playerName}`}</div>
        <img
          className="profile-pic"
          src={`${PROFILE_PIC_URL_PREFIX}/${this.props.playerInfo.playerId}.png`}
          alt={this.props.playerInfo.playerName}
        />
        <div className="profile-entry">
          <div className="profile-entry-left">Team</div>
          <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
        </div>
        <img
          className="team-logo"
          src={`${TEAM_PIC_URL_PREFIX}/${this.props.playerInfo.teamAbbreviation}_logo.svg`}
          alt={this.props.playerInfo.teamName}
        />
        <div className="profile-entry">
          <div className="profile-entry-left">Height</div>
          <div className="profile-entry-right">{`${height}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">Weight</div>
          <div className="profile-entry-right">{`${weight}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">PTS</div>
          <div className="profile-entry-right">{`${pts}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">REB</div>
          <div className="profile-entry-right">{`${reb}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">AST</div>
          <div className="profile-entry-right">{`${ast}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">PIE</div>
          <div className="profile-entry-right">{`${pie}`}</div>
        </div>
      </div>
    );
  }
}
