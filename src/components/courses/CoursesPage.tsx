import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/courseActions";
import { Dispatch } from "redux";
import { ICourseStore } from "../../store/reducers/courseReducer";

interface CourseProps {
  courses: ICourseStore;
  createCourse: Function;
}

interface IState {}

class CoursesPage extends Component<CourseProps, IState> {
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
    this.props.createCourse(this.state.course);
    console.log("This is courses", this.props.courses.courses)
  };

  render() {
    const { courses } = this.props.courses;
    const courseList = 
        <ul>{ courses.map((item) => ( <li key={item.title}>{item.title}</li> )) }</ul>;
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
        { courseList }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createCourse: (course: any) => dispatch(courseActions.createCourse(course))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
