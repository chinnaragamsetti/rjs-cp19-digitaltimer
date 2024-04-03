// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {min: 25, sec: 0, limit: 25, status: false}

  onClickDec = () => {
    // const {limit} = this.state
    this.setState(prevState => ({
      limit: prevState.limit - 1,
      min: prevState.limit - 1,
    }))
  }

  onClickInc = () => {
    // const {limit} = this.state
    this.setState(prevState => ({
      limit: prevState.limit + 1,
      min: prevState.limit + 1,
    }))
  }

  onReset = () => {
    const {limit} = this.state
    this.setState({min: limit, sec: 0})
  }

  onClickPause = () => {
    clearInterval(this.timerID)
  }

  onClickStart = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {sec} = this.setState
    if (sec === 0) {
      this.setState(prevState => ({sec: 59, min: prevState.min - 1}))
    } else {
      this.setState(prevState => ({sec: prevState.sec - 1}))
    }
  }

  timing = () => {
    const {min, sec} = this.state

    if (min <= 9) {
      return <p className="running-time">{`0${min}:${sec}`}</p>
    } else if (min > 9) {
      return <p className="running-time">{`${min}:${sec}`}</p>
    } else if (sec <= 9) {
      return <p className="running-time">{`${min}:0${sec}`}</p>
    } else if (sec > 9) {
      return <p className="running-time">{`${min}:${sec}`}</p>
    }
  }

  render() {
    const {min, sec, limit, status} = this.state
    return (
      <div className="main-cont">
        <h1 className="timer-head">Digital Timer</h1>
        <div className="bottom-cont">
          <div className="left-cont">
            <div className="left-sub-cont">
              <div className="text-cont">
                {this.timing()}

                {status ? (
                  <p className="status-text">Running</p>
                ) : (
                  <p className="status-text">Paused</p>
                )}
              </div>
            </div>
          </div>

          <div className="right-cont">
            <div className="start-and-reset-cont">
              {status ? (
                <div className="start-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause-icon"
                    className="start-image"
                    id="start-and-pause"
                    onClick={this.onClickStart}
                  />
                  <label htmlFor="start-and-pause" className="start-text">
                    Pause
                  </label>
                </div>
              ) : (
                <div className="start-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                    className="start-image"
                    id="start-and-pause"
                    onClick={this.onClickPause}
                  />
                  <label htmlFor="start-and-pause" className="start-text">
                    Start
                  </label>
                </div>
              )}
              <div className="start-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="start-image"
                  onClick={this.onReset}
                  id="reset"
                />
                <label htmlFor="reset" className="start-text">
                  Reset
                </label>
              </div>
            </div>
            <p className="set-text">Set Timer Limit</p>
            <div className="inc-and-dec-cont">
              <button
                type="button"
                className="inc-and-dec"
                onClick={this.onClickDec}
              >
                -
              </button>
              <p className="limit">{limit}</p>
              <button
                type="button"
                className="inc-and-dec"
                onClick={this.onClickInc}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
