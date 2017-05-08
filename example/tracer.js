var tracedux = require('../')

var config = [{
  type: tracedux.constants.LOGGER,
  watch: 'name',
  exec: function (req, res, next) {

  }
}, {
  type: tracedux.constants.AUTO_PARAMS,
  exec: function (id, name, lastname, fk) {
    console.log("Autoparams 1", id, name, lastname, fk)
  }
}, {
  type: tracedux.constants.AUTO_PARAMS,
  exec: function (id, name, lastname, fk) {
    console.log("Autoparams 2", arguments)
  }
}]

tracedux.conf(config);

module.exports = tracedux;