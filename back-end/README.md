<h1 align="center">RTRS Back-end</h1>

---

<p align="center">
    <a href="#project-structure">Project Structure</a> •
    <a href="#technologies">Technologies</a> •
    <a href="#Diagrams">Diagrams</a> •
    <a href="#api-documentation">API Documentation</a>
</p>

## Project Structure

```
back-end\
 |--config\            # Config module which calls given environment variables             
 |--logs\              # Log files             
 |--src\
    |--__tests__\         # Unit testing
    |--controllers\       # Route Handlers/Controllers for API endpoints
    |--DAOs\              # Data Access Objects (Layer for database querying)
    |--db\                # Sequelize ORM files (data layer)
       |--migrations\         # Sequelize database migrations
       |--models\             # Sequelize database models
       |--seeders\            # Sequelize database seeders
    |--middleware\        # Custom express middlewares
    |--routes\            # Definition of API endpoints
    |--services\          # Business logic
    |--utils\             # Helpers/Utility classes and functions
    |--app.js          # App entry point
 |--.env               # Environment variables
 |--.gitignore         # Tooling config file
 |--.sequelizerc       # Tooling config file
 |--package-lock.json  # Dependency managment
 |--package.json       # Dependency managment
 |--README.md          # About
 ```

 ## Technologies

 - **Relational Database**: [MySQL](https://mysql.com/)
 - **Runtime Environment**: [Node.js](https://nodejs.org/)
 - **Back-end Node.js framework**: [Express.js](https://expressjs.com/)
 - **Object-relational mapper (ORM)**: [Sequelize](https://sequelize.org/)
 - **Logging**: [winston](https://github.com/winstonjs/winston)
 - **Unit testing**: [Jest](https://jestjs.io/)
 - **Dependency managment**: [npm](https://npmjs.com/)
 - **Environment variables**: [dotenv](https://github.com/motdotla/dotenv)
 - **Cross-Origin Resource-Sharing**: [cors](https://github.com/expressjs/cors)


## Diagrams

### Entity Relationship Diagram

*Entity Relationship Diagram describes all relationships between tables within a database and also their column details.*

<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/erd-rtrs.png" />
<br>
<br>

The database has 3 tables.

Customers table holds all customers which have made reservations in the system. 
It has columns for: 
First Name, Last Name, Phone number, Email address.


Reservations table describes all registered reservations in the system.
It has columns for: 
Reservation Date, Reservation Time, Reservation Status,
Number of People and foreign key for customer.


Tables table describes all registered restaurant tables in the restaurant which the system manages.
It has columns for:
Table name, Table capacity (number of seats), Table status (is it occupied) and foreign key for reservation.


### Back-end Architecture

*The system uses Three-tier architecture which divides the system into three main layers.* 

*The first one is the API Layer which handles all Application Programming Interface logic such as API endpoint definitions, middleware functions, API endpoint/route handlers etc..*

*The second layer named "Service layer" handles all business logic.*

*The third layer "Data Access Layer" handles all logic which accomplishes communication between the database and the system.*

<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/backend-architecture.png" height="500"/>
<br>
<br>

## API Documentation