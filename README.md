# merge-string-conditionally

[![npm](https://img.shields.io/npm/v/merge-string-conditionally)](https://www.npmjs.com/package/merge-string-conditionally)

[![downloads](https://img.shields.io/jsdelivr/npm/hm/merge-string-conditionally?color=%230B7CBC&label=downloads)](https://www.npmjs.com/package/merge-string-conditionally)

Simple package for merging multiple strings where some of the strings are conditionally applied. It can be used to merge multiple class names. A fixed string can be used as well as conditional strings through object(s)

It can be used in the React projects (to merge class names) as well as in Node.js projects.

No dependencies.

## Install

```
$ npm install merge-string-conditionally
```

OR

```
$ yarn add merge-string-conditionally
```

## Usage

```js
import mergeString from 'merge-string-conditionally';
```

OR

```js
const mergeString = require('merge-string-conditionally');
```

## Examples

```js
mergeString('fixed-class', { 'any-className': true }); // as long as the object values are true they will be merged

--- output ---
'fixed-class any-className`
```

```js
mergeString(
  'fixed-class',
  { 'any-className': true },
  { 'any-className-2': true }
); // multiple objects can be passed

--- output ---
'fixed-class any-className any-className-2`
```

```js
mergeString('fixed-class', { 'any-className': true, 'any-className-2': true }); // single objects with multiple properties can also be passed

--- output ---
'fixed-class any-className any-className-2`
```

```js
mergeString('fixed-class', { 'false-className': false, 'any-className': true }); // single objects with multiple properties can also be passed

--- output ---
'fixed-class any-className`
```
