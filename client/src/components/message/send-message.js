import React, { useState } from 'react'
import { Form, TextInput } from 'grommet'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { Error } from '../elements'
import { IS_LOGGED_IN, SEND_MESSAGE_MUTATION } from '../apollo/graphql'

export default function SendMessage() {
  const [message, setMessage] = useState('')
  // prettier-ignore
  const { data: {isLoggedIn}, loading } = useQuery(IS_LOGGED_IN)

  const [sendMessage, { error }] = useMutation(SEND_MESSAGE_MUTATION, {
    variables: { message },
  })

  if (loading) return <p>loading...</p>
  if (error) return <Error error={error} />

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
