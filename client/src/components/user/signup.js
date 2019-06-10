import React, { useState } from 'react'
import { Form, FormField, Button, Box } from 'grommet'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { navigate } from '@reach/router'

import { Error } from '../elements'
import { SIGN_UP_MUTATION } from '../apollo/graphql'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [signup, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: { email, password, name },
  })
  const client = useApolloClient()

  return (
    <Box margin={{ vertical: 'large' }}>
      <Form
        onSubmit={async e => {
          const res = await signup()
          // also write user to cache here
          client.writeData({ data: { isLoggedIn: true } })
          localStorage.setItem('token', res.data.signup.token)
          navigate(`/upload-avatar`)
        }}
      >
        <Error error={error} />
        <FormField
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormField
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <FormField
          name="name"
          type="text"
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button
          type="submit"
          label="Sign up"
          disabled={loading}
          margin={{ vertical: 'large' }}
          primary
          fill
        />
      </Form>
    </Box>
  )
}
