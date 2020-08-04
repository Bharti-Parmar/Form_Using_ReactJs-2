import React from "react";
const CandidateList = props => {
  return props.taskList.map((val, idx) => {
    let candidateName = `candidateName-${idx}`,
      skill = `skill-${idx}`,
      rating = `rating-${idx}`,
      description = `description-${idx}`;
    return (
      <tr key={val.index}>
        <td>
          <input
            type="text"
            name="candidateName"
            data-id={idx}
            id={candidateName}
            className="form-control "
          />
        </td>
        <td>
          <input
            type="text"
            name="skill"
            id={skill}
            data-id={idx}
            className="form-control "
          />
        </td>
        <td>
          <textarea
            name="description"
            id={description}
            data-id={idx}
            className="form-control"
          />
        </td>
        <td>
          <select
            name="rating"
            id={rating}
            data-id={idx}
            className="form-control"
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
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true" />
            </button>
          )}
        </td>
      </tr>
    );
  });
};
export default CandidateList;
