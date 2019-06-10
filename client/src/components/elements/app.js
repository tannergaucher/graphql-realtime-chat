import React from 'react'
import gql from 'graphql-tag'
import { Box } from 'grommet'

import { Header, Main } from '.'

export default function App() {
  return (
    <Box style={{ height: '100vh' }}>
      <Header />
      <Main />
    </Box>
  )
}
