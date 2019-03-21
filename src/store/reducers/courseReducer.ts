const courseReducer = (state = [], action: any) => {
  switch (action.type) {
    case "CREATE_COURSE":
      return [{ ...action.course }, ...state];
    default:
      return state;
  }
};

export default courseReducer;