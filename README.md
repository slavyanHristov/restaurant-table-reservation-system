<h1 align="center">
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/rtrs.png" width="300" />
<br>
Restaurant Table Reservation System - RTRS
<br>
</h1>

<h4 align="center">Table reservation web app which could be applied in any restaurant</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a>
</p>

## Key Features

* Responsive UI
* Single Page Application (faster loading experience)
* Create new reservations
* Search for registered reservations in the system
* Register new restaurant tables by specifying name and table capacity
* View all reservations by chosen date
* Edit reservation details. ex. => Reservation Time, Reservation Date, Number of People
* Cancel a reservation
* Seat guests by accessing their registered reservation in the system and choosing free restaurant table
* Free a table when the reservation is done.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.JS](https://nodejs.org/en/download/), [MySQL](https://dev.mysql.com/downloads/mysql/) (needed since the application and the database aren't hosted currently)

```bash
# Clone this repository
$ git clone https://github.com/slavyanHristov/restaurant-table-reservation-system.git 

# Go into the repository
$ cd restaurant-table-reservation-system

# Install dependencies
$ npm install

# Run the app in production mode
$ npm run start:prod

# Run the app in development mode (nodemon dependency needed)
$ npm run start:dev
```