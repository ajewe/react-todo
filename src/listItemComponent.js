import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editableItem: false
    };
  }

  toggleEditItem = () => {
    this.setState({ editableItem: true })
  }

  render() {
    return (
      <>
        <li key={this.props.index} style={{color: this.props.urgency}}>
          <div className="list-item"
            onClick={() => this.toggleEditItem()}>
            {this.state.editableItem ?
              <form onSubmit={event => {
                      event.preventDefault()
                      this.setState({editableItem: false})
                    }}>
                <input className="inputEdit" 
                       value={this.props.item}
                       style={{color: this.props.urgency}}
                       onChange={(event) => {
                        this.props.editInput(event, this.props.index)
                       }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          this.setState({editableItem: false})
                        }
                      }} />
                  <br></br>
                  <label className="urg-label">Urgency: </label>
                    <select id="urgencyStatus" 
                            name="urgencyStatus" 
                            value={this.props.urgency}
                            onChange={(event) => {
                              this.props.editUrgencyInput(event, this.props.index)
                            }}>
                      <option value="lightgreen">Green</option>
                      <option value="yellow">Yellow</option>
                      <option value="red">Red</option>
                    </select>
                <button className="btn update-btn">Done</button>
              </form>
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