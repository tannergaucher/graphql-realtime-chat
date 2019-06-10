import gql from 'graphql-tag'

// USER FRAGMENT
// MESSAGE FRAGMENT

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      name
      email
      avatarUrl
    }
  }
`

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`

export const ALL_MESSAGES_QUERY = gql`
  query ALL_MESSAGES_QUERY {
    messages {
      id
      message
      user {
        id
        name
        avatarUrl
      }
    }
  }
`

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription NEW_MESSAGES_SUBSCRIPTION {
    messageSent {
      id
      message
      user {
        id
        name
        avatarUrl
      }
    }
  }
`

export const SEND_MESSAGE_MUTATION = gql`
  mutation SEND_MESSAGE_MUTATION($message: String!) {
    sendMessage(message: $message) {
      id
      message
    }
  }
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
        id
      }
    }
  }
`

export const LOG_IN_MUTATION = gql`
  mutation LOG_IN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export const UPDATE_AVATAR_URL_MUTATION = gql`
  mutation UPDATE_AVATAR_URL_MUTATION($avatarUrl: String!) {
    updateAvatarUrl(avatarUrl: $avatarUrl) {
      id
      name
    }
  }
`
