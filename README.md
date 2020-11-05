# Cosi test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the [Frontend Engineer exercise from COSI](https://github.com/COSI-Group/jobs/tree/main/frontend).

## Development

### Installation

In the project root, run the following command

```sh
yarn
```

or

```sh
npm i
```

### .env file

Create a `.env` file in the root of the project with the following structure:

```sh
REACT_APP_TOKEN=TOKEN
```

The token will be sent to the recruiter's email

### Configuring code editor

If you're using [Visual Studio Code](https://code.visualstudio.com/), please install the recommended extensions.

It is also enabled by default

If you're using another editor, it's recommended to install any [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [EditorConfig](https://editorconfig.org/) plugins on your preferable code editor for linting and formmating

### Available Scripts

In the project directory, you can run:

#### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Basic Structure

```
.
├── README.md
├── package.json
├── public
├── src
│   ├── app
│   │   ├── index.tsx           - Main screen
│   │   ├── components          - Reusable components
│   │   ├── routes              - Internal routes
│   │   │   ├── SearchFlight
│   │   │   ├── Success
│   │   │   └── UserInfo
│   │   ├── services            - API Services
│   │   └── types               - Reusable Typings
│   └── index.tsx               - Root React file
└── .vscode                     - VSCode related configurations
```

## Dependencies

As said before, the project was created using [Create React App](https://github.com/facebook/create-react-app) with [Typescript](typescriptlang.org/), and utilizes the following dependencies:

-   [Formik](https://formik.org/) - for handling form states
-   [Yup](https://github.com/jquense/yup) - for providing schema validation for Formik
-   [Axios](https://github.com/axios/axios) - for handling API requests
-   [React-Query](https://react-query.tanstack.com/) - for handling the requests using Axios

For testing uses the out-of-the-box testing library [React Testing Library](https://testing-library.com) with [Jest](https://jestjs.io/), and uses [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) for mocking axios requests.

For code linting and formatting in the development, it utilizes the out-of-the-box dependency [ESLint](https://eslint.org/) for linting, [Prettier](https://prettier.io/) and [Editorconfig](https://editorconfig.org/) for styling and formmating

## Contact

Feel free to get in touch with me via [Twitter](https://twitter.com/kbooz) or create an issue!
