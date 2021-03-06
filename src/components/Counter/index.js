import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {
    counter: 0,
  }

  onIncrement = () => {
    this.setState(prev => ({counter: prev.counter + 1}))
  }

  onDecrement = () => {
    const {counter} = this.state
    if (counter <= 0) {
      this.setState({counter: 0})
    } else {
      this.setState(prev => ({counter: prev.counter - 1}))
    }
  }

  render() {
    const {counter} = this.state
    localStorage.setItem('count', counter)
    const newValue = localStorage.getItem('count')

    return (
      <div className="counter">
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div className="cnt-vle">{newValue}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
