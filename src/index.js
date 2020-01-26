import { config } from 'dotenv'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql'
import './db'
config()
const port = process.env.APP_PORT || 3001

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}/graphql`))