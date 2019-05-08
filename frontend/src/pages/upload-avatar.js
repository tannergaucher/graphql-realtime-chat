import React, { useState } from 'react'
import { Box, Heading, Button } from 'grommet'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { navigate } from '@reach/router'
import { useQuery } from 'react-apollo-hooks'
import { CURRENT_USER_QUERY } from '../containers/user'

const UPDATE_AVATAR_URL_MUTATION = gql`
  mutation UPDATE_AVATAR_URL_MUTATION($avatarUrl: String!) {
    updateAvatarUrl(avatarUrl: $avatarUrl) {
      id
      name
    }
  }
`

const URL = 'https://api.cloudinary.com/v1_1/tannergaucher/image/upload'

export default function UploadAvatar() {
  const [avatarUrl, setAvatarUrl] = useState('')

  const { data } = useQuery(CURRENT_USER_QUERY)

  async function uploadFile(e) {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'chatroom')

    const res = await fetch(URL, {
      method: 'POST',
      body: data,
    })

    const file = await res.json()
    setAvatarUrl(file.secure_url)
  }

  return (
    <Mutation mutation={UPDATE_AVATAR_URL_MUTATION} variables={{ avatarUrl }}>
      {updateAvatarUrl => (
        <Box>
          {data.me && (
            <Box animation="fadeIn">
              <Heading level={1}>Hey, {data.me.name}!</Heading>
            </Box>
          )}

          <Heading level={2}>
            Set your avatar image before getting started.
          </Heading>
          {avatarUrl && (
            <img src={avatarUrl} width="200px" alt="Upload preview" />
          )}
          <input
            type="file"
            name="file"
            placeholder="upload an image"
            onChange={uploadFile}
          />
          {avatarUrl && (
            <Button
              label="save avatar and continue"
              onClick={() => {
                updateAvatarUrl()
                navigate('/')
              }}
            />
          )}
          <Button
            label="Skip"
            plain
            margin="medium"
            onClick={() => navigate('/')}
          />
        </Box>
      )}
    </Mutation>
  )
}
