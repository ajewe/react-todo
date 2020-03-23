import React from 'react';
import { green } from 'ansi-colors';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editableItem: false,
    };
  }

  toggleEditItem = () => {
    this.setState({ editableItem: true })
  }

  render() {
    return (
      <>
        <li key={this.props.index}>
          <div class="list-item"
            onClick={() => this.toggleEditItem()}>
            {this.state.editableItem ?
              <input value={this.props.item}
                onChange={(event) => {
                  this.props.editInput(event, this.props.index)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    this.setState({editableItem: false})
                  }
                }} />
              :
              this.props.item}
          </div>
          <button className="btn" onClick={() =>
            this.props.deleteItem(this.props.index)} style={{ margin: "0 20px" }}>
            Delete
          </button>
        </li>
      </>
    )
  }
}

export default ListItem;