import React from 'react';

function ShowFormInput(props) {
  return(
    <div className="input-div">
      <form onSubmit={props.formSubmit}>
        <textarea className="form-input" value={props.todoInput} onChange={props.inputUpdate} />
        <div>
          <label>Urgency: </label>
          <select id="urgencyStatus" name="urgencyStatus" value={props.urgencyInput} onChange={props.urgencyInputUpdate}>
            <option value="lightgreen">Green</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
          </select>
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default ShowFormInput;