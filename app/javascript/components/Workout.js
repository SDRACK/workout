import React from "react"
import PropTypes from "prop-types"
import axios from "axios"
class Workout extends React.Component {
  constructor(props) {
    super(props)

    var self = this

    self.state = { exercises: [] }

    self.getExerciseData = this.getExerciseData.bind(this)
    self.exerciseTable = this.exerciseTable.bind(this)
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

  render () {
    return (
      <React.Fragment>
        Your Workout: {this.exerciseTable()}
        <button onClick={this.getExerciseData}>
          WOW
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
