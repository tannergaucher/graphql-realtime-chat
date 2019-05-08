const { GraphQLServer, PubSub } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')

require('dotenv').config()

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
      pubsub,
    }
  },
})

server.start(
  {
    cors: {
      credentials: true,
      origin: 'http://localhost:3000',
    },
  },
  details => {
    console.log(`Server is running on http://localhost:${details.port}`)
  }
)
