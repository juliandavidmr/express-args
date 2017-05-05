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

function boundAutoparams(text) {
  return {
    type: constanst.AUTO_PARAMS,
    text
  }
}

module.exports.boundTracer = boundTracer;
module.exports.boundState = boundState;
module.exports.boundLogger = boundLogger;
module.exports.boundAutoparams = boundAutoparams;