const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Mutation {
        getOffers(Platform: string): string
    }
`;
