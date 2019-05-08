import React from 'react'
import { Box, Text, Heading } from 'grommet'

import Avatar from '../components/avatar'

export default function message({ avatarUrl, message, name }) {
  return (
    <Box
      margin={{ vertical: 'xsmall', horizontal: 'small' }}
      background="light-1"
      round="small"
      direction="row"
      pad="xsmall"
      align="center"
    >
      <Box>
        <Heading
          level={6}
          color="neutral-3"
          margin={{ bottom: 'xsmall', top: 'none' }}
        >
          {name}
        </Heading>
        <Avatar avatarUrl={avatarUrl} small />
      </Box>
      <Text margin={{ vertical: 'none', left: 'large' }}>{message}</Text>
    </Box>
  )
}
