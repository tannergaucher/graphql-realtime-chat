import React from 'react'
import { Heading, Box, Text } from 'grommet'

import Avatar from '../components/avatar'

export default function ChatPreview({
  name,
  message,
  isOnline,
  isUnread,
  isReciever,
}) {
  return (
    <Box
      direction="row"
      align="center"
      pad={{ vertical: 'small' }}
      margin={{ vertical: 'medium' }}
    >
      <Avatar isOnline={isOnline} />
      <Box direction="row" fill="horizontal" justify="between" align="center">
        <Box margin={{ left: 'xsmall' }}>
          <Heading level={4} margin="none" alignSelf="start">
            {name}
          </Heading>
          <Text size="xsmall">{message}</Text>
        </Box>
        {isReciever && isUnread && <UnreadDot />}
        {!isReciever && isUnread && <MiniAvatar />}
      </Box>
    </Box>
  )
}

function UnreadDot() {
  return (
    <Box
      margin="small"
      background="accent-2"
      style={{
        height: '8px',
        width: '8px',
        borderRadius: '50%',
      }}
    />
  )
}

function MiniAvatar() {
  return (
    <Box
      margin="small"
      background="dark-2"
      style={{
        height: '8px',
        width: '8px',
        borderRadius: '50%',
      }}
    />
  )
}
