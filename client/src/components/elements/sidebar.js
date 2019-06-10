import React from 'react'
import { Box, TextInput, Heading } from 'grommet'

export default function Sidebar() {
  return (
    <Box basis="1/4" className="side-bar" pad="small" background="light-1">
      {/* TODO SEARCH */}
      <TextInput />
      <Box overflow="scroll" margin={{ vertical: 'small' }}>
        <Heading level={4}>Online Users</Heading>
        <Heading level={4}>All Users</Heading>
      </Box>
    </Box>
  )
}
