import React from "react"
// import PropTypes from "prop-types"

class OptionsForm extends React.Component {
  constructor(props) {
    super(props)

    var self = this

    self.buildLevels = this.buildLevels.bind(this)
  }

  buildLevels() {
    return [1, 2, 3].map((level, i) => {
      var id = `level_${level}`
      return (
        <span key={i}>
          <label htmlFor={id}>
            {level}
          </label>
          <input type="radio"
          id={id}
          name="level"
          value={level}
          defaultChecked={level == this.props.selectedLevel}
          onClick={this.props.changeLevel} />
        </span>
      )
    })
  }
  
  buildBodyparts() {
    return this.props.bodyparts.map((bodypart, i) => {
      var id = `bodypart_${bodypart}`
      return (
        <span key={i}>
          <label htmlFor={id}>
            {bodypart}
          </label>
          <input type="checkbox"
          id={id}
          name="bodypart[]"
          value={bodypart}
          defaultChecked={true}
          onClick={this.props.changeBodyparts} />
        </span>
      )
    })
  }

  render () {
    return (
      <form>
        Bodyparts:<br />
        {this.buildBodyparts()}
        <br />
        Level:<br />
        {this.buildLevels()}
        <br />
        I have a chinup bar:<br />
        <input type="checkbox" name="include_bar" defaultChecked={true} onClick={this.props.toggleBar} />
        <br />
        Include dynamic exercises:<br />
        <input type="checkbox" name="include_dynamic" defaultChecked={true} onClick={this.props.toggleDynamic} />
      </form>
    )
  }
}

export default OptionsForm
