'use strict';

const express = require('express');
const https = require('https');
const app = express();
const config = require(__dirname + '/config.js');
const positivStatusCodes = [200, 301, 302];

// Static Asset directory
app.use(express.static('public'));

// Generic error responder.
const sendErrorResponse = (res) => {
  res.sendFile(__dirname + '/public/error.html');
}

/*
 * By default redirect to GitHub Repo URL
 */
app.get('/:repo_url', (req, res) => {
  let url = config.url + req.params.repo_url;

  var options = {
    host: config.host,
    path: '/' + config.user + '/' + req.params.repo_url + '/'
  };

  https.get(options, function(response) {
    let status = response.statusCode;
      if(positivStatusCodes.indexOf(status) > -1) {
        res.redirect('https://' + options.host + options.path);
        return;
      }
      sendErrorResponse(res);
      return;
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
    sendErrorResponse(res)
  });
});

/*
 * Redirect to a GitHub Pages URL
 */
app.get('/ghp/:repo', (req, res) => {
    let url = config.url + req.params.repo_url;
    var options = {
      host: config.host_github_pages,
      path: '/' + req.params.repo + '/'
    };

    https.get(options, function(response) {
      let status = response.statusCode;
      console.log("Got response: " + response.statusCode);
        if(positivStatusCodes.indexOf(status) > -1) {
          res.redirect('https://' + options.host + options.path);
          return;
        }
        sendErrorResponse(res);
        return;
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
      sendErrorResponse(res)
    });
})

app.listen(config.port);
