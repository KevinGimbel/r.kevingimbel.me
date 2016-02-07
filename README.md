# r.kevingimbel.me

**r.kevingimbel.me**, short for redirect.kevingimbel.me, is an express app to check and redirect a requested URL to a repository or GitHub Page.

### How it works

The script takes whatever is set as parameter after `/` or `/ghp` and checks if a request made with node's `https` module would return a positive status (currently 200, 301 and 302). If so, the scrip redirects to the GitHub page or the GitHub Pages URL (if it exists).

### Why?!

Well, I am thinking of moving my GitHub hosted Website ([http://kevingimbel.com](http://kevingimbel.com)) back to my own server, yet I want to have rather beautiful links such as `kevingimbel.com/viewSwitcher` which would lead to the repository.

You can see the `server.js` file which does all the work for more information.

### Setup

Checkout the repo onto your server or copy the files over. Rename `config.sample.js` into `config.js` and fill out the relevant data. The host probably stays the same, the port depends on your hoster. `user` and `host_github_pages` are your GitHub user name and GitHub Pages url, e.g. [kevingimbel.github.io](https://kevingimbel.github.io).

```json
module.exports = {
  "user": "kevingimbel",
  "host": "github.com",
  "host_github_pages": "kevingimbel.github.io",
  "port": 1337
}
```

You can then customize the `error.html` file to represent your own error pages. Run `npm install` on your server and add a service or daemon to start the `server.js` script. This script needs to run from its own directory so you probably need to add a `cd path/to/script/source` before executing `node server.js`.

### Examples

Here are some real examples. You can play around with the live version on [r.kevingimbel.me](http://r.kevingimbel.me). Notice: There is no index so the default is "Cannot GET /".

Repository URLs:

* [r.kevingimbel.me/viewSwitcher](http://r.kevingimbel.me/viewSwitcher)
* [r.kevingimbel.me/LinedUp](http://r.kevingimbel.me/LinedUp)
* [r.kevingimbel.me/this-does-not-work](http://r.kevingimbel.me/this-does-not-work)
* [r.kevingimbel.me/vhost](http://r.kevingimbel.me/vhost)
* [r.kevingimbel.me/rms](http://r.kevingimbel.me/rms)

GitHub Pages URLs:

* [r.kevingimbel.me/ghp/viewSwitcher](http://r.kevingimbel.me/ghp/viewSwitcher)
* [r.kevingimbel.me/ghp/jekyll-project-page-starter-kit/](http://r.kevingimbel.me/ghp/jekyll-project-page-starter-kit/)
* [r.kevingimbel.me/ghp/nope-nothing-here](http://r.kevingimbel.me/ghp/nope-nothing-here)
