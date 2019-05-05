import React from 'react'
import { Grommet, Box } from 'grommet'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import { client } from '../apollo/client'
import Main from '../components/main'
import Header from '../components/header'
import Login from '../containers/login'

export default function app() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Grommet>
          <Query query={IS_LOGGED_IN}>
            {({ data }) => (data.isLoggedIn ? <App /> : <Login />)}
          </Query>
        </Grommet>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`

const App = () => (
  <Box style={{ height: '100vh' }}>
    <Header />
    <Main />
  </Box>
)
