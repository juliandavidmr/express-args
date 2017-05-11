# **express-args**

Predictable state in request parameters

- [x] Redux
- [x] State subscription
- [x] Auto parameters
- [x] Middleware for ExpressJS
- [ ] Request logger
 
## **Usage**

Request example:

```
http://localhost:3000/?id=1&name=julian&lastname=david&fk=1

http://localhost:3000/?token=3s5iuds42xl8
```

The capture of arguments is dynamic, everything is based on the names of the parameters of each function:
```js
// conf_express_args.js

var ex_args = require('express-args')

var config = [{
  type: ex_args.constants.AUTO_PARAMS,
  exec: function (req, res, next, id, name, lastname, fk) {
    console.log("Autoparams 1:", id, name, lastname, fk);
    //=> Autoparams 1: 1 julian david 1
    res.send("Middleware")
  }
}, {
  type: ex_args.constants.AUTO_PARAMS,
  exec: function (req, res, next, token) {
    console.log("Autoparams 2:", token);
    //=> Autoparams 2: 3s5iuds42xl8
    res.send('Token:' + token)
  }
}]

ex_args.conf(config);

module.exports = ex_args;
```

Do you want to subscribe to middleware state?
```js
// Observable

ex_args.store.subscribe(() => {
  console.log("Actual state:", ex_args.store.getState())
})
```

## **Using with ExpressJS**

```js
// app.js

/* ... */
var app = express();
var express_args = require('./conf_express_args');

app.use(express_args.app);

/* ... */
```
### **A closer look at the [middleware](./example/tracer.js) and [server.](./example/app.js)**


_Project under development._

License MIT [@juliandavidmr](https://github.com/juliandavidmr)