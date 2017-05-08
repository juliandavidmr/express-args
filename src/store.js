var redux = require('redux')
var reducers = require('./reducers')
var constants = require('./constants')
var actions = require('./actions')
var utils = require('./_utlis')
var log = console.log;

var store = redux.createStore(reducers, constants.LOGGER)

let unsubscribe = store.subscribe(() =>
  console.log("Estado cambiado:", store.getState(), '\n---')
)

var options_data;
var tracers = {}

function defineTracers(params) {
  for (var key in constants) {
    if (constants.hasOwnProperty(key)) {
      tracers[constants[key]] = []
    }
  }
}

function app(req, res, next) {
  // search names arguments : type AUTO_PARAMS
  // log('Body', req.body)
  // log('Params', req.params)
  // log('Query', req.query)
  for (var key in constants) {
    // console.log("TracerS 2:", JSON.stringify(tracers, null, 3))
    // console.log("::::", constants[key], tracers[constants[key]], params, body);
    tracers[constants[key]].map(check => {
      if (check.type === constants.AUTO_PARAMS) {
        store.dispatch(actions.boundAutoparams([req.params, req.body, req.query], check.exec, check.args, req, res))
        // log(check)
      }
    })
  }

  next()
}

// store.dispatch(actions.boundLogger('Aprender sobre acciones'))

/**
 * @param {Array<any>} options
 */
function conf(options) {
  if (!options) {
    console.warn('No configuration data defined. Check the "conf" method');
  } else if (typeof options === 'object') {
    options_data = options;
  } else {
    console.warn('Param invalid.')
  }

  if (!!options_data) {
    defineTracers(options_data);
    options_data.map(it => {
      if (it.type === constants.AUTO_PARAMS) {
        var args = utils.gpn(it.exec);
        it.args = args;
      }
      tracers[it.type].push(it);
      // delete it.type;
    })
    // console.log("TracerS:", JSON.stringify(tracers, null, 3))
  }

  return app
}


module.exports.constants = constants;
module.exports.app = app;
module.exports.conf = conf;
module.exports.store = store;