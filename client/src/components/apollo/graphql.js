import gql from 'graphql-tag'

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    name
    avatarUrl
    messages {
      id
      message
    }
  }
`

export const MESSAGE_FRAGMENT = gql`
  fragment MessageFragment on Message {
    id
    message
    user {
      id
      email
      name
      avatarUrl
    }
  }
`

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`

export const ALL_MESSAGES_QUERY = gql`
  query ALL_MESSAGES_QUERY {
    messages {
      ...MessageFragment
    }
  }
  ${MESSAGE_FRAGMENT}
`

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription NEW_MESSAGES_SUBSCRIPTION {
    messageSent {
      ...MessageFragment
    }
  }
  ${MESSAGE_FRAGMENT}
`

export const SEND_MESSAGE_MUTATION = gql`
  mutation SEND_MESSAGE_MUTATION($message: String!) {
    sendMessage(message: $message) {
      ...MessageFragment
    }
  }
  ${MESSAGE_FRAGMENT}
`

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const LOG_IN_MUTATION = gql`
  mutation LOG_IN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const UPDATE_AVATAR_URL_MUTATION = gql`
  mutation UPDATE_AVATAR_URL_MUTATION($avatarUrl: String!) {
    updateAvatarUrl(avatarUrl: $avatarUrl) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`
