import React from 'react';

function ShowFormInput(props) {
  return(
    <div className="input-div">
      <form onSubmit={props.formSubmit}>
        <textarea className="form-input" value={props.input} onChange={props.inputUpdate} />
        <br></br>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default ShowFormInput;