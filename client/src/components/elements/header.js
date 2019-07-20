import React from 'react'
import { Box, Heading } from 'grommet'
import { Link } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'

import { Logout } from '../user'
import { IS_LOGGED_IN } from '../apollo/graphql'

export default function Header() {
  // prettier-ignore
  const { data: {isLoggedIn} } = useQuery(IS_LOGGED_IN)

  return (
    <Box pad="medium" direction="row" align="center" justify="between">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Brand />
      </Link>
      {isLoggedIn ? <Logout /> : <Login />}
    </Box>
  )
}

const Brand = () => (
  <Heading level={3} margin="none" color="dark-1">
    Realtime Chat App
  </Heading>
)

const Login = () => (
  <Link to="/login" style={{ textDecoration: 'none' }}>
    <Heading level={3} margin="none" color="neutral-2">
      Log In
    </Heading>
  </Link>
)
