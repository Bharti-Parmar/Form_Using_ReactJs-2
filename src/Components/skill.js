import React from "react";

export default class AddSkill extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="skill"
            placeholder="Enter Your Skills"
            autoComplete="off"
            onChange={event => this.props.handleChange(event)}
            value={this.props.skill}
            // onChange={this.handleSkill}
          />
        </td>
        <td>
          <select
            value={this.props.rating}
            name="rating"
            onChange={event => this.props.handleChange(event)}
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
          <textarea
            placeholder="Describe Your Skill"
            name="description"
            max-length="200"
            value={this.props.description}
            onChange={event => this.props.handleChange(event)}
            // onChange={this.handleDescription}
          />
        </td>
        <td>
          <button type="button" onClick={this.props.delete}>
            X
          </button>
        </td>
      </tr>
    );
  }
}
