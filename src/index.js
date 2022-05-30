const express = require('express');
const apollo = require('./app');

const app = express();

apollo.applyMiddleware({ app, path: '/' });

app.listen('80878', () => console.log({ message: `GraphQL Server started on port 8078` }));
