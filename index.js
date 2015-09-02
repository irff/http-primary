var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.set('X-Action-Name', 'HTML').send('<html>\
    <head>\
      <title>Sample HTML</title>\
    </head>\
    <body>\
      <div class="header">\
        <h1 class="box">What\'s happening?</h1>\
      </div>\
      <p>Timestamp : ' + Date.now() + '</p>\
    </body>\
  </html>');
});

app.get('/json', function(request, response) {
  response.set('X-Action-Name', 'JSON').json({
    "handle" : "@irfan3",
    "name" :
      {
        "firstName" : "Tri",
        "lastName" : "Irfan"
      },
    "statistic" :
      {
        "tweetCount" : 32768,
        "followerCount" : 200,
        "followingCount" : 1600
      },
    "location" :
      {
        "geoLocation" :
          {
            "lat" : 37.776692,
            "long" : -122.4167819
          },
        "address" :
          {
            "houseNumber" : 1355,
            "streetName" : "Market Street",
            "city" : "San Francisco",
            "state" : "California",
            "postalCode" : 94103,
            "country" : "USA"
          }
      },
      "timestamp" : Date.now()
  });
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


