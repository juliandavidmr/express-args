var rex = require('../')

var config = [{
  type: rex.constants.LOGGER,
  watch: 'name',
  exec: function (req, res, next) {

  }
}, {
  type: rex.constants.AUTO_PARAMS,
  exec: function (req, res, next, id, name, lastname, fk) {
    console.log("Autoparams 1:", id, name, lastname, fk);
    res.send("Middleware")
  }
}, {
  type: rex.constants.AUTO_PARAMS,
  exec: function (req, res, next, token) {
    console.log("Autoparams 2:", token);
    res.send('Token:' + token)
  }
}]

rex.conf(config);

rex.store.subscribe(() => {
  console.log("Actual state::", rex.store.getState())
})

module.exports = rex;