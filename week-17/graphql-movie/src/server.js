const { ApolloServer, gql } = require("apollo-server");

const moviesFromDB = [
  {
    id: "1",
    title: "MOVIE 1",
    minutes: 100,
    director: {
      firstName: "bob",
      lastName: "smith",
    },
  },
  {
    id: "2",
    title: "MOVIE 2",
    minutes: 10,
    director: {
      firstName: "john",
      lastName: "smith",
    },
  },
  {
    id: "3",
    title: "Movie 3",
    minutes: 90,
    director: {
      firstName: "jane",
      lastName: "smith",
    },
  },
  {
    id: "4",
    title: "Movie 4",
    minutes: 80,
    director: {
      firstName: "michael",
      lastName: "smith",
    },
  },
];

const directorsFromDB = [
  {
    firstName: "bob",
    lastName: "smith",
  },
  {
    firstName: "john",
    lastName: "smith",
  },
  {
    firstName: "jane",
    lastName: "smith",
  },
  {
    firstName: "michael",
    lastName: "smith",
  },
];

// Step 1: Define schema or type definitions
const typeDefs = gql`
  type Director {
    firstName: String
    lastName: String
  }

  type Movie {
    id: ID
    title: String
    director: Director
  }

  type Query {
    #all your queries here
    movie: [Movie]
    director: [Director]
  }
`;

// Step 2: Define your resolvers

const movieResolver = () => {
  // return value should respect schema
  return moviesFromDB;
};

const directorResolver = () => {
  // return value should respect schema
  return directorsFromDB;
};

const resolvers = {
  Query: {
    movie: movieResolver,
    director: directorResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀🚀  Server ready at ${url}`);
});
