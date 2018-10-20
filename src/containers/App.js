import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
import PlayerDetail from '../components/PlayerDetail';

import './App.css';

class App extends Component {

  static proptypes = {
    players: PropTypes.array.isRequired
  };

  render() {

    const { dispatch, players, selectedPlayerIndex } = this.props;

    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);

    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);

    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    let selectedPlayer;
    if (selectedPlayerIndex !== -1) {
      selectedPlayer = players[selectedPlayerIndex];
    }

    const playerComponents = players.map((player, index) => (

      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer} />
    ));

    return (
      <div className="container-fluid score-board">

        <Header
          title="Scoreboard App"
          players={players} />

        <div className="row players-list">
          <div className="col-md-6 col-md-offset-3">
            <ul className="list-group">
              {playerComponents}
            </ul>
          </div>
        </div>

        <AddPlayer addPlayer={addPlayer} />

        <PlayerDetail selectedPlayer={selectedPlayer} />

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(App);
