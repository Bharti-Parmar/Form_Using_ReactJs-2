import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./data.html";
import MyForm from "./index.js";

// import App from "./App";

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      skill: "",
      rating: "Select",
      description: ""
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = event => {
    let nam = event.target.name;
    let skill = event.target.value;
    let rating = event.target.value;
    let text = event.target.value;
    this.setState({ [nam]: skill, rating, text });
  };
  render() {
    const mystyle = {
      color: "Red",
      margin: "10px",
      fontWeight: "bold",
      fontFamily: "Arial",
      size: "15px"
    };
    const table = {
      border: "2px solid grey",
      padding: "10px",
      margin: "auto"
    };
    return (
      <table style={table}>
        <caption style={mystyle}>Form Data</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Skill</th>
            <th scope="col">Rating</th>
            <th scope="col">Summary</th>
          </tr>
        </thead>
        <tbody id="data">
          <tr>
            <td>Bharti</td>
            <td>Bootstrap</td>
            <td>7</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>{this.state.username}</td>
            <td>{this.props.skill.join(", ")}</td>
            <td>{this.props.rating}</td>
            <td>{this.props.description}</td>
          </tr>
          <MyForm triggerChildUpdate={this.triggerChildUpdate} />
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(<FormData />, document.getElementById("candidate_data"));

export default FormData;
