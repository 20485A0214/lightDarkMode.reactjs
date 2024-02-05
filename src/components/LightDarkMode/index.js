import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isMode: false,
  }

  onMode = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  getButtonText = () => {
    const {isMode} = this.state

    return isMode ? 'Dark Mode' : 'Light Mode'
  }

  getHeadingText = () => {
    const {isMode} = this.state

    return isMode ? 'heading1' : 'heading'
  }

  getBackgroundContainer = () => {
    const {isMode} = this.state

    return isMode ? 'container2' : 'container1'
  }

  render() {
    const buttonText = this.getButtonText()
    const headingColor = this.getHeadingText()
    const backgroundContainer = this.getBackgroundContainer()
    return (
      <div className="container">
        <div className={backgroundContainer}>
          <h1 className={headingColor}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
