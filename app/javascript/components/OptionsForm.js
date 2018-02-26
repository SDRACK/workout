import React from "react"
// import PropTypes from "prop-types"

class OptionsForm extends React.Component {
  constructor(props) {
    super(props)

    var self = this

    self.buildLevels = this.buildLevels.bind(this)
  }

  buildLevels() {
    return [1, 2, 3].map((level) => {
      return (
        <input type="radio"
        name="level"
        value={level}
        defaultChecked={level == this.props.selectedLevel}
        key={level}
        onClick={this.props.changeLevel} />
      )
    })
  }

  render () {
    return (
      <form>
        Level:<br />
        {this.buildLevels()}
      </form>
    )
  }
}

export default OptionsForm
