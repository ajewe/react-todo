import React from 'react';

function FirstComponent(props) {
  // console.log("This is FirstComp props***", props.items)
  return (
    <div>
      <h1>To-Do List:</h1>
      <ul style={{width:"auto"}}>
        {props.items.map((item, index) => {
        return <div>
          <li key={index}>{props.items[index]}
            <button onClick={() => props.deleteItem(index)} style={{margin:"0 20px"}}>Delete</button>
          </li> 
        </div>
        })}
      </ul>
    </div>

  )
}

export default FirstComponent;