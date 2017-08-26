# This is a React App and a Koa RESTful API.

## how to setup
1. git clone
2. yarn
3. npm run server
4. open another cmd terminal and npm start

## React app
_______

### React - Redux - Socket.io-client/XHR

#### React is the SPA view framework

* SPAs are single page applications.  They serve a single webpage to the user that uses Javascript to get site data from an API.
This lets you update information live and the user's site experience requires no loading of new pages.

* View frameworks are varied, React is a very popular and hyped up open source one managed by Facebook.


#### Redux is the client side data management system

* Redux is the datastore.  It does actions on the data and moves it around and makes it available to React and passes it to the server.

#### Socket.io is the WebSocket library

* WebSocket's allow back and forth transmission of data between client and server and vice versa.  Its best for small transfers.


## KOA RESTful API
_______

### Koa - Socket.io - Mongoose - Passport

#### Koa is the NodeJS server HTTP middleware framework for NodeJS

* Koa lets us take http requests and other requests and serve stuff back that we set and decide on with JS.  
* Koa is very lightweight compared to Express and doesn't include anything out of the box.

#### Socket.io is the WebSocket library

* Socket.io has a server-side part to interact with the client.

#### Mongoose is our Mongo ORM

* Mongoose communicates with our Mongo database which is a doc-store style db, which means we don't have to do much if we want to change our database setup

#### Passport is our authentication management

* Passport is pretty much the best authentication system afaik.

## Discord Bot
_______

### Made with Discord.js
- [https://github.com/hydrabolt/discord.js/](https://github.com/hydrabolt/discord.js/)

#### Running
 - Clone the repo
 - `npm install` dependencies
 - Configure MongoDB, bot api token
 - Run `node discord/index.js`
