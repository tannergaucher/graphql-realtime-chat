import React from 'react'
import { Button } from 'grommet'
import { ApolloConsumer } from 'react-apollo'

export default function Logout() {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          label="Log Out"
          color="light-2"
          onClick={() => {
            localStorage.clear()
            client.writeData({ data: { isLoggedIn: false } })
            client.resetStore()
          }}
        />
      )}
    </ApolloConsumer>
  )
}
