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
  <a href="#credits">Credits</a> •
  <a href="#extra">Extra</a> •
  <a href="#contact">Contact</a>
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
* Free a table when given reservation is complete.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/), [MySQL](https://dev.mysql.com/downloads/mysql/) (needed since the application and the database aren't hosted currently)

```bash
# Clone this repository
$ git clone https://github.com/slavyanHristov/restaurant-table-reservation-system.git 

# Go into the repository
$ cd restaurant-table-reservation-system

# Install dependencies
$ npm install

# Create environment variables file
$ cd ./backend && touch .env

# Add environment variables to the file
$ echo "DB_USERNAME=<your_db_username> DB_PASSWORD=<your_db_password> DB_NAME=rtrs_db DB_HOST=localhost DB_DIALECT=mysql DB_PORT=3306 PORT=5000" >> .env

# Run the app in production mode
$ npm run start:prod

# Run the app in development mode (nodemon dependency needed)
$ npm run start:dev
```

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Vue.js](https://vuejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Extra

* [Front-end README](https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/front-end/README.md)
* [Back-end README](https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/back-end/README.md)

## Contact
 > **Note**
 > If any issues are encountered or you want to collaborate with me on developing further the project please contact me at:

 ---

 > GitHub [@slavyanHristov](https://github.com/slavyanHristov) &nbsp;&middot;&nbsp;
 > Gmail slavqnhristov@gmail.com &nbsp;&middot;&nbsp;
 > ABV slavqn99@abv.bg (for bulgarian audience)