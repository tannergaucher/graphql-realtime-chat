import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'

import { Message } from '.'
import { Error } from '../elements'
import {
  ALL_MESSAGES_QUERY,
  NEW_MESSAGES_SUBSCRIPTION,
} from '../apollo/graphql'

function isLatestMessage(messages, index) {
  return index === messages.length - 1
}

export default function AllMessages() {
  const { subscribeToMore, data, loading, error } = useQuery(ALL_MESSAGES_QUERY)

  useEffect(() => {
    subscribeToNewMessages()
  }, [])

  function subscribeToNewMessages() {
    return subscribeToMore({
      document: NEW_MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newMessage = subscriptionData.data.messageSent
        return { messages: [...prev.messages, newMessage] }
      },
    })
  }

  return (
    <Box basis="3/4" fill>
      <Box overflow="scroll">
        {error && <Error error={error} />}
        {loading && <p>Loading..</p>}
        {!data && <p>There are no messages yet</p>}
        {data &&
          data.messages &&
          data.messages.map((message, index) => (
            <Message
              key={message.id}
              message={message.message}
              avatarUrl={message.user.avatarUrl}
              name={message.user.name}
              isLatest={isLatestMessage(data.messages, index)}
            />
          ))}
      </Box>
    </Box>
  )
}
