<h1 align="center">RTRS Front-end built with Vue.JS 3
</h1>

---

<p align="center">
    <a href="#project-structure">Project Structure</a> •
    <a href="#sitemap">Sitemap</a> •
    <a href="#user-documentation">User Documentation</a>
</p>

## Project Structure

```
front-end\
 |--public\             
 |--src\
    |--assets\       # Images, stylesheets
    |--components\   # UI components (.vue files)
    |--router\       # Route definitions
    |--services\     # AJAX services
    |--utils\        # Helper modules
    |--views\        # Webpages (page-level components)
    |--App.vue       # Root vue component
    |--main.js       # App entry point
 |--index.html          # HTML entry point
 |--.gitignore          # Tooling config file
 |--.eslintrc.cjs       # Tooling config file
 |--.prettierrc.json    # Tooling config file
 |--jsconfig.json       # Config file
 |--vite.config.js      # Config file
 |--package-lock.json   # Dependency managment
 |--package.json        # Dependency managment
 |--README.md           # About
 ```

## Sitemap
*Displays all pages in the web app and their hierrarchy.*

<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/sitemap.png" />
<!-- Apply width? -->

## User Documentation

### Home

*Entry point of the web application.*

<summary>URL: <code>http://localhost:3000/</code></summary>

#### Desktop
<br> 
<br> 
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/home/home-desktop.png" width="800" /> 
<br>   

#### Mobile

<br>  
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/home/home-mobile.png" height="500" /> 
<br> 

#### Mobile Navigation Menu

<br>   
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/home/home-mobile-menu.png" height="500" />

### Add Table

*The add table page contains a form for registering new restaurant tables in the system. All fields contain validations for wrong input from the user.*

<summary>URL: <code>http://localhost:3000/add-table</code></summary>

<br>

#### Desktop

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/add-tables/add-table-desktop.png" width="800" />
<br> 

#### Mobile

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/add-tables/add-table-mobile.png" height="500"/>

### Search

*The search page displays all pending reservations in the system and user can search for specific reservations by entering keywords in the search box. Search can be performed by all criteria (by name, email, reservation date, time etc..*

<summary>URL: <code>http://localhost:3000/search</code></summary>


<br>

#### Desktop

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/search/search-desktop.png" width="800" />
<br> 

#### Mobile

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/search/search-mobile.png" height="500"/>

### New Reservation

*The new reservation page has a form which requires all data needed from the user to register his reservation. All fields have specific data validations. For example User cannot make a reservation with date and time which is in the past. Upon error encountered, message is displayed which informs for the specific error.*

<summary>URL: <code>http://localhost:3000/new-reservation</code></summary>


<br>

#### Desktop

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/new-reservation/new-reservation-desktop.png" width="800" />
<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/new-reservation/new-reservation-desktop2.png" width="800" />
<br>
<br>

On entered incorrect data:
<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/new-reservation/new-reservation-validation1.png" width="800" />
<br>

#### Mobile

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/new-reservation/new-reservation-mobile.png" height="500"/>

### Reservations

*The reservations page displays all reservations for a specific day. The user has the ability to move forward, backwards or to current day. From this page the user can also perform specific actions such as: edit reservation, seat at a table, and cancel reservation. In this page all registered restaurant tables are outputed with their name and capacity. If a table is occupied, the system gives the ability to free the given table and to be able to be reserved once again.*

<summary>URL: <code>http://localhost:3000/reservations</code></summary>

#### Desktop - Part 1

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/reservations/reservations-desktop.png" width="800" />
<br>

#### Desktop - Part 2

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/reservations/reservations-desktop2.png" width="800" />
<br>

#### Mobile - Part 1

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/reservations/reservations-mobile.png" height="500"/>
<br>

#### Mobile - Part 2

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/reservations/reservations-mobile2.png" height="500"/>
<br>
<br>
<b>Choose Table</b> - This popup window has a dropdown menu which contains all restaurant tables which are NOT occupied. When a table is chosen an validation is performed which checks if the given reservation's number of people is greater than the capacity of the table and also if the reservation's date is not for today, an error is return which informs the user that a table for the reservation can be chosen on the specific date of the reservation.
<br>
<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/reservations/reservations-choose-table-desktop.png" width="800" />
<br>
<br>
<b>Edit Reservation</b> - All data for the specific reservation is loaded upon mounting the popup window in their respective input field. The Popup dialog box has tree fields (reservation date, reservation time and number of people).
Each of the fields have their needed validations. Upon error free data sent, the server performs update query to the database and the record is updated successfully.
<br>
<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/reservations/reservations-edit-desktop.png" width="800" />

### Not found page (404)
*This page is displayed when unregistered/wrong URL is entered in the address bar by the user.*
<br>

#### Desktop

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/not-found/not-found-desktop.png" width="800" />
<br>

#### Mobile

<br>
<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/not-found/not-found-mobile.png" height="500"/>