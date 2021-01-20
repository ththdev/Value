require("dotenv").config();
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import mongoose from "mongoose";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Connected to mongod server");
  }
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
