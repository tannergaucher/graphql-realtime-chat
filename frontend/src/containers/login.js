import React, { useState } from 'react'
import { Form, FormField, Button, Box } from 'grommet'
import { Mutation, ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import { navigate } from '@reach/router'

import Error from '../components/error'

const LOG_IN_MUTATION = gql`
  mutation LOG_IN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export default function Login() {
  const [values, setValues] = useState({ email: '', password: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <ApolloConsumer>
      {client => (
        <Box margin={{ vertical: 'large' }}>
          <Mutation mutation={LOG_IN_MUTATION} variables={values}>
            {(login, { loading, error }) => (
              <Form
                onSubmit={async e => {
                  // client.resetStore()
                  client.writeData({ data: { isLoggedIn: true } })
                  const res = await login()
                  localStorage.setItem('token', res.data.login.token)
                  navigate(`/`)
                }}
              >
                <Error error={error} />
                <FormField
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <FormField
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
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
            )}
          </Mutation>
        </Box>
      )}
    </ApolloConsumer>
  )
}
