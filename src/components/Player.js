import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const Player = props =>
    <li className="list-group-item">
        <div className="row">
            <div className="col-md-8 playerName" onClick={() => props.selectPlayer(props.index)}>
                <span className="remove-btn" onClick={() => props.removePlayer(props.index)}> x </span>
                <span>{props.name}</span>
            </div>
            <div className="col-md-4">
                <Counter
                    index={props.index}
                    initialScore={props.score}
                    updatePlayerScore={props.updatePlayerScore} />
            </div>
        </div>
    </li>;
Player.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired
}
export default Player;