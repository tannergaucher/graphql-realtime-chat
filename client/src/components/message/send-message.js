import React, { useState } from 'react'
import { Form, TextInput } from 'grommet'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { IS_LOGGED_IN, SEND_MESSAGE_MUTATION } from '../apollo/graphql'

export default function SendMessage() {
  const [message, setMessage] = useState('')
  // prettier-ignore
  const { data: {isLoggedIn}, loading } = useQuery(IS_LOGGED_IN)
  const [sendMessage, { error }] = useMutation(SEND_MESSAGE_MUTATION, {
    variables: { message },
  })

  // remove?
  if (loading) return <p>loading...</p>

  return (
    <Form
      onSubmit={() => {
        sendMessage()
        setMessage('')
      }}
    >
      <TextInput
        value={message}
        onChange={e => setMessage(e.target.value)}
        disabled={!isLoggedIn}
      />
    </Form>
  )
}
