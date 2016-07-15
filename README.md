# Quartz Butterfly

Copper Mantis web client.

## Make it run!
This application depends of Copper Manits backend and a http server (like Apache,
nginx or even BrowserSync node module) to make it accessible to any web browser
and run.

That being said you can go to **Deploy this application** section and check each
step accomplish this task.

## Deploy this application

First you need have to install all the dependencies, then run the default `gulp`
task and finally deploy the application that lives inside of `dist` directory.

## Contribute

* Clone this repo

```bash
$ git clone <repo url> && cd <repo directory>
```

* Install the project dependencies

```bash
$ npm install
$ bower install
```

* Run the static http server with `gulp`

```bash
$ gulp serve
```

* Remeber to have CopperMantis running

```bash
$ # In other terminal
$ git clone <CopperMantis repo url> && cd <CopperMantis directory>
$ docker-compose up # To stop it just use Ctrl+C
```

### Dev dependencies

- Node.js v4.4+
  - npm 3
  - bower
  - gulp
  - karma

If you don't want to install those dependencies locally, you can use Vagrant instead

```
$ cd <project directory>
$ vagrant up
```

Therefor you'll need to install to make it work

- Virtualbox 5+
- Vagrant 1.8.1+
  - vagrant-vbguest 0.12.0+ (vagrant plug-in)

### Gulp Tasks

You can run independently each task inside of `gulp` directory, but the most important tasks are:

- `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application
without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

**Note**: For both `server` task you can check the application at
[localhost:3000](http://localhost:3000) or [192.168.99.99:3000](http://192.168.99.99:3000)
if you're using vagrant.
