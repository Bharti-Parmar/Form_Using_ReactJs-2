import React from "react";
import ReactDOM from "react-dom";
// import FormData from "./data.js";
import "./styles.css";
import MyForm from "./Components/MyFrom";

// import App from "./App";
// const mystyle = {
//   color: "Red",
//   margin: "10px",
//   fontWeight: "bold",
//   fontFamily: "Arial",
//   size: "15px"
// };
// const table = {
//   border: "2px solid grey",
//   padding: "10px",
//   margin: "auto"
// };
// const MyTable = props => {
//   return (
//     <table style={table}>
//       <caption style={mystyle}>Form Data</caption>
//       <thead>
//         <tr>
//           <th scope="col">Name</th>
//           <th scope="col">Skill</th>
//           <th scope="col">Rating</th>
//           <th scope="col">Summary</th>
//         </tr>
//       </thead>
//       <tbody id="data">
//         <tr>
//           <td>Bharti</td>
//           <td>Bootstrap</td>
//           <td>7</td>
//           <td>Intermediate</td>
//         </tr>
//         <tr>
//           <td>Arti</td>
//           <td>Accounts</td>
//           <td>6</td>
//           <td>Beginner</td>
//         </tr>
//         {/* <tr>
//           <td></td>
//           <td>{props.skill.join(", ")}</td>
//           <td>{props.rating.join(", ")}</td>
//           <td>{props.description.join(", ")}</td>
//         </tr> */}
//       </tbody>
//     </table>
//   );
// };

// function

ReactDOM.render(<MyForm />, document.getElementById("root"));

export default MyForm;
