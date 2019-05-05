import React from 'react'
import { Box, TextInput } from 'grommet'

import ChatPreview from '../components/chat-preview'

export default function sidebar() {
  return (
    <Box basis="1/4" className="side-bar" pad="small" background="light-1">
      <TextInput />

      <Box overflow="scroll" margin={{ vertical: 'small' }}>
        {/* MOCK CHATS */}
        <ChatPreview
          name="Tasner Grsaucher"
          message="hell, oh world"
          isOnline
          isReciever
          isUnread
        />

        <ChatPreview
          name="Tucker Kaarlson"
          message="Ich haben die ice cream"
          isOnline
        />

        <ChatPreview
          name="Tasner Grsaucher"
          message="hell, oh world"
          isReciever
          isUnread
        />

        <ChatPreview
          name="Joe Rogaan"
          message="hell, oh world"
          isOnline
          isUnread
        />

        <ChatPreview
          name="Tucker Kaarlson"
          message="Ich haben die ice cream"
          isOnline
        />

        <ChatPreview
          name="Tasner Grsaucher"
          message="hell, oh world"
          isReciever
          isUnread
        />

        <ChatPreview
          name="Tasner Grsaucher"
          message="hell, oh world"
          isReciever
          isUnread
        />

        <ChatPreview
          name="Joe Rogaan"
          message="hell, oh world"
          isOnline
          isUnread
        />

        <ChatPreview
          name="Joe Rogaan"
          message="hell, oh world"
          isOnline
          isUnread
        />

        <ChatPreview
          name="Tasner Grsaucher"
          message="hell, oh world"
          isReciever
          isUnread
        />

        <ChatPreview
          name="Joe Rogaan"
          message="hell, oh world"
          isOnline
          isUnread
        />

        <ChatPreview name="Joe Rogaan" message="sup dude" isOnline />
        {/* END MOCK CHATS */}
      </Box>
    </Box>
  )
}
