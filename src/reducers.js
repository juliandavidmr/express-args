var actions = require('./actions');
var constants = require('./constants')
var log = console.log;

const initialState = {
  state: constants.LOGGER,
  func: {}
}

/**
 * @param {object} state
 * @param {object} action
 */
function reducer(state, action) {
  if (typeof state == void 0) {
    state = initialState;
  }
  switch (action.type) {
    case constants.LOGGER:
      return Object.assign({}, {
        state
      }, {
        func: action.text
      })
    case constants.AUTO_PARAMS:
      // console.log("Reducer autparams:", action.text.data, action.text.args)
      if (typeof action.text.func === 'function') {
        var data = action.text.data;
        var args_func = action.text.args;
        var args_request = action.text.request;

        var _args_ = [];
        _args_.push(args_request.req);
        _args_.push(args_request.res);
        _args_.push(args_request.next);

        // log('Data:', data)

        var _continue_ = true;
        for (var i = 3; i < args_func.length; i++) {
          var arg = args_func[i];
          if (data[arg]) {
            _args_[i] = data[arg];
          } else {
            // console.log(`${arg} not found`);
            _continue_ = false;
            break;
          }
        }
        if (_continue_) {
          action.text.func.apply(null, _args_)
        }
      }

      return {
        type: constants.AUTO_PARAMS,
        func: action.text.func
      }
    default:
      return state
  }
}

module.exports = reducer;