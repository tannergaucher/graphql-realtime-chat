import React from 'react'
import { Grid, ResponsiveContext } from 'grommet'

const ResponsiveGrid = ({ children, areas, ...props }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Grid areas={areas[size]} {...props}>
        {children}
      </Grid>
    )}
  </ResponsiveContext.Consumer>
)

export default ResponsiveGrid
