# Social Media App

An example application built with Ruby on Rails, React, and Relay.

Backend Application: https://github.com/DennisMartinez/social-media-api

You can view the demo at https://social-media.dennismartinez.io/. The sign in credentials are below.

```bash
email: admin@example.com
password: admin
```

_Note:_ The demo database resets every hour.

---

## Getting Started

### Prerequisites

1. **Node.js** — https://nodejs.org/en  
   1. Recommended: **NVM** — https://github.com/nvm-sh/nvm  
2. **Watchman** — https://facebook.github.io/watchman/docs/install.html  

### Running the Backend App

Before proceeding, it's recommended to set up and start the backend first. See setup instructions here: https://github.com/DennisMartinez/social-media-api

### Running the Frontend App

After installing Node.js and Watchman, start the development server:

```bash
yarn dev
```

This command will:

1. Install Yarn dependencies
2. Fetch the latest schema (if the backend is running)
3. Start Watchman and the Yarn dev server

The app will be available at:

```bash
http://localhost:5173
```

### Testing

This app uses Vitest with Playwright. You can run the tests with the following command.

```bash
yarn test
```

If you have trouble running the tests, try installing Playwright with the following commands.

```bash
yarn playwright install-deps
yarn playwright install
```
