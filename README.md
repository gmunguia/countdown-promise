#
# countdown-promise
[![npm version](https://img.shields.io/npm/v/countdown-promise.svg)](https://www.npmjs.com/package/countdown-promise)
[![CircleCI build](https://img.shields.io/circleci/project/github/gmunguia/countdown-promise.svg)](https://circleci.com/gh/gmunguia/countdown-promise/tree/master)

> Create a promise that resolves after n counts.


## Install

```
$ npm install --save countdown-promise
```


## Usage

```js
const Countdown = require('countdown');

const countdown = Countdown(5)
countdown.promise.then(() => console.log('Done!'))

countdown.count().count().count().count()
// Nothing happens yet.

countdown.count() // (note this is the 5th `count`)
// "Done!" is printed on console. 
```


## API

### Countdown()

Returns an `Object` with a `promise` property and a function to `count()`.


## License

MIT © Gerardo Munguia
