import React from 'react'
import nba from 'nba'
import { AutoComplete, Icon, Input } from 'antd';
import { PROFILE_PIC_URL_PREFIX } from '../constants'
const Option = AutoComplete.Option;


export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : nba.searchPlayers(value).map(player => ({
        fullName: player.fullName,
        playerId: player.playerId,
      }))
    });
  }

  onSelect = (name) => {
    this.props.handleSelectPlayer(name);
  }


  render() {
    const { dataSource } = this.state;
    const options = dataSource.map((player) => (
      <Option key={player.fullName} value={player.fullName} className="player-option">
        <img className="player-option-image"
             src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}
             alt={player.fullName}
        />
        <span className="player-option-label">{player.fullName}</span>
      </Option>
    ));
    return (
      <AutoComplete
        className="search-bar"
        dataSource={options}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Search your favorite NBA player!"
        size="large"
        optionLabelProp="value"
      >

        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    );
  }
}