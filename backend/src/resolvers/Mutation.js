const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { getUserId, AuthError } = require('../utils/getUserId')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for this email`)
    }
    const passwordValid = await compare(password, user.password)

    if (!passwordValid) {
      throw new Error(`Invalid Password`)
    }
    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },
  logout: (parent, { id }, context) => {
    return { message: 'Goodbye' }
  },
  createContact: async (parent, { requestedId }, context) => {
    // get the userId from request
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    // create a contact connecting the 2 users
    // TODO: Check if contact already exists btw users and return if so
    // look for a contact that has both users and
    const contact = await context.prisma.createContact({
      users: {
        connect: [{ id: userId }, { id: requestedId }],
      },
    })

    return contact
  },
}

module.exports = {
  Mutation,
}
