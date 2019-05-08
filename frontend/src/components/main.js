import React from 'react'
import { Box } from 'grommet'
import { Router } from '@reach/router'

import Sidebar from '../components/sidebar'
import ChatPageContainer from '../containers/chat-page-container'
import SendMessageContainer from '../containers/send-message-container'
import UploadAvatar from '../pages/upload-avatar'
import Login from '../pages/login'

export default function main() {
  return (
    <Box direction="row" fill="vertical">
      <Sidebar />
      <Box basis="3/4" className="main-content" pad="small" fill="vertical">
        <Box overflow="scroll" fill="vertical">
          <Router>
            <ChatPageContainer path="/" />
            <Login path="login" />
            <UploadAvatar path="/upload-avatar" />
          </Router>
        </Box>
        <SendMessageContainer />
      </Box>
    </Box>
  )
}
