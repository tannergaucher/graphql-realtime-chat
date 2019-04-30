import React from 'react'
import { Box, Heading, Text, TextInput } from 'grommet'

import Avatar from '../components/avatar'

export default function sidebar() {
  return (
    <Box
      background="accent-1"
      style={{
        position: 'sticky',
        top: 0,
        overflow: 'scroll',
      }}
    >
      <SearchInput />
      <ChatPreview name="Tranner Graucher" isOnline message="Hey what's up?" />
      <ChatPreview
        name="Rumble Dillskin"
        isOnline
        message="RU up?"
        isReciever
        isUnread
      />
      <ChatPreview
        name="Notreal Person"
        message="Shin Ciao, hermao..."
        isUnread
      />
      <ChatPreview name="Some Friend's Name" />
      <ChatPreview name="Tranner Graucher" isOnline />
      <ChatPreview name="Rumble Dillskin" isOnline />
      <ChatPreview name="Notreal Person" isUnread />
      <ChatPreview name="Some Friend's Name" isReciever isUnread />
      <ChatPreview name="Tranner Graucher" isOnline />
      <ChatPreview name="Rumble Dillskin" isOnline />
      <ChatPreview name="Notreal Person" />
      <ChatPreview name="Some Friend's Name" />
    </Box>
  )
}

function ChatPreview({ name, message, isOnline, isUnread, isReciever }) {
  return (
    <Box background="light-1" pad="xsmall" direction="row" align="center">
      <Avatar isOnline={isOnline} />

      <Box direction="row" fill="horizontal" justify="between" align="center">
        <Box margin={{ left: 'xsmall' }}>
          <Heading level={4} margin="none" alignSelf="start">
            {name}
          </Heading>
          <Text size="xsmall">{message}</Text>
        </Box>
        {isReciever && isUnread && <UnreadDot />}
        {!isReciever && isUnread && <MiniAvatar />}
      </Box>
    </Box>
  )
}

function SearchInput() {
  return (
    <Box margin="small" background="light-2">
      <TextInput placeholder="Search" round="medium" />
    </Box>
  )
}

function UnreadDot() {
  return (
    <Box
      margin="small"
      background="accent-2"
      style={{
        height: '8px',
        width: '8px',
        borderRadius: '50%',
      }}
    />
  )
}

function MiniAvatar() {
  return (
    <Box
      margin="small"
      background="dark-2"
      style={{
        height: '8px',
        width: '8px',
        borderRadius: '50%',
      }}
    />
  )
}
