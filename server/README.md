# MERN Template Server

## Table of Contents

- [MERN Template Server](#mern-template-server)
  - [Table of Contents](#table-of-contents)
  - [ℹ️ About](#ℹ️-about)
  - [🚀 Quick start](#-quick-start)
  - [📋 Features](#-features)
  - [⚡ Scripts](#-scripts)
  - [🤝 Contributing](#-contributing)
  - [🚩 License](#-license)

## ℹ️ About

The main goal of this project is to provide a base template for the generation of a production-ready `Node.js`, `Express` and `Typescript`. The idea is to avoid having to configure all the tools involved in a project every time it is started and thus be able to focus on the definition and implementation of the business logic.

> 📣 This is an opinionated template. The architecture of the code base and the configuration of the different tools used has been based on best practices and personal preferences.

## 🚀 Quick start

- Start project in development mode:

  ```bash
  npm run start:dev
  ```

- Start project in production mode:

  ```bash
  npm run start:prod
  ```

- Start project in test mode:

  > to interact with the API using Swagger UI:

  ```bash
  http://localhost:${ENVIRONMENT_PORT}/api/docs
  ```

## 📋 Features

- Built using [Typescript](https://github.com/microsoft/TypeScript)
- Built using [Express Framework](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework for node.
- Unit, Integration and E2E tests using [Jest](https://github.com/facebook/jest)
- Linting with [ESLint](https://github.com/eslint/eslint)
- Formatting with [Prettier](https://github.com/prettier/prettier)
- Git hooks with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- Containerised using [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- Path aliases support
- Commit messages must meet conventional commits format

## ⚡ Scripts

[package.json](package.json) scripts:

- `test`: Run all tests
- `start:dev`: Start development environmnet in production mode
- `start:prod`: Start project in production mode
- `start:test`: Start test environment in production mode
- `coverage`: Run tests with coverage
- `build`: Build project and generate final build

## 🤝 Contributing

Please read [CONTRIBUTING.md](../docs/contribution.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## 🚩 License

ISC. Please see [License](LICENSE) for more information.
