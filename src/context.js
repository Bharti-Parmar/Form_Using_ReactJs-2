// import React from "react";
// export const SkillContext = React.createContext();

// export class SkillProvider extends React.Component {
//   state = {
//     username: "bharti",
//     skill: "c",
//     rating: null,
//     description: "beginner"
//   }
//   setName = e => {
//       this.setState({ username: e.target.value });
//     };

//     setSkill = e => {
//       this.setState({ skill: e.target.value });
//     };

//     setRating = e => {
//       this.setState({ rating: e.target.value });
//     };

//     setDescription = e => {
//       this.setState({ description: e.target.value });
//     };

//     setSubmit = e => {
//       e.preventDefault();
//       alert(this.state.username, this.state.skill, this.state.rating, this.state.description);
//     }

//   render() {
//     return (
//       // two components are their 1. skill context provider, 2. skill context consumer
//       // here, we are using skill provider context
//       // <SkillContext.Provider
//       //  value={(
//       //   // ...this.state
//       //   // setName: this.setName,
//       //   // setSkill: this.setSkill,
//       //   // setRating: this.rating,
//       //   // setDescription: this.description
//       // )}
//       //   {this.props.children}
//       // </SkillContext.Provider>
//     );
//   }
// }
