import React from 'react'
import { Box, TextInput } from 'grommet'
import { Router } from '@reach/router'

import Sidebar from '../components/sidebar'
import Message from '../components/message'
import Chat from '../views/Chat'
import Chats from '../views/Chats'
import Contacts from '../views/Contacts'

export default function main() {
  return (
    <Box direction="row" fill="vertical">
      <Sidebar />
      <Box basis="3/4" className="main-content" pad="small" fill="vertical">
        <Box overflow="scroll" fill="vertical">
          <Router>
            <Chat path="/" />
            <Chats path="/" />
            <Contacts path="/contacts" />
          </Router>
        </Box>
        <TextInput />
      </Box>
    </Box>
  )
}
