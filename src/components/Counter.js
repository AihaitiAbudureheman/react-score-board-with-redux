import React from 'react';
import PropTypes from 'prop-types';


const Counter = (props) =>
    <div className="pull-right">
        <button onClick={() => props.updatePlayerScore(props.index, -1)} type="button" className="btn btn-light">-</button>
        <span className="current-score">{props.initialScore}</span>
        <button onClick={() => props.updatePlayerScore(props.index, 1)} type="button" className="btn btn-light">+</button>
    </div>;

Counter.propTypes = {
    initialScore: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
}
export default Counter;
