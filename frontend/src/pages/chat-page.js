import React from 'react'
import { Box } from 'grommet'
import Message from '../components/message'

class ChatPage extends React.Component {
  componentWillMount() {
    this.props.subscribeToNewMessages()
  }

  render() {
    const { messages, loading } = this.props

    if (loading) return <p>Loading...</p>

    return (
      <Box background="" fill basis="3/4" pad="small">
        <Box overflow="scroll">
          {messages &&
            messages.map(message => (
              <Message
                key={message.id}
                message={message.message}
                avatarUrl={message.user.avatarUrl}
                name={message.user.name}
              />
            ))}
        </Box>
      </Box>
    )
  }
}

export default ChatPage
