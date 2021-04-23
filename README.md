# The project

## Prerequisites

- Node >= 8.10
- NPM >= 5.6
- Git

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`
3. Create a file `.env.local`
4. Add `REACT_APP_BASE_URL` to `.env.local` and assign to it the server url, in development should be `http://localhost:4002`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

### Project structure

```bash
src/
  components # Some components already built.
  pages # Available page view
  routes # Page routes
  server # The fake API mentioned above.
  services # Common functionality to the whole application
  theme # Some base styles used across the project.
```

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm run storybook`

Runs [Storybook](https://storybook.js.org/docs/react/get-started/introduction) to show the visualization of stateless component in the project.\
Open [http://localhost:6006/](http://localhost:6006/) to see all components.

### `npm test`

Launches the test runner in the interactive watch mode.\
Read the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run loki:test`

Runs [Loki](https://loki.js.org/), a visual regression test, to check the `/components` styles.

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`
