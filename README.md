# Realtime Chat App Using GraphQL Subscriptions

## Stack

- Apollo Client
- React Apollo
- GraphQL Yoga Server
- JWT Authentication
- Prisma Database Layer

## Installation

### Run the backened

`cd backend && npm install`

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

### Run the frontend

`cd frontend && npm install`

`npm start`

## Using the App

All users can view the chat stream, only authenticated users can send a message.
