import React from 'react'
import { Router } from '@reach/router'
import { Grommet, Box, ResponsiveContext } from 'grommet'

import ResponsiveGrid from '../components/styles/responsiveGrid'
import Header from './header'
import Bar from './bar'
import Sidebar from './sidebar'

import Chats from '../views/Chats'
import Chat from '../views/Chat'
import Contacts from '../views/Contacts'

import '../index.css'

export default function App() {
  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {size => (
          <ResponsiveGrid
            rows={['auto', '1fr', 'auto']}
            columns={['1fr', '3fr']}
            areas={{
              small: [
                { name: 'header', start: [0, 0], end: [1, 0] },
                { name: 'main', start: [0, 1], end: [1, 1] },
                { name: 'bar', start: [0, 2], end: [1, 2] },
              ],
              medium: [
                { name: 'header', start: [0, 0], end: [1, 0] },
                { name: 'sidebar', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] },
                { name: 'bar', start: [0, 2], end: [1, 2] },
              ],
            }}
            // style={{ height: '100%' }}
          >
            <Header />
            <Main />
            {size !== 'small' && <Sidebar />}
            <Bar />
          </ResponsiveGrid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

function Main() {
  return (
    <Box
      as="main"
      gridArea="main"
      fill="vertical"
      style={{ height: '100vh', overflow: 'scroll' }}
    >
      <Router>
        <Chats path="/chats" />
        <Chat path="/chat" />
        <Contacts path="/contacts" />
      </Router>
    </Box>
  )
}
