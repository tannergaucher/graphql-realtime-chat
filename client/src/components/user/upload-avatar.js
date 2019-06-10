import React, { useState } from 'react'
import { Box, Heading, Button } from 'grommet'
import { navigate } from '@reach/router'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { Error } from '../elements'
import {
  CURRENT_USER_QUERY,
  UPDATE_AVATAR_URL_MUTATION,
} from '../apollo/graphql'

const URL = 'https://api.cloudinary.com/v1_1/tannergaucher/image/upload'

export default function UploadAvatar() {
  const [avatarUrl, setAvatarUrl] = useState('')
  // prettier-ignore
  const { data: { me } } = useQuery(CURRENT_USER_QUERY)
  //   prettier-ignore
  const [updateAvatarUrl, {loading, error}] = useMutation(UPDATE_AVATAR_URL_MUTATION, {variables: {avatarUrl}})

  async function uploadFile(e) {
    const { files } = e.target
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
    <>
      {me && (
        <Box animation="fadeIn">
          <Heading level={1}>Hey, {me.name}!</Heading>
        </Box>
      )}
      <Heading level={2}>Set your profile image before entering</Heading>
      {avatarUrl && <img src={avatarUrl} width="200px" alt="Upload preview" />}
      {error && <Error error={error} />}
      <fieldset disabled={loading}>
        <form onSubmit={updateAvatarUrl}>
          <input
            type="file"
            name="file"
            placeholder="upload an image"
            onChange={uploadFile}
          />
          {avatarUrl && (
            <Button label="save avatar and continue" type="submit" />
          )}
        </form>
      </fieldset>
      <Button
        label="Skip Image Upload"
        plain
        margin="medium"
        onClick={() => navigate('/')}
      />
    </>
  )
}
