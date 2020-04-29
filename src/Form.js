import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: "",
      gender: "male",
      list: [],
    };
  }

  handleSubmit = () => {
    this.setState({
      list: [
        ...this.state.list,
        {
          name: this.state.name,
          age: this.state.age,
          gender: this.state.gender,
        },
      ],
      name: "",
      age: "",
      gender: "male",
    });
  };
  deleteRecord = (index) => {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
  };

  render() {
    return (
      <div>
        Form Component
        <hr />
        <form
          onSubmit={(event) => {
            if (
              this.state.name == "" ||
              this.state.age == "" ||
              this.state.gender == ""
            ) {
              event.preventDefault();
              alert("Insert Every Field");
            } else {
              event.preventDefault();
              this.handleSubmit();
            }
          }}
        >
          <label>Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
          ></input>
          <br></br>
          <label>Age</label>
          <input
            type="number"
            name="Age"
            placeholder="Enter Age"
            min="1"
            value={this.state.age}
            onChange={(event) => {
              this.setState({ age: event.target.value });
            }}
          ></input>
          <br></br>
          <label>Gender</label>
          <select
            value={this.state.gender}
            onChange={(event) => {
              this.setState({ gender: event.target.value });
            }}
          >
            <option value="male">Male</option>

            <option value="female">Female</option>
          </select>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <hr></hr>
        <center>
          <h2>Table</h2>
        </center>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
          {this.state.list.map((element, index) => (
            <tr>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.gender}</td>
              <td>
                <button
                  type="button"
                  onClick={(e) => {
                    this.deleteRecord(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Form;