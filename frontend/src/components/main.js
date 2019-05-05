import React from 'react'
import { Box, TextInput } from 'grommet'
import { Router } from '@reach/router'

import Sidebar from '../components/sidebar'
import Chat from '../views/Chat'
import Chats from '../views/Chats'
import Contacts from '../views/Contacts'
import Login from '../views/login'

export default function main() {
  return (
    <Box direction="row" fill="vertical">
      {/* CONDITIONAL RENDER SIDEBAR */}
      <Sidebar />
      <Box basis="3/4" className="main-content" pad="small" fill="vertical">
        <Box overflow="scroll" fill="vertical">
          <Router>
            <Chat path="/" />
            <Chats path="/" />
            <Contacts path="/contacts" />
            <Login path="login" />
          </Router>
        </Box>
        {/* CONDITIONAL RENDER  SEARCH*/}
        <TextInput />
      </Box>
    </Box>
  )
}
