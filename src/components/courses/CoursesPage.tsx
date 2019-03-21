import React, { Component } from "react";

export default class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = (e: any) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({
      course
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <div>
        <h2>Courses</h2>
        <form>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
