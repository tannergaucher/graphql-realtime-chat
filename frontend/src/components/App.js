import React from 'react'
import { Grommet, Box } from 'grommet'

import Main from '../components/main'
import Header from '../components/header'

export default function App() {
  return (
    <Grommet>
      <Box style={{ height: '100vh' }}>
        <Header />
        <Main />
      </Box>
    </Grommet>
  )
}
