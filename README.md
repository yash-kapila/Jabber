# Jabber

> A chat application using Javascript(ES6) ME(Vue)N stack.

## Client
Built using VueJS CLI webpack template.

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Server
Built using ExpressJS framework for NodeJS.

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload using nodemon at localhost:3000
npm run dev
```

For detailed explanation on how things work, checkout [ExpressJS](https://expressjs.com/) and [NodeJS](https://nodejs.org/en/).


## Database
Application uses MongoDB hosted at MongoLab using the Sandbox plan providing 24 hrs availability and 0.5GB space.

```bash
# To connect using the mongo shell:
mongo ds111885.mlab.com:11885/jabber -u <dbuser> -p <dbpassword>

# To connect using a driver via the standard MongoDB URI
mongodb://<dbuser>:<dbpassword>@ds111885.mlab.com:11885/jabber
```
