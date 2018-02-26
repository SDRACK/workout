import React from "react"
// import PropTypes from "prop-types"

const OptionsForm = (props) => {
  const inputs = ["1", "2", "3"].map((level) => {
    return(
      <input type="radio" name="level" value={level} defaultChecked={level == props.selectedLevel} key={level} />
    )
  })
  return (
    <form>
      Level:<br />
      {inputs}
    </form>
  )
}

export default OptionsForm
