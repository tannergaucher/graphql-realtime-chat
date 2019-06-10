const Message = {
  user: ({ id }, args, context) => {
    return context.prisma.message({ id }).user()
  },
}

module.exports = {
  Message,
}
