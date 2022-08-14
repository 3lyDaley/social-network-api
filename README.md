# Social Network API

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


 ## Contents
 
 - [Description](#description)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
 - [Dependencies](#dependencies)
 - [Installation Instructions](#installing)
 - [Execution](#executing-program)
 - [Demos](#demos)
    - [`User` Functions](#users)
    - [`Friend` Functions](#friends)
    - [`Thoughts` Functions](#thoughts)
 - [Authors](#authors)


## Description

This is the backend component of a basic social media API. The program included provides the paths that associates friends, thoughts, and reactions to thoughts with user accounts, stored to thier `User` object all on the server side. Users' information is stored and organized using Mongoose DB, and the paths were tested using Insomnia through a local host.

--------------------------------------------------------
### User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria
```
GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose 
models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, 
and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to 
thoughts and add and remove friends to a user’s friend list
```

## Dependencies

- Express version 4.18.1
- Mongoose DB version 6.5.0

## Installing

* Fork this repo and clone to your machine
* `npm i` to install all dependencies
* All routes were tested using Insomnia

### Executing program

* Open terminal in root
* enter `npm i` in command line for dependencies
* `npm start` to connect to local server
* Using insomnia, amend the request to whatever it is you are testing. Notes on the route files give more detail on the paths required.

## DEMOS

### USERS
Demonstration of the following:

- `GET` all users
- `GET` a single user by its `_id` and populated `thought` and `friend` data
- `POST` a new user
- `PUT` to update a user by its `_id`
- `DELETE` to remove user by its `_id`



https://user-images.githubusercontent.com/100460009/184522861-e4778361-f4ce-40eb-b367-f968d571118a.mp4



--------------------------------------------------------------------------------------------
### FRIENDS 

Demonstration of the following:

- `POST` to add a new friend to a user's friend list
- `DELETE` to remove a friend from a user's friend list


https://user-images.githubusercontent.com/100460009/184522884-4acf152c-680e-41b1-91ed-1a6028066632.mp4



---------------------------------------------------------------------------------------------
### THOUGHTS

Thoughts video demonstrates the following functions: 

- `GET` to get all thoughts
- `GET` to get a single thought by its `_id`
- `POST` to create a new thought 
- `PUT` to update a thought by its `_id`
- `DELETE` to remove a thought by its `_id`

...And includes the following `reaction` functions: 

- `POST` to create a reaction stored in a single thought's `reactions` array field
- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

https://user-images.githubusercontent.com/100460009/184522787-18539be7-ca2d-428c-830b-d14a6505b7d3.mp4

--------------------------------------------------------------




