# JUKBOX

Jukbox is an application that takes the traditional concept of a music jukebox and transforms it into a digital experience.

A venue can host a centralized playlist to which users can add songs via their phones. Songs can be “promoted” to the top of the queue through the purchase of diamonds, which upgrade the song’s position.


## Screenshots

<p align="center">
  <img width="270" height="437" src="https://northern-lights.fr/images/jukbox-user1.png">
  <img width="270" height="437" src="https://northern-lights.fr/images/jukbox-player.png">
  <img width="270" height="437" src="https://northern-lights.fr/images/jukbox-user2.png">
</p>

## Details

Venues can connect to Jukbox by logging in with their Spotify premium credentials. Then it's as simple as pressing play to 
start hosting the music.


Users can then join a venue by logging in with a Google Account. Upon a successful connection, tickets are issued to each
user that can be redeemed for a song pick. 


As songs are requested, they get added to the bottom of the playlist. However, a user can opt to move a given song to 
the top of the list, by spending 'diamonds' which determine the order of the songs. Diamonds can be purchased through
Stripe, and are stored in the user's account.


## Getting Started

This repo is the Front End of the application
Access the Back End [here](https://github.com/Do0oV/jukbox-be)


### Prerequisites
* Node 
* NPM
* PostgreSQL
* Spotify API Key & Premium Account
* Google API Key
* Stripe API Key


### Installing

1. Clone both the __Jukbox__ [frontend](https://github.com/Do0oV/jukbox-fe) and [backend](https://github.com/Do0oV/jukbox-be)
2. Install dependencies in both the `client` and the `server` folders by running:
```
npm install
```
3. Create a __.env__ file by following the provided __.env.example__

## To start 

For the frontend run
```
npm start
```
For the backend run
```
npm run db:setup
npm run dev
```

## Tech Stack

* [React](https://reactjs.org/) - Frontend Framework
* [Redux](https://redux.js.org/) - State Management
* [Express](https://expressjs.com/) - Backend Framework 
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Socket.io](https://socket.io/) - Web Sockets
* [Google Authentication](https://developers.google.com/identity/protocols/OAuth2)
* [Spotify API](https://developer.spotify.com/)
* [Stripe](https://stripe.com/docs) - Payment Processor

## Contributors 

* Tom Belton [GitHub](https://github.com/whenmoon) - [LinkedIn](https://www.linkedin.com/in/tom-belton-6193a3168/)
* Jozef Kysel [GitHub](https://github.com/JozefKysel) - [LinkedIn](https://www.linkedin.com/in/jozef-kysel-382ba6182)
* Katie Ramiré [GitHub](https://github.com/kramire) - [LinkedIn](https://www.linkedin.com/in/kramire/)
* Leander Rysanek [GitHub](https://github.com/leandroviajando)
* Matthew Tregear [GitHub](https://github.com/matthewtregg)
* Dorothée Viard [GitHub](https://github.com/Do0oV) - [LinkedIn](https://www.linkedin.com/in/dorotheeviard)
