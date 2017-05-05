var redux = require('redux')
var reducers = require('./reducers')
var constants = require('./constants')
var actions = require('./actions')

var store = redux.createStore(reducers, constants.LOGGER)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(actions.boundLogger('Aprender sobre acciones'))
