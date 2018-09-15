---
name: "How to keep your Heroku dynos constantly awake"
slug: how-to-keep-your-heroku-dynos-constantly-awake
featured_image_url: null
created_at: "2018-01-14T06:42:38.000Z"
published_at: "2018-01-14T07:22:15.000Z"
featured_at: null
tags: []
---

As a user on Heroku's free tier, I know how annoying it is to deal with the 30-minute inactivity timeout imposed on dynos. I don't mind it when seldom used applications like my database manager goes to sleep, but I does affect me when it comes to critical applications like my blog. I need them to be online for as much as possible so that user visits don't bounce while waiting for the dyno to wake back up.

Heroku's documentation specifies that dynos automatically go to sleep after 30 minutes of inactivity (no one visited the site, no inbound requests, etc.). The solution would be to send a cURL request to it at an interval less than 30 minutes. Let's say for example that I have an application called `ghost-blog` and it's asleep. If I run:

```
curl https://ghost-blog.herokuapp.com
```

and wait a few seconds, the app will turn on. Now I don't want to have to manually run this command every ~20 minutes—it'll get tedious really fast. You would create a cron task by running `crontab -e` and appending the code below to the file:

```
*/15 * * * * curl https://ghost-blog.herokuapp.com > /dev/null
```

The above sends a GET request to `ghost-blog` every 15 minutes in the background. The output is discarded, so you don't see the HTML everytime it runs. You should modify the URL and interval to suit your own needs, and add as many cron jobs as needed to keep all your apps awake.

I would suggest using this on only one or two important applications as you only have a limited amount of hours per month (assuming you're on the free tier like me). My plan has 1,000 free hours a month, so it comfortably covers one always-on application.

_Do you also happen to use the Cloud9 IDE for development? I made a small CLI app that keeps your free-tier workspaces awake. Check it out [here](https://github.com/ifvictr/caffeine9)!_