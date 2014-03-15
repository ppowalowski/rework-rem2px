# rework-rem2px

[Rework](https://github.com/visionmedia/rework) plugin that converts rem units
to pixel ones.

[![NPM version](https://badge.fury.io/js/rework-rem2px.png)](https://npmjs.org/package/rework-rem2px) [![Build status](https://secure.travis-ci.org/nfroidure/rework-rem2px.png)](https://travis-ci.org/nfroidure/rework-rem2px) [![Dependency Status](https://david-dm.org/nfroidure/rework-rem2px.png)](https://david-dm.org/nfroidure/rework-rem2px) [![devDependency Status](https://david-dm.org/nfroidure/rework-rem2px/dev-status.png)](https://david-dm.org/nfroidure/rework-rem2px#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/nfroidure/rework-rem2px/badge.png?branch=master)](https://coveralls.io/r/nfroidure/rework-rem2px?branch=master) [![Code Climate](https://codeclimate.com/github/nfroidure/rework-rem2px.png)](https://codeclimate.com/github/nfroidure/rework-rem2px)

## Example

```css
.home {
  font-size: 1.2rem;
}
```

Yields:

```css
.home {
  font-size: 19.2px;
}
```

## Usage

```js
  var rework = require('rework');
  var rem2px = require('rework-rem2px');

  // Says rework to use rem2px with 16px for 1rem
  rework(css).use(rem2px(16));
```

## The MIT License (MIT)

Copyright (c) 2013 Nicolas Froidure

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
