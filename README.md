# Cosi test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the [Frontend Engineer exercise from COSI](https://github.com/COSI-Group/jobs/tree/main/frontend).

## Configuration

First of all, create a `.env` file in the root of the project with the following structure:

```sh
REACT_APP_TOKEN=TOKEN
```

The token will be sent to the recruiter's email

## Structure

```
src
├── app
│   ├── index.tsx
│   ├── routes
│   │   ├── SearchFlight
│   │   ├── Success
│   │   └── UserInfo
│   ├── services				- API Services
│   └── types					- General Typings
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
