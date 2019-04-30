const User = {
  contacts: ({ id }, args, context) => {
    return context.prisma.user({ id }).contacts()
  },
}

module.exports = {
  User,
}
