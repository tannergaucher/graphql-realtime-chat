import React, { useRef, useEffect } from 'react'
import { Box, Text, Heading } from 'grommet'

import Avatar from '../components/avatar'

export default function Message({ avatarUrl, message, name, isLatest }) {
  const messageRef = useRef()

  useEffect(() => {
    if (isLatest) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <Box
      margin={{ vertical: 'xsmall', horizontal: 'none' }}
      round="small"
      direction="row"
      align="center"
      ref={messageRef}
    >
      <Avatar avatarUrl={avatarUrl} />

      <Box margin={{ left: 'small' }}>
        <Heading level={6} color="dark-3" margin="none">
          {name}
        </Heading>
        <Text>{message}</Text>
      </Box>
    </Box>
  )
}
