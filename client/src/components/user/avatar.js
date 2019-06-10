import React from 'react'
import { Box, Stack } from 'grommet'

export default function avatar({ avatarUrl, isOnline, small }) {
  return (
    <Stack anchor="bottom-right" style={{ margin: 'none' }}>
      {avatarUrl ? (
        <AvatarImage small={small} avatarUrl={avatarUrl} />
      ) : (
        <NoAvatar small={small} />
      )}
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

function AvatarImage({ small, avatarUrl }) {
  return (
    <img
      src={avatarUrl}
      alt="user avatar"
      style={{
        height: small ? '30px' : '45px',
        width: small ? '30px' : '45px',
        borderRadius: '50%',
      }}
    />
  )
}

function NoAvatar({ small }) {
  return (
    <Box
      background="dark-1"
      style={{
        height: small ? '30px' : '45px',
        width: small ? '30px' : '45px',
        borderRadius: '50%',
      }}
    />
  )
}
