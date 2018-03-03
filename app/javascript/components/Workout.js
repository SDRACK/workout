import React from "react"
import PropTypes from "prop-types"
import OptionsForm from "./OptionsForm"
import axios from "axios"
class Workout extends React.Component {
  constructor(props) {    
    super(props)

    var self = this

    self.state = { exercises: [], 
                   repLevel: props.rep_level,
                   exerciseLevels: props.exercise_levels.slice(0),
                   bodyparts: props.bodyparts.slice(0),
                   includeDynamic: true,
                   includeBar: true }

    self.getExerciseData = this.getExerciseData.bind(this)
    self.exerciseTable = this.exerciseTable.bind(this)
    self.changeExerciseLevels = this.changeExerciseLevels.bind(this)
    self.changeRepLevel = this.changeRepLevel.bind(this)
    self.changeBodyparts = this.changeBodyparts.bind(this)
    self.toggleDynamic = this.toggleDynamic.bind(this)
    self.toggleBar = this.toggleBar.bind(this)
  }

  componentDidMount() {
    this.getExerciseData()
  }

  getExerciseData() {
    var self = this
    axios.get(this.props.path, { 
      params: { exercise_levels: this.state.exerciseLevels, 
                bodyparts: this.state.bodyparts,
                include_dynamic: this.state.includeDynamic,
                include_bar: this.state.includeBar } 
    }).then(function (response) {
        self.setState({ exercises: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  exerciseTable() {
    const exercises = this.state.exercises.map((exercise, i) => {
      return (
        <tr key={i}>
          <td>{exercise.name}</td>
          <td>{exercise.bodypart}</td>
          <td>{exercise.description}</td>
          <td>{exercise.reps_by_level[this.state.repLevel]}</td>
        </tr>
      )
    })
    return(
      <table className="workout-table">
        <tbody>
          {exercises}
        </tbody>
      </table>
    )
  }

  changeRepLevel (e) {
    this.setState({repLevel: parseInt(e.currentTarget.value)})
  }
  
  toggleDynamic (e) {
    this.state.includeDynamic = e.currentTarget.value
    this.getExerciseData()
  }
  
  toggleBar (e) {
    this.state.includeBar = e.currentTarget.value
    this.getExerciseData()
  }
  
  changeBodyparts (e) {
    var input = e.currentTarget
    var val = input.value
    var currentBodyparts = this.state.bodyparts
    var bodypartIndex = currentBodyparts.indexOf(val)
    if(input.checked) {
      if(bodypartIndex < 0) { currentBodyparts.push(val) }
    } else {
      if(bodypartIndex >= 0) { currentBodyparts.splice(bodypartIndex, 1) }
    }
    this.state.bodyparts = currentBodyparts
    this.getExerciseData()
  }
  
  changeExerciseLevels (e) {
    var input = e.currentTarget
    var val = input.value
    var currentExerciseLevels = this.state.exerciseLevels
    var levelIndex = currentExerciseLevels.indexOf(val)
    if(input.checked) {
      if(levelIndex < 0) { currentExerciseLevels.push(val) }
    } else {
      if(levelIndex >= 0) { currentExerciseLevels.splice(levelIndex, 1) }
    }
    this.state.exerciseLevels = currentExerciseLevels
    this.getExerciseData()
  }

  render () {
    return (
      <div className="workout-container">
        <OptionsForm bodyparts={this.props.bodyparts}
                     changeBodyparts={this.changeBodyparts}
                     selectedRepLevel={this.state.repLevel}
                     toggleDynamic={this.toggleDynamic}
                     toggleBar={this.toggleBar}
                     exerciseLevels={this.props.exercise_levels}
                     changeExerciseLevels={this.changeExerciseLevels}
                     changeRepLevel={this.changeRepLevel} />
        <h1>Your Workout</h1>
        {this.exerciseTable()}
        <button className="generate-workout-button" onClick={this.getExerciseData}>
          Generate
        </button>
      </div>
    )
  }
}

// Workout.propTypes = {
//   greeting: PropTypes.string
// };
export default Workout
