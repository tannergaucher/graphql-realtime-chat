const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { getUserId } = require('../utils/getUserId')

const MESSAGE_SENT = 'MESSAGE_SENT'

const Mutation = {
  signup: async (_, { name, email, password }, context) => {
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
  login: async (_, { email, password }, context) => {
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
  signout: () => {
    return { message: ' Goodbye' }
  },
  sendMessage: async (_, { message }, context) => {
    const userId = getUserId(context)

    const newMessage = await context.prisma.createMessage({
      message,
      user: {
        connect: {
          id: userId,
        },
      },
    })

    context.pubsub.publish(MESSAGE_SENT, { messageSent: newMessage })

    return newMessage
  },
  updateAvatarUrl: async (_, { avatarUrl }, context) => {
    const userId = getUserId(context)

    const user = await context.prisma.updateUser({
      where: {
        id: userId,
      },
      data: {
        avatarUrl,
      },
    })

    return user
  },
}

module.exports = {
  Mutation,
}
