import express from 'express';
import { graphqlHTTP } from 'express-graphql'

import schema from './graphql/schema';
import resolvers from './graphql/resolver';

const app = express();
app.get('/', (req,res) => res.send('Express + TypeScript Server'));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(8000, () => {
  console.log(`Server is running at https://localhost:8000`);
});