export const createCourse = (course: object) => {
    return {
        type: 'CREATE_COURSE',
        course: course
    }
}