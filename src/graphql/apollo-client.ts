"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://graphql-pokemon.now.sh/",
    }),
    cache: new InMemoryCache(),
});

export default client;
