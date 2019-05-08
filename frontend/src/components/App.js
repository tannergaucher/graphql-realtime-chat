import React from 'react'
import { Grommet, Box } from 'grommet'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import gql from 'graphql-tag'

import { client } from '../apollo/client'
import Main from '../components/main'
import Header from '../components/header'

const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`

export default function app() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Grommet>
          <App />
        </Grommet>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

const App = () => (
  <Box style={{ height: '100vh' }}>
    <Header />
    <Main />
  </Box>
)

export { IS_LOGGED_IN }
