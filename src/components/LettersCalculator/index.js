/* eslint-disable jsx-a11y/label-has-associated-control */
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    n: 0,
  }

  onType = event => {
    this.setState(prevState => ({n: prevState.n + 1}))
  }

  render() {
    const {n} = this.state
    return (
      <div className="bg">
        <div className="bg2">
          <div className="bg3">
            <h1 className="h1">
              Calculate the <br /> Letters you <br />
              enter
            </h1>

            <label className="p">Enter the phrase</label>

            <input
              type="text"
              className="search"
              placeholder="Enter the phrase"
              onChange={this.onType}
            />

            <div className="btn">
              <p> No.of letters: {n}</p>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
