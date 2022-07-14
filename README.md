  

# Carpe Diem Calendar App [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description

Users will be able to plan out their day using our application. Users can create an event and assign a date and add info to the event. Users will also be able to view upcoming events.

# Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [API Documentation](#api-documentation)

* [Application Flow](#application-flow)

* [App Demo](#app-demo)

* [Database Information](#database)

* [Licensing](#licensing)

* [Contributors](#contributors)

* [Test](#test)

* [Questions](#questions)

# Installation

The following must be installed to run the app locally. 

- Node JS
- Express JS
- Handlebars JS
- Nodemon (optional)
- Sequelize

# Usage

Users create event, add information about the event, and then chooses date and submits. Users can view upcoming scheduled events daily.

**APP Demo:** https://evening-sea-69170.herokuapp.com/homepage

# API Documentation
### Endpoints
To push requests to our API routes, you will need to send requests with a JSON body.  We are employing different routes to handle different data elements of our API. 

#### User Routes
##### Authentication Route: 
This API route allows us to authenticate a user. 

```
POST {{baseURL}}/api/users/sign_in
Body ==> 
{
	"email": "someUser@email.com",
	"password": "somePassword"
}
```

##### User Creation Route:
This API route allows us to create a brand new user. 
```
POST {{baseURL}}/api/users/sign_up
Body ==> 
{
	"firstName": "someFirstName",
	"lastName": "someLastName",
	"email": "someUser@email.com",
	"password": "somePassword"
}
```

##### User Reset Password Route:
This API route allows us to let a user reset their credentials. 

```
PUT {{baseURL}}/api/users/reset_password
Body ==> 
{
	"email": "someUser@email.com",
	"password": "somePassword"
}
```

##### User Logout Route: 
This API route allows us to purge a sign in session. Logs out the user. 

```
POST {{baseURL}}/users/logout
```


#### Display Routes
All of our display routes are handled using "GET" requests. The following display routes are available. 

```
GET {{baseURL}}/homepage [Displays homepage]
GET {{baseURL}}/login [Displays login page]
GET {{baseURL}}/sign_up [Displays sign-up page]
GET {{baseURL}}/reset_password [Displays reset password page]
GET {{baseURL}}/calendar [Displays main calendar page]
GET {{baseURL}}/ [Redirects to homepage]
GET {{baseURL}}/* [Redirects to homepage]

Where "*" is any alternative route.

```


#### Event Routes
The event routes are used to handle the CRUD component of our API with regards to events data. The user will interact with the front-end of our application to create, read, update, and delete event data. 

##### Retrieve Event Data
Our events data is tied to a primary key called "userId". The "user_data" endpoint allows you to send a "userId" in the body of your request to retrieve any events data related to the user on the "Events" table. 

```
POST {{baseURL}}/api/events/user_data
Body ==> 
{
	"userId": "someUserId"
}
```

##### Add Event Data
When the user interacts with the front-end, we give them the option to add new event data to the database. This triggers an API request that will update the database with the information entered by the user. 

```
POST {{baseURL}}/api/events/add_event
Body ==> 
{
	"title": "someEventTitle",
	"detail": "someEventDetails",
	"eventColor": "someEventColor",
	"eventDate": "someEventDate",
}
```

##### Delete Event Data
Our event delete route, will allows us to delete an event when the user decides to delete the event from the front-end. 

```
DELETE {{baseURL}}/api/events/delete_event/:id

Where URL parameter ":id" is the eventId as stored in our database. 
```


# Application Flow
### Homepage
The homepage allows a user to login if they have an existing account, create a new account, or reset their password if they have forgotton their password. 

![Alt text](./images/Project%202%20Homepage.png "Homepage") </br>


### Login Page
The login page allows a user to sign into an existing account. This page validates to make sure that the user has entered the proper fields. If the password is incorrect, we alert the user to let them know that what they have entered is incorrect. If the user doesn't exist we will also warn them. If the authentication request is successful we send the user to the main calendar page. 
![Alt text](./images/Project%202%20Sign%20In%20Page.png "Sign In Page") </br>

### Sign Up Page
The sign up page allows a user to create a new account in our database. This page will validate a few things; check for existing user, check to make sure all the field data has been entered,  and check to make sure password is entered correctly twice. Once the user is created, we send them to the main calendar page. 
![Alt text](./images/Project%202%20Sign%20Up%20Page.png "Sign Up Page") </br>

### Reset Password Page
The reset password page allows the user to reset their credentials. This page will validate the fields to make sure that the user has entered the required information. It will also validate that the password has been entered correctly twice. To add an extra layer of security we added a verification token [TACO], to allow the user to reset their password. This will trigger an API request that will update the user's record in our database with a hashed version of the password that they have entered. This will also allow the user to sign in and redirect them to the main calendar page. 

![Alt text](./images/Project%202%20Reset%20Password%20Page.png "Reset Password Page") </br>

### Main Calendar Page [In Progress]
Unfortunately, this page is currently a work in progress. The goal here is to update this page so that we can populate our calendar with event data that the user has entered. When this page loads, we use the "userId" that we have stored to local storage and pull all event data for the respective user. This page is used to expose the "events" routes to the end user. 

![Alt text](./images/Project%202%20Homepage.png "Homepage") </br>

# App Demo
![Alt text](./images/CarpeDiemCalendar.gif "Carpe Diem Demo") </br>


# Database
#### JAWS DB Hosted Users Table
![Alt text](./images/Database%20User%20Table%20-%20Heroku.png "JAWS DB Hosted Users Table") </br>

### JAWS DB Hosted Events Table
![Alt text](./images/Database%20Events%20Table%20-%20Heroku.png "JAWS DB Hosted Events Table") </br>

# Licensing

This project is licensed under the MIT license.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![License:NodeJS](https://img.shields.io/badge/License-Node%20JS-yellowgreen)
![License:Express JS](https://img.shields.io/badge/License-Express%20JS-brightgreen)
![License: Handlebars](https://img.shields.io/badge/License-Handlebars-red)
![License: Sequelize](https://img.shields.io/badge/License-Sequelize-blue)

# Contributors
- Daniel Castro ==> https://github.com/dcast0607
- Shogoofa Akbari ==> https://github.com/ShogoofaA
- Tracy Derraco ==> https://github.com/tderraco
- Heng Yu ==> https://github.com/hengyu89
- Francisco Rivas ==> https://github.com/frivas02


# Questions

If you have any questions, please feel free to raise an issue. 