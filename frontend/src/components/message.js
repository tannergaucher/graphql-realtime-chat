import React from 'react'
import { Box, Text } from 'grommet'

import Avatar from '../components/avatar'

export default function message({ avatarURL, text, isMe, isRepeating }) {
  return (
    <Box margin={{ vertical: 'xxsmall', horizontal: 'small' }}>
      {isMe ? (
        <Me text={text} isRepeating={isRepeating} />
      ) : (
        <You text={text} isRepeating={isRepeating} />
      )}
    </Box>
  )
}

function You({ text, isRepeating }) {
  return (
    <Box direction="row">
      <Box style={{ visibility: isRepeating ? 'hidden' : 'inline' }}>
        <Avatar />
      </Box>
      <Box
        background="light-2"
        pad="small"
        margin={{ left: 'medium' }}
        round={{
          size: 'medium',
        }}
      >
        <Text>{text}</Text>
      </Box>
    </Box>
  )
}

function Me({ text, isRepeating }) {
  return (
    <Box direction="row" align="end" justify="end">
      <Box
        background="light-2"
        pad="small"
        justify="end"
        margin={{ right: 'medium' }}
        round={{
          size: 'medium',
        }}
      >
        <Text>{text}</Text>
      </Box>

      <Box style={{ visibility: isRepeating ? 'hidden' : 'inline' }}>
        <Avatar />
      </Box>
    </Box>
  )
}
