# Realtime Chat App Using GraphQL Subscriptions

## Using

- Apollo Client
- React Apollo Hooks Beta
- Cloudinary API
- GraphQL Yoga Server
- JWT Authentication
- Prisma Database Client

## Installation

### Run the server

`cd server && npm install`

Activate ENV variables file by deleting .sample prefix from `.env.sample`

Make sure Prisma CLI is installed globally

`npm install -g prisma`

Log in to your prisma account

`prisma login`

Deploy datamodel to a demo cloud server

`prisma deploy`

Tab down to select demo server and name the service

Start server

`npm start`

### Run the client

`cd client && npm install`

`npm start`

## Using the App

All users can view the chat stream, only authenticated users can send a message.
