# Setup

## Index
- [Setup](#setup)
    * [Node.js](#node.js)
    * [Cypress](#install-cypress)
- [Local Run](#local-run)
- [Docker](#docker)


        
## Setup
### Node.js
Comamand to install:
```shell script
brew install node
```
Command to verify installation:
```shell script
node --version
npm --version
```

### Install Cypress
Command to install

```shell script
npm install cypress --save-dev
```

## Local run
### Chrome
```shell script
npm run test:chrome
```
### Firefox
```shell script
npm run test:firefox
```
### Headless
```shell script
npm run test
``` 
## Docker
### Docker Image
```shell script
docker pull cypress/included:8.3.1  
```
### Chrome
```shell script
docker run -it -v $PWD:/cypress -w /cypress  cypress/included:8.3.1 --browser chrome
```
### Firefox
```shell script
docker run -it -v $PWD:/cypress -w /cypress  cypress/included:8.3.1 --browser firefox
```
### Headless
```shell script
docker run -it -v $PWD:/cypress -w /cypress  cypress/included:8.3.1 
```
### Docker compose
```shell script
docker-compose up
``` 

