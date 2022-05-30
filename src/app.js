const { ApolloServer } = require("apollo-server");

const { typeDefs } = require('./schemas');
const { resolvers } = require('./resolvers');

module.exports = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return req.headers
    }
});

/*server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});*/
