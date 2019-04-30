const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Contact } = require('./Contact')

const resolvers = {
  Query,
  Mutation,
  User,
  Contact,
}

module.exports = {
  resolvers,
}
