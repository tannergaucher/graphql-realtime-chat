import React, { useEffect } from 'react'
import { Box } from 'grommet'
import Message from '../components/message'

function ChatPage({ messages, loading, subscribeToNewMessages }) {
  useEffect(() => {
    subscribeToNewMessages()
  }, [])

  function isLatestMessage(messages, index) {
    return index === messages.length - 1
  }

  if (loading) return <p>loadingz...</p>
  return (
    <Box background="" fill basis="3/4">
      <Box overflow="scroll">
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

export default ChatPage
