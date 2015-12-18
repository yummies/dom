[![npm](https://img.shields.io/npm/v/@yummies/dom.svg?style=flat-square)](https://www.npmjs.com/package/@yummies/dom)
[![travis](http://img.shields.io/travis/yummies/dom.svg?style=flat-square)](https://travis-ci.org/yummies/dom)
[![coverage](http://img.shields.io/coveralls/yummies/dom/master.svg?style=flat-square)](https://coveralls.io/r/yummies/dom)
[![deps](http://img.shields.io/david/yummies/dom.svg?style=flat-square)](https://david-dm.org/yummies/dom)
[![dev deps](http://img.shields.io/david/dev/yummies/dom.svg?style=flat-square)](https://david-dm.org/yummies/dom#info=devDependencies)

YummiesDOM reflects the same connection with [Yummies](https://github.com/yummies/yummies) as `react@>=0.14` has with [ReactDOM](https://github.com/facebook/react/tree/master/packages/react-dom)

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

### Babel environment

There are couple of things worth noticing if you use `babel`.

Since `1.x.x` `babel-runtime` is not included anymore and we inline all helpers. We do it in case to support IE9-10. It may insignificantly increase bundle size, but other than that everything should work fine even if you use `babel-runtime` in your application.

If you need to support IE9-10, you should include on `spec.protoToAssign` into `optional` in your `.babelrc`. This will fix some inheritance incompatibility issues. If you don't need IE9-10, no additional moves required.

### Old browsers support

Please note that IE8 is supported only in `0.x.x` legacy branch. Starting from `1.x.x` only IE9 and higher are supported. We are going to keep updating a legacy branch in parallel for some time (until IE8 would not become history).
