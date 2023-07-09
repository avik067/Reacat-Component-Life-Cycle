import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    console.log('Constructor Function is initiated')
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount = () => {
    console.log('Component Mount is triggered')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('component is unmount')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
