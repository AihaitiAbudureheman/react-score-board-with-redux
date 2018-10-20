import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  
  addPlayer = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({name: ''});

  }
  
  onNameChange = (e) => {
    this.setState({name: e.target.value});
  }
 
  render() {
    return (
      <div className="row add-player">
        <div className="col-md-6 col-md-offset-3">

          <form onSubmit={this.addPlayer}>
            <div className="form-row align-items-center">

              <div className="col-md-10">
                <label className="sr-only">Name</label>
                <input 
                type="text" 
                className="form-control mb-2" 
                id="inlineFormInput" 
                placeholder="Jane Doe" 
                value={this.state.name}
                onChange={this.onNameChange}/>
              </div>

              <div className="col-md-2">
                <button type="submit" className="btn btn-primary mb-2 pull-right">ADD PLAYER</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    )
  }
}

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired
}

export default AddPlayer;