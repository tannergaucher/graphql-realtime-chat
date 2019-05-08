import React from 'react'
import { Query } from 'react-apollo'
import ChatPage from '../pages/chat-page'
import gql from 'graphql-tag'

const ALL_MESSAGES_QUERY = gql`
  query ALL_MESSAGES_QUERY {
    messages {
      id
      message
      user {
        id
        name
        avatarUrl
      }
    }
  }
`

const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription NEW_MESSAGES_SUBSCRIPTION {
    messageSent {
      id
      message
      user {
        id
        name
        avatarUrl
      }
    }
  }
`

export default function chatPageContainer() {
  return (
    <Query query={ALL_MESSAGES_QUERY}>
      {({ subscribeToMore, data, loading }) => (
        <ChatPage
          {...data}
          loading={loading}
          subscribeToNewMessages={() => {
            return subscribeToMore({
              document: NEW_MESSAGES_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev

                const newMessage = subscriptionData.data.messageSent

                return { messages: [...prev.messages, newMessage] }
              },
            })
          }}
        />
      )}
    </Query>
  )
}
