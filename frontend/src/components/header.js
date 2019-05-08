import React from 'react'
import { Box, Heading } from 'grommet'
import { Link } from '@reach/router'
import { useQuery } from 'react-apollo-hooks'

import Logout from '../containers/logout'
import { IS_LOGGED_IN } from './app'

export default function Header() {
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <Box pad="medium" direction="row" align="center" justify="between">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Brand />
      </Link>
      {data.isLoggedIn ? <Logout /> : <Login />}
    </Box>
  )
}

function Brand() {
  return (
    <Heading level={3} margin="none" color="dark-1">
      Chat App
    </Heading>
  )
}

const Login = () => (
  <Link to="/login" style={{ textDecoration: 'none' }}>
    <Heading level={3} margin="none" color="neutral-2">
      Log In
    </Heading>
  </Link>
)
