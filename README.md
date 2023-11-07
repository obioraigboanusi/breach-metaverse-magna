# Breach

Breach is a blog web application that enables users to see and filter posts by categories, and view live posts based on categories interesting in.

## Prerequisites:

-   Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [nodejs.org](nodejs.org).

## Setup and Installation

-   Clone the Repository

```
git clone https://github.com/obioraigboanusi/breach-metaverse-magna.git
&&
cd breach-metaverse-magna

```

-   Install Dependencies

```
 yarn install

```

This command will install all the project dependencies specified in the package.json file.

-   Configure Environment Variables

Rename the .env.example file to .env in the project root and replace the content with the following:

```
VITE_WEBSOCKET_URL=wss://frontend-test-api.mvm-tech.xyz/ws
VITE_BASE_URL=https://frontend-test-api.mvm-tech.xyz/api/
```

-   Run the Development Server

```
yarn  dev
```

This command will start the development server, and run the application at http://localhost:5173 .
