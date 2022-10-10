# MERN Template Client

## Table of Contents

- [MERN Template Client](#mern-template-client)
  - [Table of Contents](#table-of-contents)
  - [ℹ️ About](#ℹ️-about)
  - [🚀 Running locally in development mode](#-running-locally-in-development-mode)
  - [📋 Features](#-features)
  - [⚡ Scripts](#-scripts)
    - [Database hosting](#database-hosting)
    - [Secrets for Environment Variables](#secrets-for-environment-variables)
    - [GitHub integration](#github-integration)
    - [Alternate hosting options](#alternate-hosting-options)
  - [🤝 Contributing](#-contributing)
  - [🚩 License](#-license)

## ℹ️ About

The main goal of this project is to provide a base template for the generation of a production-ready `environment`. The idea is to avoid having to configure all the tools involved in a project every time it is started and thus be able to focus on the definition and implementation of the business logic.

> 📣 This is an opinionated template. The architecture of the code base and the configuration of the different tools used has been based on best practices and personal preferences.

## 🚀 Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/Narantsatsralt05/mern-template
    npm install
    npm run dev

## 📋 Features

- Built using [Typescript](https://github.com/microsoft/TypeScript)
- Linting with [ESLint](https://github.com/eslint/eslint)
- Formatting with [Prettier](https://github.com/prettier/prettier)
- Git hooks with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- Path aliases support
- Commit messages must meet conventional commits format
- Mock data support

## ⚡ Scripts

[package.json](package.json) scripts:

- `dev`: Start project in development mode
- `dev:test`: Start project in test mode
- `start`: Start project in production mode
- `lint`: Fix project lint issues
- `clean`: Clean project
- `build`: Build project and generate final build
- `build-prod`: Build project and generate final build
- `build-types`: Build project and generate final build
- `prepare`: Husky improves your commits and more 🐶 woof!

### Database hosting

If you need an instance of MongoDB in the cloud https://mlab.com/ have free and inexpensive options.

### Secrets for Environment Variables

Once you are comfortable using `.env` files for configuration and running and deploying your app, take a look at `now secrets` to set options in the cloud so you don't have to set them each time you deploy.

### GitHub integration

You can integrate `now` with a GitHub account to trigger automated deployments anytime you push to GitHub. This works great if you have secrets set up!

### Alternate hosting options

You can host your Next.js site with any hosting provider. Although it works great on Now, it also works great with other providers like Firebase, Heroku, Amazon Web Service, Google Cloud Platform, Microsoft Azure, DigitalOcean and others.

## 🤝 Contributing

Please read [CONTRIBUTING.md](../docs/contribution.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## 🚩 License

ISC. Please see [License](LICENSE) for more information.
