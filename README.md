# template-node-express-backend
GitHub repository template for backend Node.js applications.

## Features
- Compatible with Node.js v23+ out of the box, Node.js Docker image reference can be changed to different versions if needed.
- [Express.js](https://expressjs.com/)
- Hosted inside a Docker container for easy local development and distribution.
- [Convict](https://www.npmjs.com/package/convict) for clear & easy-to-read configuration.
- [Pre-commit](https://pre-commit.com) hooks: 
    - [detect-secrets](https://github.com/Yelp/detect-secrets) to scan for sensitive information 
    - ESLint configured with neostandard to ensure formatting is consistent
- [Neostandard](https://github.com/neostandard/neostandard) as a reliable linter that needs little to no config and is ready to use.
- NPM scripts which are laid out in the `package.json` to simply common commands for local development.

## Prerequisites
Node.js (LTS)  
or  
Docker Compose

## Getting Started
Clone the template repository.  
Install dependencies:
```
npm install
```
Run the application using either of the provided NPM scripts:
```
npm start
npm run dev # run in watch mode using nodemon
```
Build the Docker container:
```
docker compose build
```
Start up the Docker container:
```
docker compose up -d
```
