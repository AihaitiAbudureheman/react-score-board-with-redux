import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
    let totalPlayers = props.players.length;
    let totalPoint = props.players.reduce((total, player) => {
        return total + player.score;
    }, 0);

    return (

        <div className="stats-data">
            <div>
                <p>
                    <span>Players: </span>
                    <span>{totalPlayers}</span>
                </p>
            </div>

            <div>
                <p>
                    <span>Total scores: </span>
                    <span>{totalPoint}</span>
                </p>
            </div>
        </div>

    );
};

Stats.propTypes = {
    players: PropTypes.array.isRequired
}

export default Stats;