const User = {
  messages: ({ id }, args, context) => {
    return context.prisma.user({ id }).messages()
  },
}

module.exports = {
  User,
}
