import React from 'react'
import { Box } from 'grommet'
import { Router } from '@reach/router'

import { Sidebar } from '.'
import { SendMessage } from '../message'
import { ChatView, LoginView, UploadAvatarView } from '../../views'

export default function Main() {
  return (
    <Box direction="row" fill="vertical">
      <Sidebar />
      <Box basis="3/4" className="main-content" pad="small" fill="vertical">
        <Box overflow="scroll" fill="vertical">
          <Router>
            <ChatView path="/" />
            <LoginView path="login" />
            <UploadAvatarView path="/upload-avatar" />
          </Router>
        </Box>
        <SendMessage />
      </Box>
    </Box>
  )
}
