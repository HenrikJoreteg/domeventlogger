# domEventLogger

## What is this?

A tiny browser module for discovering what events are actually being fired by an object in the browser. Especially useful for discovering available 'hooks' for new-ish browser APIs like MediaStreams or PeerConnections.

Suitable for use with browserify/CommonJS on the client. 

If you're not using browserify or you want AMD support use `domeventlogger.bundle.js`.


## Installing

```
npm install domeventlogger
```

## How to use it


See demo.html for working demo.

```js
var domEventLogger = require('domeventlogger');


// grab some image or any browser API that lets you
// listen for 'on...' events:
img = document.getElementById('myImage');

// specify that you want to log events
domEventLogger(img);

// do something that will cause an event
// for example a "onload" event by specifying
// an image source attribute.
img.src = "http://myawesomeimage.com";

// look in your console and you'll see the load event logged
// now you can mouse over the image and see mouseover, etc.
// this is great for discovering what hooks you have available to you.

```

## Example

![screen shot](https://dsz91cxz97a03.cloudfront.net/lQjAH80DlH-1200x1200.png)

## Why? 

New browser APIs don't always have perfect up-to-date docs. And sometimes you're not exactly sure the order in which things are firing. This can make it easier to debug.

## Caveats

Don't leave this in your code in production, as it registers an event listen on every possible event hook for the element you pass it (which may not be particularly awesome for performance);

## License

MIT


## Created By

If you like this, follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

