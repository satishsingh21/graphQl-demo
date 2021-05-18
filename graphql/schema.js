import {buildSchema} from 'graphql';

const schema = buildSchema(`
    # Course schema
    type Course {
        id: ID
        courseName: String
        price: Int
        name: String
        email: String
        category: String
        language: String
        stack: Stack
        teachingAssists: [TeachingAssist]
    }

    # TeachingAssist schema
    type TeachingAssist {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        Mobile
        other
    }

    # root Type 
    type Query {
        # We will return complete course. It's graphql job of cherry picking what they need
        getCourse(id: ID): Course
    }    

    # another way to define type basically used to differentiate normal schema
    # vs schema we are looking for validation.
    
    input CourseInput {
        id: ID
        courseName: String!
        price: Int!
        name: String!
        email: String
        category: String
        language: String
        stack: Stack
        teachingAssists: [TeachingAssistInput]!
    }

    input TeachingAssistInput {
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`)

export default schema;