import React from 'react'
import { Box, TextInput, Heading } from 'grommet'

export default function sidebar() {
  return (
    <Box basis="1/4" className="side-bar" pad="small" background="light-1">
      <TextInput />

      <Box overflow="scroll" margin={{ vertical: 'small' }}>
        <Heading level={4}>Online Users</Heading>
        <Heading level={4}>All Users</Heading>
      </Box>
    </Box>
  )
}
