import React from 'react'
import { Box, Stack } from 'grommet'

export default function avatar({ avatarURL, isOnline, small }) {
  return (
    <Stack anchor="bottom-right">
      <Box
        background="neutral-3"
        style={{
          height: small ? '30px' : '50px',
          width: small ? '30px' : '50px',
          borderRadius: '50%',
        }}
      />
      {isOnline && (
        <Box
          background={isOnline ? 'accent-1' : 'light-4'}
          style={{
            height: small ? '8px' : '15px',
            width: small ? '8px' : '15px',
            borderRadius: '50%',
          }}
        />
      )}
    </Stack>
  )
}
