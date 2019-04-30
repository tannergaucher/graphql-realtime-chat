const Contact = {
  users: ({ id }, args, context) => {
    return context.prisma.contact({ id }).users()
  },
  chat: ({ id }, args, context) => {
    return context.prisma.contact({ id }).chat()
  },
}

module.exports = {
  Contact,
}
