var actions = require('./actions');
var constants = require('./constants')

const initialState = {
  func: []
}

function reducer(state, action) {
  if (typeof state == void 0) {
    state = initialState;
  }
  switch (action.type) {
    case constants.LOGGER:
      return Object.assign({}, state, {
        func: action.text
      })
    default:
      return state
  }
}

module.exports = reducer;