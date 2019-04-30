import React from 'react'
import { Box, Heading, ResponsiveContext } from 'grommet'
import { Location } from '@reach/router'

export default function header() {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Location>
          {props => (
            <Box
              background="light-1"
              gridArea="header"
              border="bottom"
              style={{ position: 'sticky', top: 0, zIndex: 1 }}
            >
              <Heading level={4} margin="medium">
                Chat
              </Heading>
            </Box>
          )}
        </Location>
      )}
    </ResponsiveContext.Consumer>
  )
}
