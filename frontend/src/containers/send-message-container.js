import React, { useState } from 'react'
import { Form, TextInput } from 'grommet'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { useQuery } from 'react-apollo-hooks'

import { IS_LOGGED_IN } from '../components/app'

const SEND_MESSAGE_MUTATION = gql`
  mutation SEND_MESSAGE_MUTATION($message: String!) {
    sendMessage(message: $message) {
      id
      message
    }
  }
`

export default function SendMessage() {
  const [message, setMessage] = useState('')

  const { data, loading } = useQuery(IS_LOGGED_IN)

  if (loading) return

  return (
    <Mutation
      mutation={SEND_MESSAGE_MUTATION}
      variables={{
        message,
      }}
    >
      {sendMessage => (
        <Form
          onSubmit={() => {
            sendMessage()
            setMessage('')
          }}
        >
          <TextInput
            value={message}
            onChange={e => setMessage(e.target.value)}
            disabled={!data.isLoggedIn}
          />
        </Form>
      )}
    </Mutation>
  )
}
