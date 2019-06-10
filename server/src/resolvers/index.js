const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { Message } = require('./Message')

const resolvers = {
  Query,
  Mutation,
  User,
  Subscription,
  Message,
}

module.exports = {
  resolvers,
}
