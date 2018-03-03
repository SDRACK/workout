import React from "react"
// import PropTypes from "prop-types"

class OptionsForm extends React.Component {
  constructor(props) {
    super(props)

    var self = this

    self.buildExerciseLevels = this.buildExerciseLevels.bind(this)
    self.buildExerciseRepLevels = this.buildRepLevels.bind(this)
    self.buildBodyparts = this.buildBodyparts.bind(this)
  }

  buildExerciseLevels() {
    return this.props.exerciseLevels.map((level, i) => {
      var id = `level_${level}`
      return (
        <span key={i}>
          <label htmlFor={id}>
            {level}
          </label>
          <input type="checkbox"
          id={id}
          name="exercise_level[]"
          value={level}
          defaultChecked={true}
          onClick={this.props.changeExerciseLevels} />
        </span>
      )
    })
  }
  
  buildRepLevels() {
    return [1, 2, 3].map((level, i) => {
      var id = `rep_level_${level}`
      return (
        <span key={i}>
          <label htmlFor={id}>
            {level}
          </label>
          <input type="radio"
          id={id}
          name="rep_level"
          value={level}
          defaultChecked={level == this.props.selectedRepLevel}
          onClick={this.props.changeRepLevel} />
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
        Exercise Levels:<br />
        {this.buildExerciseLevels()}
        <br />
        Rep Level:<br />
        {this.buildRepLevels()}
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
