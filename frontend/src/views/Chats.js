import React from 'react'
import { Box, Heading } from 'grommet'
import { Location } from '@reach/router'

export default function chats() {
  return (
    <Location>
      {props => (
        <Box>
          <Heading level={3}>Chats</Heading>
        </Box>
      )}
    </Location>
  )
}
