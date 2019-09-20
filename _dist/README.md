# TaskQ

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->
[![NPM install][npm-install-image]][npm-install-url]


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
[npm-install-image]: https://nodei.co/npm/@mobilabs/taskq.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@mobilabs/taskq.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/taskq.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/taskq/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/taskq/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/taskq/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/@mobilabs/taskq.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/taskq
[npm-install-url]: https://nodei.co/npm/@mobilabs/taskq
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/@mobilabs/taskq
[travis-url]: https://travis-ci.org/jclo/taskq
[coveralls-url]: https://coveralls.io/github/jclo/taskq?branch=master
[dependencies-url]: https://david-dm.org/jclo/taskq
[devdependencies-url]: https://david-dm.org/jclo/taskq?type=dev
[license-url]: http://opensource.org/licenses/MIT
