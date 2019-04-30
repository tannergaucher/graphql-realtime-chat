import React from 'react'
import { Box } from 'grommet'

import Contact from '../components/contact'

// tabs: ALL | ONLINE |
export default function Contacts() {
  return (
    <Box>
      <Contact name="Tanner Gaucher" isOnline />
      <Contact name="Jo Ann Choo" />
      <Contact name="Sam Harris" />
      <Contact name="Eric Weinstien" isOnline />
      <Contact name="Jordan Peterson" />
      <Contact name="Joe Rogan" />
      <Contact name="Barack Obama" isOnline />
      <Contact name="Donald Trump" isOnline />
      <Contact name="Bill Clinton" />
      <Contact name="Jordan Peterson" />
      <Contact name="Joe Rogan" />
      <Contact name="Barack Obama" isOnline />
      <Contact name="Donald Trump" isOnline />
      <Contact name="Bill Clinton" />
    </Box>
  )
}
