const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory
const forceSSL = function() {
  return function(req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  };
};

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 3001);
app.get('/card/:id/manifest.json', function(req, res) {
  const start_url = req.params.id ? '/card/'+req.params.id : '.';
  res.send(`{
      "short_name": "Card ${req.params.id}",
      "name": "Card ${req.params.id}",
      "start_url": "${start_url}",
      "theme_color": "#262C46",
      "background_color": "#262C46",
      "display": "standalone",
      "orientation": "portrait",
      "icons": [
        {
          "src": "/assets/icons/stack-logo-512x.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    }
    `);
});
const htmlFile = fs.readFileSync(__dirname+'/dist/index.html', 'utf8');
app.use(express.static(__dirname + '/dist'));
app.get('/card/:id', function(req, res) {
  res.send(htmlFile.replace('manifest.json','card/'+req.params.id+'/manifest.json'));
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});