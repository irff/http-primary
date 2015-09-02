var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/json', function(request, response) {
  response.json({
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


