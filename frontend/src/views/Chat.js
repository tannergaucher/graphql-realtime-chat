import React from 'react'
import { Box, TextInput } from 'grommet'

import Message from '../components/message'

export default function Chat() {
  return (
    <>
      <Box background="light-3" flex="grow" fill="vertical">
        <Message text="Hey man" />
        <Message text="Hey, hows is going?" isMe />
        <Message text="Going well" />
        <Message text="Want to eat go some ice cream" isRepeating />
        <Message text="I found a new place" isRepeating />
        <Message text="Yes, that sounds great" isMe />
        <Message text="let's go" isMe />
      </Box>
      <Send />
    </>
  )
}

function Send() {
  return (
    <Box style={{ position: 'sticky', bottom: 0 }}>
      <TextInput placeholder="Send" />
    </Box>
  )
}
