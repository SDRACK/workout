import React from "react"
import PropTypes from "prop-types"
import OptionsForm from "./OptionsForm"
import axios from "axios"
class Workout extends React.Component {
  constructor(props) {
    super(props)

    var self = this

    self.state = { exercises: [], level: 1 }

    self.getExerciseData = this.getExerciseData.bind(this)
    self.exerciseTable = this.exerciseTable.bind(this)
    self.changeLevel = this.changeLevel.bind(this)
  }

  componentDidMount() {
    this.getExerciseData()
  }

  getExerciseData() {
    var self = this
    axios.get(this.props.path)
      .then(function (response) {
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
    this.setState({ level: parseInt(e.currentTarget.value) })
  }

  render () {
    return (
      <div className="workout-container">
        <OptionsForm selectedLevel={this.state.level}
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
