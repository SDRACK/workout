import React from "react"
import PropTypes from "prop-types"
import OptionsForm from "./OptionsForm"
import axios from "axios"
class Workout extends React.Component {
  constructor(props) {    
    super(props)

    var self = this

    self.state = { exercises: [], 
                   level: 1, 
                   bodyparts: props.bodyparts.slice(0),
                   includeDynamic: true,
                   includeBar: true }

    self.getExerciseData = this.getExerciseData.bind(this)
    self.exerciseTable = this.exerciseTable.bind(this)
    self.changeLevel = this.changeLevel.bind(this)
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
      params: { level: this.state.level, 
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
    var currentLevel = this.state.level
    const exercises = this.state.exercises.map((exercise, i) => {
      return (
        <tr key={i}>
          <td>{exercise.name}</td>
          <td>{exercise.bodypart}</td>
          <td>{exercise.description}</td>
          <td>{exercise.reps_by_level[currentLevel]}</td>
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

  changeLevel (e) {
    this.state.level = parseInt(e.currentTarget.value)
    this.getExerciseData()
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

  render () {
    return (
      <div className="workout-container">
        <OptionsForm bodyparts={this.props.bodyparts}
                     changeBodyparts={this.changeBodyparts}
                     selectedLevel={this.state.level}
                     toggleDynamic={this.toggleDynamic}
                     toggleBar={this.toggleBar}
                     changeLevel={this.changeLevel} />
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
