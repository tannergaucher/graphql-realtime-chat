import React from 'react'
import { Button } from 'grommet'
import { useApolloClient } from '@apollo/react-hooks'

export default function Logout() {
  const client = useApolloClient()

  return (
    <Button
      label="Log Out"
      color="light-2"
      onClick={() => {
        localStorage.clear()
        // necessary? gets set to false on reset?
        client.writeData({ data: { isLoggedIn: false } })
        client.resetStore()
      }}
    />
  )
}
