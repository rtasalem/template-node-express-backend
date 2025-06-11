# template-node-express-backend
GitHub repository template for backend Node.js applications.

## Features
- Compatible with Node.js v23+ out of the box, Node.js Docker image reference can be changed to different versions if needed.
- [Express.js](https://expressjs.com/)
- Hosted inside a Docker container for easy local development and distribution.
- [Convict](https://www.npmjs.com/package/convict) for clear & easy-to-read configuration.
- [Pre-commit](https://pre-commit.com) & [detect-secrets](https://github.com/Yelp/detect-secrets) hook to scan for sensitive information before commiting.
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
Build the Docker container:
```
docker compose build
```
Start up the Docker container:
```
docker compose up -d
```
