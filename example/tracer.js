var ex_args = require('../')

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
    res.send('Token:' + token)
  }
}]

ex_args.conf(config);

ex_args.store.subscribe(() => {
  console.log("Actual state::", ex_args.store.getState())
})

module.exports = ex_args;