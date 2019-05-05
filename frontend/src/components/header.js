import React from 'react'
import { Box, Heading } from 'grommet'
import { Link } from '@reach/router'

export default function header() {
  return (
    <Box pad="medium" direction="row" align="center" justify="between">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Heading level={3} margin="none" color="dark-1">
          Chat
        </Heading>
      </Link>

      <Link to="/contacts" style={{ textDecoration: 'none' }}>
        <Heading level={3} margin="none" color="dark-5">
          Contacts
        </Heading>
      </Link>
    </Box>
  )
}
