[![npm](https://img.shields.io/npm/v/@yummies/dom.svg?style=flat-square)](https://www.npmjs.com/package/@yummies/dom)
[![travis](http://img.shields.io/travis/yummies/dom.svg?style=flat-square)](https://travis-ci.org/yummies/dom)
[![coverage](http://img.shields.io/coveralls/yummies/dom/master.svg?style=flat-square)](https://coveralls.io/r/yummies/dom)
[![deps](http://img.shields.io/david/yummies/dom.svg?style=flat-square)](https://david-dm.org/yummies/dom)

## Install

```
npm i -S @yummies/dom
```

## API

### Patched methods

The following [ReactDOM API](https://github.com/facebook/react/blob/master/packages/react-dom/README.md) methods are patched to support the new format:

##### `render()`

```js
import YummiesDOM from '@yummies/dom';

YummiesDOM.render({ block: 'my-component' }, document.body);
```

##### `renderToString()`

```js
import YummiesDOMServer from '@yummies/dom/server';

YummiesDOMServer.renderToString({ block: 'my-component' });
```

##### `renderToStaticMarkup()`

```js
import YummiesDOMServer from '@yummies/dom/server';

YummiesDOMServer.renderToStaticMarkup({ block: 'my-component' });
```
