const { buildSchema } = require('graphql')

const UserSchema = new buildSchema(`

    type Test {
        message: String!
    }

 
    type RootQuery {
        test: Test!
    }

    schema {
        query: RootQuery
    }

`)

module.exports = UserSchema