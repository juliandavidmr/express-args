var constanst = require('./constants')

function boundTracer(text) {
  return {
    type: constanst.TRACER,
    text
  }
}

function boundState(text) {
  return {
    type: constanst.STATE,
    text
  }
}

function boundLogger(text) {
  return {
    type: constanst.LOGGER,
    text
  }
}

function boundAutoparams(array, func, args, req, res) {
  return {
    type: constanst.AUTO_PARAMS,
    text: {
      data: Object.assign({}, array[0], array[1], array[2]),
      func: func,
      args: args
    }
  }
}

module.exports.boundTracer = boundTracer;
module.exports.boundState = boundState;
module.exports.boundLogger = boundLogger;
module.exports.boundAutoparams = boundAutoparams;