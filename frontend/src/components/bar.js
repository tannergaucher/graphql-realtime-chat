import React from 'react'
import { Box, Button } from 'grommet'
import { Chat, Group, Compass } from 'grommet-icons'
import { navigate } from '@reach/router'

export default function BottomBar() {
  return (
    <Box
      direction="row"
      justify="around"
      gridArea="bar"
      background="light-1"
      style={{ position: 'sticky', bottom: '0' }}
    >
      <Button icon={<Chat />} onClick={() => navigate('/chat/')} />
      <Button icon={<Group />} onClick={() => navigate(`/chats`)} />
      <Button icon={<Compass />} onClick={() => navigate(`/contacts`)} />
    </Box>
  )
}
