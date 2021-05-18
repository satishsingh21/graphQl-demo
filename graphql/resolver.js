import { nanoid } from "nanoid"

class Course {
    constructor(id, {
        courseName,
        price,
        name,
        email,
        category,
        language,
        stack,
        teachingAssists
    }) {
        this.id = id;
        this.courseName = courseName;
        this.price = price;
        this.name = name;
        this.email = email;
        this.category = category;
        this.language = language;
        this.stack = stack;
        this.teachingAssists = teachingAssists; 
    }
}

// In realworld this could come from database or some other rest api
const dataHodler = {}; // empty resource

const resolvers = {
    getCourse: ({id}) => {
        // here we can attach our dataSource, which could be dataabse or another rest api
        return new Course(id, dataHodler[id]);
    },
    createCourse: ({input}) => {
        let id = nanoid();
        dataHodler[id] = input;
        return new Course(id, input);
    }
} 

export default resolvers;