# Setup

## Index
- [Setup](#setup)
    * [Package Manager](#package-manager)
    * [Version Manager](#version-manager)
    * [Node.js](#node.js)
    * [Cypress](#install-cypress)
- [Local Run](#local-run)

        
## Setup
### Package Manager
* [Homebrew](https://brew.sh/index_pt-br): Command to install Homebrew
```shell script
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
### Version Manager
Command to install NVM
```shell script
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
The script clones the nvm repository to ~/.nvm, and attempts to add the source lines from the snippet below to the correct profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

```text
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```
After run source to the correct profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

```
source ~/.bash_profile
```
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
npm install -g cypress
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

