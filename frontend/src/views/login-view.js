import React from 'react'
import { Tabs, Tab, Box, Heading } from 'grommet'

import { Login, Signup } from '../components/user'

export default function login() {
  return (
    <Tabs>
      <Tab title="Log In">
        <Box pad="medium">
          <Heading>Login</Heading>
          <Login />
        </Box>
      </Tab>
      <Tab title="Sign Up">
        <Box pad="medium">
          <Heading>Create an account</Heading>
          <Signup />
        </Box>
      </Tab>
    </Tabs>
  )
}
