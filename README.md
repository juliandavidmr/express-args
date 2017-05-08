# **Tracedux**

Predictable state in request parameters

- [x] Redux
- [x] State subscription
- [x] Auto parameters
- [x] Middleware for ExpressJS
- [ ] Request log
 
## **Usage**

Example of request:
```url
http://localhost:3000/?id=1&name=julian&lastname=david&fk=1
```

Then, with the following configuration file all query data will be `req.query`, `req.params`, `req.body` at the same time.
```js
var tracedux = require('../')

var config = [{  
  type: tracedux.constants.AUTO_PARAMS,
  exec: function (id, name, lastname, fk) {
    console.log(id, name, lastname, fk)
    //=> 1 1 julian david 1
  }
}, {
  type: tracedux.constants.AUTO_PARAMS,
  exec: function (id, name, fk) {
    console.log("Autoparams 2", arguments)
  }
}]

tracedux.conf(config);
```

Do you want to subscribe to the change of state?
```js
let unsubscribe = store.subscribe(() =>
  console.log("Changed:", store.getState())
)
```

## _**In development**._

License MIT [@juliandavidmr](https://github.com/juliandavidmr)