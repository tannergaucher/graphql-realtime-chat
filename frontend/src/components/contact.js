import React from 'react'
import { Box, Heading } from 'grommet'
import Avatar from '../components/avatar'

export default function contact({ name, avatarURL, isOnline }) {
  return (
    <Box
      direction="row"
      pad="small"
      align="center"
      border={{ color: 'light-2', side: 'bottom', size: 'xsmall' }}
    >
      <Avatar avatarURL={avatarURL} isOnline={isOnline} />
      <Heading level={4} margin={{ left: 'medium', vertical: 'none' }}>
        {name}
      </Heading>
    </Box>
  )
}
