# This is a React App and a Koa RESTful API.

## how to setup
1. git clone
2. yarn
3. npm run server
4. open another cmd terminal and npm start

## React app
_______

### React - Redux - Socket.io-client/XHR

- React is the SPA view framework

* SPAs are single page applications.  They serve a single webpage to the user that uses Javascript to get site data from an API.
This lets you update information live and the user's site experience requires no loading of new pages.

* View frameworks have many different kinds, React is a very popular and hyped up one managed by Facebook.


- Redux is the data management store thingy

* Redux is the thing in between React and the data.  It does actions on the data and moves it around and makes it available to React and passes it to the server.
You can think of it as a data service that is available across the entire site and maintains the same data store across different pages


- Socket.io is the WebSocket library

* WebSocket's allow close to real time transmission of data.  It'll be how we do chat and comments on the site.


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
