import React from 'react'
import { Box, Heading } from 'grommet'
import Avatar from '../components/avatar'

//  isOnline && stack green circle
export default function contact({ name, avatarURL, isOnline }) {
  return (
    <Box
      direction="row"
      background="light-2"
      pad="small"
      align="center"
      border={{ color: 'accent-2', side: 'bottom', size: 'xsmall' }}
    >
      <Avatar avatarURL={avatarURL} isOnline={isOnline} />
      <Heading level={4} margin={{ left: 'medium', vertical: 'none' }}>
        {name}
      </Heading>
    </Box>
  )
}
