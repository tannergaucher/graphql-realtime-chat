const Contact = {
  users: ({ id }, args, context) => {
    return context.prisma.contact({ id }).users()
  },
  messages: ({ id }, args, context) => {
    return context.prisma.contact({ id }).messages()
  },
}

module.exports = {
  Contact,
}
