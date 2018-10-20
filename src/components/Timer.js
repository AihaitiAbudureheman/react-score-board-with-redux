import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0,
            previousTime: 0,
            isRunning: false
        };

        this.stop = this.stop.bind(this);

        this.start = this.start.bind(this);

        this.reset = this.reset.bind(this);

        this.onTick = this.onTick.bind(this);

    }

    componentDidMount() {
        this.interval = setInterval(this.onTick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    stop = () => {
        this.setState({
            isRunning: false
        })
    }

    start = () => {
        this.setState({
            isRunning: true,
            previousTime: Date.now()
        })
    }

    onTick = () => {
        if (this.state.isRunning) {
            let now = Date.now();
            this.setState({
                previousTime: Date.now(),
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            })
        }
    }

    reset = () => {
        this.setState({
            isRunning: false,
            elapsedTime: 0,
            previousTime: Date.now()
        })
    }

    render() {

        let seconds = Math.floor(this.state.elapsedTime / 1000);

        return (
            <div className="pull-right">
                <p className="timer-data">
                    <span>Time: </span>
                    <span>{seconds}</span>
                </p>
                {this.state.isRunning ?
                    <button type="button" className="btn btn-danger" onClick={this.stop}>Stop</button>
                    :
                    <button type="button" className="btn btn-primary" onClick={this.start}>Start</button>}
                <button type="button" className="btn btn-success" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}


export default Timer;