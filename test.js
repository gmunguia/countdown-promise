/* eslint-env mocha */
"use strict";
const assert = require("assert");
const Countdown = require(".");

describe("Countdown", () => {
  // Space tests out, to avoid false results caused by async Promise resolution.
  afterEach(done => {
    setTimeout(done, 50);
  });

  describe("if n is 1", () => {
    let resolved = false;
    const countdown = Countdown(1);
    countdown.promise.then(() => {
      resolved = true;
    });

    it("is not resolved after 0 counts", () => {
      assert(!resolved);
    });

    it("resolves after 1 count", done => {
      assert(!resolved);
      countdown.count();
      // Promise resolution is async, so we have to wait a loop for it.
      setTimeout(() => {
        assert(resolved);
        done();
      });
    });
  });

  describe("if n is 2", () => {
    let resolved = false;
    const countdown = Countdown(2);
    countdown.promise.then(() => {
      resolved = true;
    });

    it("is not resolved after 0 counts", () => {
      assert(!resolved);
    });

    it("is not resolved after 1 counts", done => {
      countdown.count();
      setTimeout(() => {
        assert(!resolved);
        done();
      });
    });

    it("resolves after 2 counts", done => {
      assert(!resolved);
      countdown.count();
      setTimeout(() => {
        assert(resolved);
        done();
      });
    });
  });
});
