import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'

import { Message } from '.'
import {
  ALL_MESSAGES_QUERY,
  NEW_MESSAGES_SUBSCRIPTION,
} from '../apollo/graphql'

function isLatestMessage(messages, index) {
  return index === messages.length - 1
}

export default function AllMessages() {
  const { subscribeToMore, data, loading, error } = useQuery(ALL_MESSAGES_QUERY)

  return (
    <MessageList
      {...data}
      loading={loading}
      subscribeToNewMessages={() => {
        return subscribeToMore({
          document: NEW_MESSAGES_SUBSCRIPTION,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev
            const newMessage = subscriptionData.data.messageSent
            return { messages: [...prev.messages, newMessage] }
          },
        })
      }}
    />
  )
}

function MessageList({ messages, loading, subscribeToNewMessages }) {
  useEffect(() => {
    subscribeToNewMessages()
  }, [])

  return (
    <Box basis="3/4" fill>
      <Box overflow="scroll">
        {loading && <p>Loading..</p>}
        {messages &&
          messages.map((message, index) => (
            <Message
              key={message.id}
              message={message.message}
              avatarUrl={message.user.avatarUrl}
              name={message.user.name}
              isLatest={isLatestMessage(messages, index)}
            />
          ))}
      </Box>
    </Box>
  )
}
