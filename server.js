const express = require('express')
const cors = require('cors')
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const mongoose = require('mongoose')
app.use(cors())


const db = require('./config/keys').MONGOOSE_URL
mongoose.connect(db).then(() => console.log(`Connected To Database ${db}`))



app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}))

const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`listenning at PORT ${port}`)
})