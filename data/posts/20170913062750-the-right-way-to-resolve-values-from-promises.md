---
name: "The right way to resolve values from Promises"
slug: the-right-way-to-resolve-values-from-promises
featured_image_url: https://cdn.ifvictr.com/images/blog.ifvictr.com/11/cover.png
created_at: "2017-09-12T01:55:57.000Z"
published_at: "2017-09-13T06:27:50.000Z"
featured_at: null
tags: []
---

Last month, I was working on a Node.js project which involved [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). When I was looking at example code from various sources, I noticed several different ways in which values were returned from promises. I'll go over the four methods I saw, and talk about their correctness:

**Note:** The `getUrl()` method you see in the examples returns a string. Just getting that out of the way!

###### Method 1
```js
return request(this.getUrl(filepath)).then(res => {
    return Promise.resolve(res.statusCode === 200);
});
// Promise -> Promise -> boolean
```
The code above works. However, there is some extra code. You already get a Promise when `request()` is called. There is no need to wrap the result of `res.statusCode === 200` in another Promise and return it.

###### Method 2
```js
return request(this.getUrl(filepath)).then(res => {
    Promise.resolve(res.statusCode === 200);
});
// Promise -> ?
```
This is completely wrong. You receive a Promise which remains in the pending state forever. Why? Because in the `.then()` block, you never return the Promise you got through calling `Promise.resolve()`. To word it simpler: You're waiting for a Promise that was created, but would never be returned. Looks like something I wouldn't want to do!

###### Method 3
```js
return request(this.getUrl(filepath)).then(res => {
    return res.statusCode === 200;
});
// Promise -> boolean
```
This one is correct, and also the most simplest out of all the methods. It returns a Promise, which would return the result of the `res.statusCode === 200`. It's as straightforward as can be.

###### Method 4
```js
return new Promise((resolve, reject) => {
    request(this.getUrl(filepath)).then(res => {
        resolve(res.statusCode === 200);
    };
});
// Promise -> boolean
```
This one works, but is unnecessarily complicated. Here, you are returning a Promise. In that Promise, `request()` is called, which returns another Promise. You handle the result from `request()` in the `.then()` block (which `resolve`s the value). Also, an edge case to consider: what happens if an error is thrown when you call `request()`? The error is never handled, and the Promise remains in the pending state forever. This method is actually an **anti-pattern** &mdash; it's been discussed before on [Stack Overflow](https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it).

Out of all the demonstrated methods above, Method 3 is best. Why? Because it was both **correct** and **simple**. Promises, if not kept in check, will get really messy really quickly. I learned this from making [ghost-github](https://github.com/ifvictr/ghost-github). Initially, I had taken the fourth approach, but realized it wasn't the best way to approach promises. Try your best to keep everything simple when you're working with promises &mdash; your future self will thank you for it.

**TL;DR:** Use the first method if you want to be extra, second one if you want to be incorrect, third one if you want to become an awesome developer, and fourth one if you love to make things harder for yourself.