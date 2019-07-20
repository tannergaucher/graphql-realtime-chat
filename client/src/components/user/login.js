import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { Form, FormField, Button, Box } from 'grommet'
import { useMutation, useApolloClient } from '@apollo/react-hooks'

import { LOG_IN_MUTATION } from '../apollo/graphql'
import { Error } from '../elements'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { loading, error }] = useMutation(LOG_IN_MUTATION, {
    variables: { email, password },
  })
  const client = useApolloClient()

  return (
    <Box margin={{ vertical: 'large' }}>
      <Form
        onSubmit={async e => {
          // write user to store too
          client.writeData({ data: { isLoggedIn: true } })
          const res = await login()
          console.log(res)

          localStorage.setItem('token', res.data.login.token)
          navigate(`/`)
        }}
      >
        <Error error={error} />
        <FormField
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormField
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          label="Log in"
          disabled={loading}
          margin={{ vertical: 'large' }}
          fill
          primary
        />
      </Form>
    </Box>
  )
}
