import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// import App from "./App";

class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      skills: "",
      rating: null,
      description: ""
    };
    // this.setState({});
  }
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
            <td>Arti</td>
            <td>Accounts</td>
            <td>6</td>
            <td>Beginner</td>
          </tr>
          <tr>
            <td>{this.state.username}</td>
            <td>{this.state.skill}</td>
            <td>{this.state.rating}</td>
            <td>{this.state.description}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class MyForm extends React.Component {
  state = {
    username: "",
    skill: "",
    rating: null,
    description: ""
  };

  //we can write like this for every individual field which can be complex for multiple input field

  // handleName = e => {
  //   this.setState({ username: e.target.value });
  // };

  // handleSkill = e => {
  //   this.setState({ skill: e.target.value });
  // };

  // handleRating = e => {
  //   this.setState({ rating: e.target.value });
  // };

  // handleDescription = e => {
  //   this.setState({ description: e.target.value });
  // };

  //here, we use common or single handle function which handle all the inputs

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
    // for password
    // const value = e.target.name === "password"
    // ? e.target.value.toUpperCase().substr(0,10)
    // : e.target.value;
    // this.setState({ [e.target.name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { username } = this.state;
    return (
      <div id="card">
        <h1 style={{ color: "Green" }}>Candidate Form</h1>
        <h3>Hello, {username}</h3>
        <div id="mypage">
          <form onSubmit={this.handleSubmit}>
            <label>Enter your name:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              onChange={this.handleChange}
              // onChange={this.handleName}
              value={this.state.name}
              autoComplete="off"
              validate
            />
            <br />

            <div>
              <label>Enter Your Skill:</label>
              <input
                type="text"
                name="skill"
                placeholder="Enter Your Skills"
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.skill}
                // onChange={this.handleSkill}
              />
              <label>Rating:</label>
              <select
                value={this.state.rating}
                name="rating"
                onChange={this.handleChange}
              >
                <option value="Select">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <label>Description:</label>
              <textarea
                placeholder="Describe Your Skill"
                name="description"
                max-length="200"
                value={this.state.description}
                onChange={this.handleChange}
                // onChange={this.handleDescription}
              />
            </div>

            {/* </div> */}
            <button
              type="button"
              onClick={e => this.addskills(e)}
              id="btn"
              className="button"
            >
              Add More Skill
            </button>
            <button
              type="submit"
              value="submit"
              className="button"
              style={{ margin: "20px" }}
            >
              Save
            </button>
          </form>
        </div>
        <div id="table">
          <MyTable />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));
