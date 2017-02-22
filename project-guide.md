This guide is intended to help me through the process of creation of my very first project.

#To-Do App Guide

+ Preparation steps:
    * create a `to-doapp` dir
    * initiate local git with `git init`command
    * create a [repository](https://github.com/xmero/to-doApp) in GitHub
    * connect both remote and local repositories with `git remote add origin https://github.com/xmero/to-doApp.git`
    * create the README.md file where the project is explained
    * do the first project push with `git pus -u origin master` 
    * create the `json`file to install all dependencies with `npm init --yes`
    * install npm express with `npm install express --save` 
    * ADD node_modules to gitignore to prevent crashes
    * automatize project to auto-install of all dependencies and other tasks with commands: 
        - `"prestart": "npm install && bower install"` 
        - `"start": "set PORT=3000 && node main.js"` 
        - `"watch": "set PORT=3000 && nodemon main.js"`

+ First steps

    * create the `main.js` file
    * require express module : `const express = require('express')` and `const app = express()`
    * prepare the server to listen on `process.env.PORT` with : `app.listen( PORT, () => console.log('Listening on PORT ${process.env.PORT}...'))`

    * install `pug` 
    * create the index.pug file and render it `app.get('/', (req,res) => res.render('index'))`
    * 
    * install `nodemon` locally
    * create bower.json with `bower init`
    * install bootstrap localy with `bower install bootstrap`

    * install `body-parser` to be able to read from POST method and add: `const bodyParser = require('body-parser')` and `app.use(bodyParser.urlencoded({ extended: false }))`


