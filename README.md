## devtools - type - developer tool to detect type of value

### Install

With [npm](https://npmjs.org/):

```shell
npm install devtools-type
```

With [yarn](https://yarnpkg.com/en/):

```shell
yarn add devtools-typé
```

### Usage

```js
const type = require('devtools-type')

console.log(type.typeOf('hello world'))
console.log(type.typeOf({}))
console.log(type.typeOf([]))
console.log(type.is.string('123'))
console.log(type.is.string(1))
console.log(type.isNot.string(1))
```

<span> Result: </span> <br />
![example](https://github.com/vivianeflowt/devtools-type/blob/main/examples/example.png)

### License

MIT
