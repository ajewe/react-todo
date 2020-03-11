import React from 'react';

function FirstComponent(props) {
  // console.log("This is FirstComp props***", props.items)
  return (
    <div>
      <h1>This is Our Listing Component</h1>
      <ul>
        {props.items.map((item, index) => {
        return <div>
          <li key={index}>{props.items[index]}</li> 
          <button onClick={() => props.deleteItem(index)}>Delete</button>
        </div>
        })}
      </ul>
    </div>

  )
}

export default FirstComponent;