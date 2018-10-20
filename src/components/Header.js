import React from 'react';
import Stats from './Stats';
import Timer from './Timer';
import PropTypes from 'prop-types';

const Header = props =>
    <div className="row header">
        <div className="col-md-6 col-md-offset-3">
            <h1>{props.title}</h1>
            <div className="row">
                <div className="col-sm-4">
                    <Stats
                        players={props.players} />
                </div>
                <div className="col-sm-4">
                    
                </div>
                <div className="col-sm-4">
                    <Timer />
                </div>
            </div>
        </div>
    </div>;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}
export default Header;