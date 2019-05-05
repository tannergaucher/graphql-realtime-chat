import React from 'react'
import Message from '../components/message'

export default function Chat() {
  return (
    <>
      <Message text="I'm a message" />
      <Message text="I'm a message from me" isMe />
      <Message text="Oh, really?" />
      <Message text="Oh, really?" isMe />
      <Message text="Yass" />
      <Message text="R U coming soon?" isRepeating />
      <Message text="I'm hungry" isRepeating />
      <Message text="On my way!" isMe />
    </>
  )
}
