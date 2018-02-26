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
    // this.state = {
    //   color: props.initialColor
    // };
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
    const exercises = this.state.exercises.map((exercise, i) => {
      return (
        <tr key={i}>
          <td>{exercise.name}</td>
          <td>{exercise.bodypart}</td>
          <td>{exercise.description}</td>
        </tr>
      )
    })
    return(
      <table>
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
      <React.Fragment>
        <OptionsForm selectedLevel={this.state.level}
                     changeLevel={this.changeLevel} />
        Your Workout: {this.exerciseTable()}
        <button onClick={this.getExerciseData}>
          Generate
        </button>
      </React.Fragment>
    )
  }
}

// Workout.propTypes = {
//   greeting: PropTypes.string
// };
export default Workout

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });