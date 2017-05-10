# **Rex**

Predictable state in request parameters

- [x] Redux
- [x] State subscription
- [x] Auto parameters
- [x] Middleware for ExpressJS
- [ ] Request log
 
## **Usage**

Request example:
```
http://localhost:3000/?id=1&name=julian&lastname=david&fk=1
```

The capture of arguments is dynamic, everything is based on the names of the parameters of each function:
```js
var rex = require('../')

var config = [{
  type: rex.constants.AUTO_PARAMS,
  exec: function (req, res, next, id, name, lastname, fk) {
    console.log("Autoparams 1:", id, name, lastname, fk);
    // => Autoparams 1: 1 julian david 1
    res.send("Middleware")
  }
}, {
  type: rex.constants.AUTO_PARAMS,
  exec: function (req, res, next, token) {
    console.log("Autoparams 2:", token);
    res.send("Token: " + token)
  }
}]

rex.conf(config);

module.exports = rex;
```

Do you want to subscribe to the change of state?
```js
rex.store.subscribe(() => {
  console.log("Actual state:", rex.store.getState())
})
```

## _**In development**._

License MIT [@juliandavidmr](https://github.com/juliandavidmr)