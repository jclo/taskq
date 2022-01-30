# TaskQ

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)


`TaskQ` is a Javascript library that allows tasks to be executed sequentially.

It is designed to be embedded in another library. `TaskQ` run on both Node.js and ECMAScript 2015 (ES6) compliant browsers.


## Quick Startup

This example shows how to store tasks, in the `Task Queue`, that must be processed sequentially. As soon as a task is stored in the queue, it is executed. When it is completed, it launches the next task thanks to the function `next` and so on until the queue is empty.

```js
// Create the taskQ object:
const taskQ = TaskQ();

// Define an heavy tasks
function heavy(next) {
  doSomethingComplex();
  next();
}

// Push tasks in the Queue:
taskQ.pushQ('aaa', (next) => {
  heavyTask1(next);
});

taskQ.pushQ('aaa', (next) => {
  heavyTask12(next);
});
```


## API

## Static methods

`TaskQ` provides one static method. You can use it by typing:

```javascript
TaskQ.noConflict();
```

| Static Methods       | Description |
|:---------------------|:------------|
| noConflict           | returns the TaskQ variable to its previous owner |



## Create a TaskQ object:

| Constructor | Description |
|:------------|:------------|
| TaskQ() | creates the TaskQ object that processes tasks |


## Methods

| Methods  | Description |
|:--------------------|:------------|
| pushQ(queue, task)  | pushes, in a dedicated queue, a task that need to be processed after the previous one |
| popQ(queue, task)   | pushes, in a dedicated queue, a task that need to be processed just after the running task is completed |


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/taskq.svg?style=flat-square
[release-image]: https://img.shields.io/github/release/jclo/taskq.svg?include_prereleases&style=flat-square
[commit-image]: https://img.shields.io/github/last-commit/jclo/taskq.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/taskq.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/taskq/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/taskq/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/taskq/dev-status.svg?theme=shields.io
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/@mobilabs/taskq.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@mobilabs/taskq.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/taskq
[release-url]: https://github.com/jclo/taskq/tags
[commit-url]: https://github.com/jclo/taskq/commits/master
[travis-url]: https://app.travis-ci.com/jclo/taskq
[coveralls-url]: https://coveralls.io/github/jclo/taskq?branch=master
[dependencies-url]: https://david-dm.org/jclo/taskq
[devdependencies-url]: https://david-dm.org/jclo/taskq?type=dev
[license-url]: http://opensource.org/licenses/MIT
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/@mobilabs/taskq
