import React from "react";
class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.skillId = 0;
    // this.state = {
    //   username: "",
    //   skillList: [
    //     // skill: "",
    //     // rating: null,
    //     // description: ""
    //   ]
    // };
    // this.setState({});
  }

  mergeProperties(skillList, attr) {
    let out = [];
    for (var i = 0; i < skillList.length; i++) {
      if (skillList[i][attr]) out.push(skillList[i][attr]);
    }
    return out.join(", ");
  }

  render() {
    console.log(this.props);
    const { tableData } = this.props;
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
          {/* <tr>
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
          </tr> */}
          {tableData.map(user => {
            return (
              <tr>
                <td>{user.username}</td>
                <td>{this.mergeProperties(user.skillList, "skill")}</td>
                <td>{this.mergeProperties(user.skillList, "rating")}</td>
                <td>{this.mergeProperties(user.skillList, "description")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MyTable;
