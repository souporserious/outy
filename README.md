## Outy

[![npm version](https://badge.fury.io/js/outy.svg)](https://badge.fury.io/js/outy)

A simple way to listen for events outside of elements. Inspired by [outside-click](https://github.com/Aloompa/outside-click).

## Install

`yarn add outy`

`npm install outy --save`

```html
<script src="https://unpkg.com/outy/index.js"></script>
(UMD library exposed as `outy`)
```

### Usage
```js
const overlay = document.getElementById('#overlay')
const outsideTap = outy(overlay, ['click', 'touchend'], handleOutsideTap)

function handleOutsideTap() {
  // maybe close an overlay?
}

// cleanup later
outsideTap.remove()
```
