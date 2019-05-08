import React from 'react'
import { Box, Stack } from 'grommet'

export default function avatar({ avatarUrl, isOnline, small }) {
  return (
    <Stack anchor="bottom-right">
      <img
        src={avatarUrl}
        alt="user avatar"
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
