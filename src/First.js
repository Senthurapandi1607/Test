import React,{ Component } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            First_Name : " ",
            Last_Name : " ",
            DateOfBirth: new Date(),
            Age:"",
            Blood_Group:"A+ve",
            Donors: []
        }
    };

    DateChangeHandle = date => {
        this.setState({
            DateOfBirth: date
        });
    };
    AgeChangeHandle = event => {
        this.setState({
            Age : event.target.value
        });
    };

    deleteRecord = (index) => {
        this.state.Donors.splice(index, 1);
        this.setState({
          Donors: this.state.Donors,
        });
      };

    handleSubmit = () => {
        this.setState({
          Donors: [
            ...this.state.Donors,
            {
              First_Name:   this.state.First_Name,
              Last_Name:    this.state.Last_Name,
              DateOfBirth:  new Date(this.state.DateOfBirth).toLocaleDateString(),
              Age:          this.state.Age,
              Blood_Group:  this.state.Blood_Group,
            },
          ],
            First_Name:   " ",
            Last_Name:    " ",
            DateOfBirth:  new Date(),
            Age:          "",
            Blood_Group:  "A+ve"
        });
      };

    render(){
        return(
            <div>
            <form 
            onSubmit = { (event) => {
                if(this.state.Age<18)
                {
                    event.preventDefault();
                    alert("You must be atleat 18 years old to donate");
                }
                else {
                    event.preventDefault();
                    this.handleSubmit();
                  }
            }}>
                <h1>"Donate Blood, Save a Life"</h1>
                <label>First Name</label>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input type = "text" 
                name="FirstName" 
                placeholder="Enter your First Name"
                value= {this.state.First_Name}
                onChange={(event) => {
                this.setState({First_Name: event.target.value });}
                }>
                </input>
                <br></br><br></br>

                <label>Last Name</label>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input type = "text"   
                placeholder="Enter your Last Name"
                name = "LastName"
                value= {this.state.Last_Name}
                onChange={(event) => {
                this.setState({Last_Name: event.target.value });}
                }>
                </input>
                <br></br><br></br>

                <label>DOB</label>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <DatePicker name="DOB" selected={this.state.DateOfBirth}
                onChange={this.DateChangeHandle }>
                </DatePicker>
                <br></br><br></br>

                <label>Age</label>  
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <input type = "number" 
                name ="Age"
                placeholder="Enter your Age" 
                value = {this.state.Age}
                onChange={this.AgeChangeHandle}></input>   
                <br></br><br></br>

                <label>Blood Group</label>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <select value ={this.state.Blood_Group}
                onChange={(event)=>{
                    this.setState({Blood_Group: event.target.value});
                }}>
                    <option value="O+ve"> O+ve</option>
                    <option value="O-ve"> O-ve</option>
                    <option value="A+ve"> A+ve</option>
                    <option value="A-ve"> A-ve</option>
                    <option value="B+ve"> B+ve</option>
                    <option value="B-ve"> B-ve</option>
                    <option value="AB+ve"> AB+ve</option>
                    <option value="AB-ve"> AB-ve</option>
                </select>
                <br></br><br></br>
                <input type = "submit" value = "Submit"></input>
            </form>
            <hr></hr>
            <center>
                <h4>Previous Records</h4>
            <table>
                <tr>
                    <th>F Name</th>
                    <th>L Name</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>B Group</th>
                    <th>Action</th>
                </tr>
                {this.state.Donors.map((element, index) => (
            <tr>
              <td>{element.First_Name}</td>
              <td>{element.Last_Name}</td>
              <td>{element.DateOfBirth}</td>
              <td>{element.Age}</td>
              <td>{element.Blood_Group}</td>
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
            </center>
            </div>
        )
    }
}

export default First;
