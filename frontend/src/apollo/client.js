import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

const link = createHttpLink({
  uri: 'http://localhost:4000',
  credentials: 'include',
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link,
  cache,
  resolvers: {
    Mutation: {},
    Query: {},
  },
})

const data = {
  isLoggedIn: !!localStorage.getItem('token'),
}

cache.writeData({ data })

client.onResetStore(() => {
  cache.writeData({ data })
})
