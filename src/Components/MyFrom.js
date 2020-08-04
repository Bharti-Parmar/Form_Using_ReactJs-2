import React from "react";
import AddSkill from "./skill.js";
import MyTable from "./MyTable";
class MyForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     skillList: [
  //       // {
  //       //   skill: "c",
  //       //   rating: 4,
  //       //   description: "beginner"
  //       // },
  //       // {
  //       //   skill: "cpp",
  //       //   rating: 5,
  //       //   description: "intermediate"
  //       // },
  //       // {
  //       //   skill: "Bootstrap",
  //       //   rating: 8,
  //       //   description: "Advance"
  //       // }
  //     ]
  //   };
  //   this.triggerChildUpdate = this.triggerChildUpdate.bind(this);
  // }

  constructor() {
    super();
    this.skillId = 0;
    this.state = {
      tableData: [],
      username: "",
      skillList: [{}], // [{}=> default ]
      skillObj: {}
    };
  }

  // triggerChildUpdate(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //     [e.target.name]: e.target.value,
  //     [e.target.name]: e.target.value,
  //     [e.target.name]: e.target.value
  //   });
  // }

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
    console.log("onchange in skills", e.target.name, e.target.value);
    let { skillObj } = this.state;
    skillObj[e.target.name] = e.target.value;
    this.setState(skillObj);

    // for password
    // const value = e.target.name === "password"
    // ? e.target.value.toUpperCase().substr(0,10)
    // : e.target.value;
    // this.setState({ [e.target.name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("your data is submitted");
    // console.log(e.target.name);
  };

  handleDelete = index => {
    const copySkillArray = Object.assign([], this.state.skillList);
    copySkillArray.splice(index, 1);
    this.setState({
      skillList: copySkillArray
    });
  };

  // setSkill = e => {
  //   this.setState({
  //     skill: e.target.value,
  //     rating: e.target.value,
  //     description: e.target.value
  //   });
  // };

  addSkill = () => {
    this.skillId = this.skillId + 1;
    let { skillList } = this.state;
    // const copySkillArray = Object.assign([], this.state.skillList);
    skillList.push({
      id: this.skillId,
      skill: this.state.skill,
      rating: this.state.rating,
      description: this.state.description
    });
    this.setState({
      skillList: skillList
    });
  };

  saveUserSkills() {
    var username = document.getElementById("username").value;
    // var skill = document.getElementById("skill");
    // var rating = document.getElementById("rating");
    // var description = document.getElementById("description");

    let { tableData, skillList } = this.state;
    tableData.push({
      username,
      skillList
    });
    console.log("tableData", tableData);
    this.setState({ tableData }, () => {
      // clear form data
    });
  }

  render() {
    const { username, skillList } = this.state;
    console.log("skillList", skillList);
    return (
      <div id="card">
        <h1 style={{ color: "Green" }}>Candidate Form</h1>
        <h3>Hello, {username}</h3>
        <div id="mypage">
          {/* <input type="text" id="skillid" onBlur={this.setSkill} /> */}
          <form onSubmit={this.handleSubmit}>
            <label>Enter your name:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              onChange={this.handleChange}
              id="username"
              // onChange={this.handleName}
              value={this.state.name}
              autoComplete="off"
            />
            <br />
            <table>
              <thead>
                <tr>
                  {/* <th>Skill</th>
                  <th>Rating</th>
                  <th>Description</th> */}
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td>
                    <label>Skill:</label>
                    <input
                      type="text"
                      name="skill"
                      placeholder="Enter Your Skills"
                      id="skill"
                      autoComplete="off"
                      // onChange={this.triggerChildUpdate}
                      onBlur={this.setSkill.skill}
                      value={this.state.skill}
                      // onChange={this.handleSkill}
                    />
                  </td>
                  <td>
                    <label>Rating:</label>
                    <select
                      value={this.state.rating}
                      name="rating"
                      id="rating"
                      onBlur={this.setSkill.rating}
                      onChange={this.triggerChildUpdate}
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
                  </td>
                  <td>
                    <label>Description:</label>
                    <textarea
                      placeholder="Describe Your Skill"
                      name="description"
                      max-length="200"
                      id="description"
                      value={this.state.description}
                      // onChange={this.triggerChildUpdate}
                      onBlur={this.setSkill.description}
                      // onChange={this.handleDescription}
                    />
                  </td>
                </tr> */}
                {skillList.map((skillObj, index) => {
                  return (
                    <AddSkill
                      key={`skillObj.skill-${skillObj.id}`}
                      skill={skillObj.skill}
                      rating={skillObj.rating}
                      description={skillObj.description}
                      handleChange={this.handleChange}
                      delete={this.handleDelete.bind(this, index)}
                    />
                  );
                })}
              </tbody>
            </table>

            {/* <div>
              
            </div> */}

            {/* </div> */}
            <button
              type="button"
              id="btn"
              className="button"
              onClick={this.addSkill}
            >
              Add More Skill
            </button>
            <button
              type="submit"
              value="submit"
              className="button"
              style={{ margin: "20px" }}
              onClick={() => this.saveUserSkills()}
              // onClick={this.props.triggerChildUpdate}
            >
              Save
            </button>
          </form>
        </div>
        <div id="table">
          <MyTable tableData={this.state.tableData} a />
          {/* <FormData /> */}
        </div>
      </div>
    );
  }
}

// MyForm.propTypes = {
//   username: React.propTypes.string,
//   skill: React.propTypes.string,
//   rating: React.propTypes.number,
//   description: React.propTypes.string
// };

export default MyForm;
