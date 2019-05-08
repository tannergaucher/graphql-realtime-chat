const MESSAGE_SENT = 'MESSAGE_SENT'

const Subscription = {
  messageSent: {
    subscribe: (parent, args, { pubsub }) => {
      return pubsub.asyncIterator(MESSAGE_SENT)
    },
  },
}

module.exports = {
  Subscription,
}
