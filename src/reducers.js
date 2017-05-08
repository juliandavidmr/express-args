var actions = require('./actions');
var constants = require('./constants')

const initialState = {
  state: constants.LOGGER,
  func: {}
}

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
      console.log("Reducer autparams:", action.text.data, action.text.args)
      if (typeof action.text.func === 'function') {
        var data = action.text.data;
        var args_func = action.text.args;

        var _args_ = [];
        var _continue_ = true;
        for (var i = 0; i < args_func.length; i++) {
          var arg = args_func[i];
          if (data[arg]) {
            _args_.push(data[arg]);
          } else {
            console.log(`${arg} not found`);
            _continue_ = false;
            break;
          }
        }
        if (_continue_) {
          action.text.func.apply(null, _args_)
        }
        // action.text.func.apply(null, ["hello"])
        // action.text.func.call()
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