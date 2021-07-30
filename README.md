# 2nd-portfolio-project - Habit Tracker

## Full stack web application with an HTML/CSS/JS client and an Express server connected to <db type> database.

A basic habit tracking app

## Installation & Usage

### Installation

* Clone or download the repo
* Open terminal and navigate to `habit-tracker` folder
* Navigate to the server folder and run `npm install` to install dependencies 
* Navigate to the client folder and run `npm install` to install dependencies 

### Usage - provided scripts and intended use

`bash _scripts/startDev.sh`

* starts server & db services
* runs db migrations
* seeds db for development
* serves to localhost:3000

`bash _scripts/startTest.sh`

* starts server & db services
* runs db migrations
* triggers full test run 

`bash _scripts/teardown.sh`

* stop all running services
* removes containers
* removes volumes

**Do not run both dev and test environment at the same time!**


## Technologies

### Client

- HTML
- JavaScript
- CSS
- NPM
  - Jest
  - lite-server
  - watchify (bundler)
  - concurrently
  - jwt_decode

### Backend

- Docker
- NodeJs
- Express
- NPM
  - express
  - cors
  - morgan
  - jsonwebtoken
  - bcrypt
  - pg
  - dotenv (review)
  - cross-env (review)
  - jest
  - supertest
  - uuid

### Database

- Docker
- PostgreSQL

## API endpoints

| Route name | Path                                            | Method        | Purpose |
| ---------- | ----------------------------------------------- | ------------- | ------- |
| create     | `/auth/register`                                | `POST`        | Working |
| update     | `/auth/login`                                   | `POST`        | Working |
| update     | `/auth/:email/password`                         | `PATCH`       | Working |
| show       | `/user/:email`                                  | `GET`         | Working |
| update     | `/user/:email`                                  | `PATCH`/`PUT` | Working |
| show       | `/user/:email/habit`                            | `GET`         | Working |
| create     | `/user/:email/habit/`                           | `POST`        | Working |
| show       | `/user/:email/habit/:id`                        | `GET`         | Working |
| destroy    | `/user/:email/habit/:id`                        | `DELETE`      | Working |
| show       | `/user/:email/habit/:id/complete`               | `GET`         | Working |
| create     | `/user/:email/habit/:id/complete`               | `POST`        | Working |
| destroy    | `/user/:email/habit/:id/complete/:completionId` | `DELETE`      | Working |

## Changelog

[changelog](./changelog.md)
