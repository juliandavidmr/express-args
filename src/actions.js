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

/**
 * @param {object} data
 * @param {function} func
 * @param {object} args
 * @param {function} req
 * @param {function} res
 * @param {function} next
 */
function boundAutoparams(data, func, args, req, res, next) {
  return {
    type: constanst.AUTO_PARAMS,
    text: {
      data: data,
      func: func,
      args: args,
      request: {
        res: res,
        req: req,
        next: next
      }
    }
  }
}

module.exports.boundTracer = boundTracer;
module.exports.boundState = boundState;
module.exports.boundLogger = boundLogger;
module.exports.boundAutoparams = boundAutoparams;