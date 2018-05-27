"use strict";

const createDeferred = require("p-defer");

module.exports = i => {
  const deferred = createDeferred();

  const ret = {};

  ret.promise = deferred.promise;
  ret.count = () => {
    --i;
    if (i === 0) deferred.resolve();
    return ret;
  };

  return ret;
};
