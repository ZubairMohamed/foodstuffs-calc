# Welcome to Foodstuffs Calculator App

This app uses vite + React.

# Running the app

This app works uses node package manager (npm). To run the app locally you can run npm run dev or npm start.

## Node Version

At this time of making this app uses the latest long term support (LTS) version of nodejs which is v22.20.0

You can easily manage npm and node versions using node version manager visit this link for more information: https://github.com/nvm-sh/nvm

### Windows Specific Version

For windows you can visit this link instead https://github.com/coreybutler/nvm-windows

## Docker

This app works with docker!. Simply run `docker compose up` with docker to build and run the app container locally on your system.

## Local URL

Once the app is running locally either with npm or with docker visit this url in Chrome, Edge, Firefox or other supported browser.

http://localhost:5173/

## Prettier

This repo uses prettier for automatic code formatting. You can simply run
`npm run pretty` in the root directory of this project to automatically format all code within this repo.

## Testing

This app uses vitest for its testing framework. Simply run `npm run test` in the root directory of this project to automatically run test files.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
