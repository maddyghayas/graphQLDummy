const fs = require('fs');
const path = require('path');

const { gql } = require('apollo-server');

const schemaFilePath = path.join(__dirname, '../schemas/');
const schema = fs.readFileSync(schemaFilePath, 'utf8');

const typeDefs = gql`
  ${schema}
`;

module.exports = { typeDefs };
