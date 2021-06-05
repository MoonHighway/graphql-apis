const {
  ApolloServer,
  gql,
  MockList
} = require("apollo-server");
const fs = require("fs");

const typeDefs = fs.readFileSync(
  "./typeDefs.graphql",
  "UTF-8"
);

const mocks = {
  Date: () => "1/2/2025",
  String: () => "Cool data",
  Query: () => ({
    allDays: () => new MockList([1, 5])
  })
};

const server = new ApolloServer({
  typeDefs,
  mocks
});

server
  .listen()
  .then(({ url }) =>
    console.log(`Server running at ${url}`)
  );
