import React from 'react'
import nba from 'nba'
import { AutoComplete, Icon, Input } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : nba.searchPlayers(value).map(player => player.fullName)
    });
  }

  onSelect = (name) => {
    this.props.handleSelectPlayer(name);
  }


  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        className="search-bar"
        dataSource={dataSource}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Search your favorite NBA player!"
        size="large"
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    );
  }
}