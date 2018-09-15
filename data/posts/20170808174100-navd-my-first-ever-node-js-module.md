---
name: "navd: My first-ever Node.js module"
slug: navd-my-first-ever-node-js-module
featured_image_url: https://cdn.ifvictr.com/images/blog.ifvictr.com/10/cover.png
created_at: "2017-08-07T05:21:54.000Z"
published_at: "2017-08-08T17:41:00.000Z"
featured_at: null
tags: []
---

In an effort to further my knowledge on Node.js, I decided to write a simple Node.js module. This would also be a chance to play around with ES6's syntax (because it's awesome).

## Problem
It was just another Sunday of my soon-to-end summer break. I was browsing a Node project when all of a sudden I see something like this:

```js
const app = require("../../app");
```

In this snippet, it's evident that `app.js` is in a directory two above that of which it is being required from. Now let's try a more obscure example. In only **one** glance, try counting how many directories this will go up:

```js
const app = require("../../../../../app");
```

Compared to the previous example, this one took a bit more time. But that was only five directories. What if someone needed to go up ten? What if they had to `require` multiple files that from far above? It gets _really_ ugly _really_ quick.

## Solution
I decided to make the most out of this &mdash; a chance to learn both the basics of Node.js module development and how to write unit tests with [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai). After coming up with the name **navd** and following a [pretty good guide on making modules for Node.js](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738), my code was ready:

```js
const path = require("path");

module.exports = {
    up: (steps, filepath) => {
        if(typeof steps !== "number"){
            throw new TypeError("steps must be a number");
        }
        if(typeof filepath !== "string"){
            throw new TypeError("filepath must be a string");
        }
        filepath = path.normalize(filepath);
        return path.join("../".repeat(steps), filepath);
    }
};
```

Along with my (fairly) simple tests:

```js
const expect = require("chai").expect;
const navd = require("./index");

describe("navd", () => {
    describe("up", () => {
        it("should fail without 'steps' parameter", () => {
            expect(() => navd.up(null, "dir/")).to.throw(TypeError);
        });
        it("should fail without 'filepath' parameter", () => {
            expect(() => navd.up(0, null)).to.throw(TypeError); 
        });
        it("should stay in dir/", () => {
            expect(navd.up(0, "dir/")).to.equal("dir/");
        });
        it("should move up one directory and into dir/", () => {
            expect(navd.up(1, "dir/")).to.equal("../dir/");
        });
    });
});
```

## Usage
The following code reads a file called `file.txt` from eight directories above it:

```js
const fs = require("fs");
const navd = require("navd");

// Not using navd
fs.readFile("../../../../../../../../file.txt", "utf8", (err, data) => {
    // Code here
});

// Using navd
fs.readFile(navd.up(8, "file.txt"), "utf8", (err, data) => {
    // Code here
});
```

...Ta-da! Instead of having to count how many, you just look at the first parameter of `navd.up`! Great for code skimmers!

## Publishing to npm
This process was actually _a lot_ easier than I thought it would be. There's literally no moderation you have to go through. I was able to claim the package name on [npm](https://www.npmjs.com/package/navd), so that's mine now.

## Final thoughts
This was fun &mdash; both for learning and a first. I do plan on continuing development on this and write more modules as I come up with new ideas. **Bonus:** navd is open-source on [GitHub](https://github.com/ifvictr/navd), so if you have any features you think would be a great addition to it, open a new issue there!