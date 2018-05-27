"use strict";

const createDeferred = require("p-defer");

module.exports = i => {
  const deferred = createDeferred();

  const count = () => {
    --i;
    if (i === 0) deferred.resolve();
    return this;
  };

  return {
    promise: deferred.promise,
    count
  };
};
