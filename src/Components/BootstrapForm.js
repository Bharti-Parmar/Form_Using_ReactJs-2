import React from "react";
import CandidateList from "./formList.js";
import "./styles.css";

class Form extends React.Component {
  state = {
    candidateList: [
      {
        index: Math.random(),
        skill: "",
        description: "",
        rating: ""
      }
    ],
    candidateName: ""
  };

  handleChange = e => {
    if (["skill", "description", "rating"].includes(e.target.name)) {
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewRow = e => {
    this.setState(prevState => ({
      candidateList: [
        ...prevState.candidateList,
        {
          index: Math.random(),
          skill: "",
          description: "",
          rating: ""
        }
      ]
    }));
  };

  deteteRow = index => {
    this.setState({
      candidateList: this.state.candidateList.filter(
        (s, sindex) => index !== sindex
      )
    });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.skill === "" || this.state.rating === "") {
      alert("Please Fill up Required Field . Please fill skill and rating");
      return false;
    }
    for (var i = 0; i < this.state.candidateList.length; i++) {
      if (this.state.candidateList[i].candidateName === "") {
        alert("Please Fill the candidate name");
        return false;
      }
    }
    // let data = { formData: this.state, userData: localStorage.getItem("user") };
  };
  clickOnDelete(record) {
    this.setState({
      candidateList: this.state.candidateList.filter(r => r !== record)
    });
  }
  render() {
    // let { candidateList } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">
                  Add Your Daily Task
                </div>
                <div className="card-body">
                  <label className="required">Candidate Name</label>
                  <input
                    name="candidateName"
                    id="candidateName"
                    className="form-control"
                  />
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="required">Skill</th>
                        <th className="required">Rating</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <CandidateList
                        add={this.addNewRow}
                        delete={this.clickOnDelete.bind(this)}
                        // candidateList={this.candidateList}
                      />
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <button
                            onClick={this.addNewRow}
                            type="button"
                            className="btn btn-primary text-center"
                          >
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            />
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="card-footer text-center">
                  {" "}
                  <button type="submit" className="btn btn-primary text-center">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1" />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
