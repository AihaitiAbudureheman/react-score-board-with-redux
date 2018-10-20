import React from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = ({ selectedPlayer }) => {
    if (selectedPlayer) {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>{selectedPlayer.name}</h1>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary">
                        <span>Score: </span>
                        {selectedPlayer.score}
                    </li>
                    <li class="list-group-item list-group-item-secondary">
                        <span>Updated: </span>
                        {selectedPlayer.updatedDate}
                    </li>
                    <li class="list-group-item list-group-item-success">
                        <span>Created: </span>
                        {selectedPlayer.createdDate}
                    </li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Please click the player to get more details!</h3>
            </div>
        )
    }

}

PlayerDetail.propTypes = {
    selectedPlayer: PropTypes.object
}

export default PlayerDetail;