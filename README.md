# Student Register.

## About Student Register

**Student Register** is a full-stack application, built with PostgreSQL, Express, React and Node.js, which 
simulates a students register.
The user can create students, edit and delete students.


## How to run

* Clone the project - git clone https://github.com/emilyjspencer/Student-Register.git
* Cd into the repo
* Install Node if you don't have it. Use the package manager Homebrew if you are a Mac user, by running:
```html
brew install node
```
* Install PostgreSQL if you don't have it. Use the package manager Homebrew if you are a Mac user, by running:
```html
brew install postgresql
```
* Run the following to install the dependencies:
```html
npm install
```
* Cd into the server folder
* Connect to PostgreSQL by running:
```html
psql postgres
```
* Run the SQL queries that can be found in the database.sql file, to create the Register database and the students table
* Run the following to start the server
```html
node app.js
``` 
* Open a second terminal and cd into the client folder
* Run
```html
npm start
```
* The application should automatically open in the browser



## Built with

* PostgreSQL
* Express
* React
* Node.js
* CSS


## What it looks like 

![output](homepage.png)
![output](edit.png)
