export const createCourse = (course: string) => {
    return {
        type: 'CREATE_COURSE',
        course
    }
}