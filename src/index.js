import express from 'express';
import { config } from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema.js';
import connectDatabase from './config/database.js';

config();
connectDatabase();

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' }));

app.listen(PORT, () => console.log(`Server listening on ${PORT} 💻`));
