import { ICourse } from "../types/course";

export interface ICourseStore {
    courses: ICourse[];
}

const initialState: ICourseStore = {
    courses: []
}

const courseReducer = (state: ICourseStore = initialState, action: any) => {
  switch (action.type) {
    case "CREATE_COURSE":
      return {
          ...state,
          courses: [action.course, ...state.courses]  
      };
    default:
      return state;
  }
};

export default courseReducer;