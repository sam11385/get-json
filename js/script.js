$(document).ready(function(){
  // Click nav items to display sections
  $('.nav-strava').click(function() {
    $('body').addClass('strava');
  })

  // strava
  if ($('body').hasClass('strava')) {
    var samId = 10095088;
    var dadId = 20146501;
    var key = '237bdb3d2bf2cd7c036b588e2890d7e14565c048';
    // Get an athletes activities
    var stravaActivities = 'https://www.strava.com/api/v3/athlete/activities?access_token='+key+'';
    // Get athletes profile information
    var stravaAthletes = 'https://www.strava.com/api/v3/athletes/'+samId+'?access_token='+key+'';
    //Get athletes stats
    var stravaStats = 'https://www.strava.com/api/v3/athletes/'+samId+'/stats?access_token='+key+'';
    // convert meters to miles
    var dist = 0.000621371;

    $.getJSON(stravaActivities, function(data){
      for (var i in data) {
        var distance = data[i].distance;
        // initialize a date format, convert it to a normal date
        var initDate = new Date(data[i].start_date);
        var day = initDate.getDate();
        var month = initDate.getMonth();
        var year = initDate.getFullYear();
        var stravaDate = (month+1) + "/" + day + "/" + year;
        var movingTime = data[i].moving_time / 60;
        var movingRnd = Math.round( movingTime * 10 ) / 10;
        var rideName = data[i].name;
        var rndDistance = Math.round(distance * dist * 10) / 10;
        var speed = data[i].average_speed;
        var spdConvert = speed * 2.23694;
        var rndSpeedConv = Math.round( spdConvert * 10 ) / 10;
        $('.rides').append('<div class="ride"><div class="ride-name">' + rideName + '</div><div class="ride-date">Date: ' + stravaDate + ' </div> <div class="ride-distance">Distance: ' + rndDistance + ' miles</div><div class="spd">Avg Speed: ' + rndSpeedConv + ' mph</div> <div class="moving">Time: ' + movingRnd + ' minutes</div></div>');
      }

    });

    $.getJSON(stravaStats, function(data){
      // Longest ride
      var longestRide = data.biggest_ride_distance * dist;
      // year to date rides
      var ytdRides = data.ytd_ride_totals.count;
      var ytdDist = Math.round(data.ytd_ride_totals.distance * dist * 10) / 10;
      var ytdMoveTime = data.ytd_ride_totals.moving_time / 60;
      var goalPercent = Math.floor((ytdDist / 1000) * 100);
      // All time rides
      var allRides = data.all_ride_totals.count;
      var allDistance = Math.round(data.all_ride_totals.distance * dist * 10) / 10;
      var allMoveTime = data.all_ride_totals.moving_time / 60;
      var allTimeLong = Math.round(data.biggest_ride_distance * dist * 10) / 10;

      $('.stats').append('<div class="stat"><div class="ytd"><h4>This Year:</h4><div class="ytd-count">2017 Rides: '+ytdRides+'</div><div class="ytd-dist">2017 Distance: '+ytdDist+' miles</div><div class="goal">2017 goal: 1000 miles <div>'+goalPercent+'% of the way to goal</div></div></div></div><div class="stat"><div class="ytd"><h4>All Time:</h4><div>All Time Rides: '+allRides+'</div><div>All Time Distance: '+allDistance+' miles</div><div>Longest Ride: '+allTimeLong+' miles</div></div></div>')
    });
  }


  // Brewery
  if ($('body').hasClass('brewery')) {
    var url = 'https://api.punkapi.com/v2/beers';

  	$.getJSON(url, function(data){
      for (i = 0; i < data.beers.length; i++) {
        var name = data.beers[i].name;
        var abv = data.beers[i].abv;
        var descript = data.beers[i].descript;
      }
  	});
  }


  // zomato
  if ($('body').hasClass('zomato')) {
    $('#text_value').click(function() {
      var text_value = $("#text").val();
      if(text_value=='') {
         alert("Enter A Food Type In Input Field");
      } else {
        var city = text_value;
        var zomKey = '2baec02eae04283237c811b12ea1c01e';
        var zomUrl = 'https://developers.zomato.com/api/v2.1/search?entity_type=city&q='+city+'&apikey='+zomKey+'';

        $.getJSON(zomUrl, function(data){
          for ( var i in data.restaurants) {
            var resRate = data.restaurants[i].restaurant.user_rating.rating_text;
            var resName = data.restaurants[i].restaurant.name;
            var hood = data.restaurants[i].restaurant.location.locality;
            var menu = data.restaurants[i].restaurant.menu_url;
            var featImg = data.restaurants[i].restaurant.featured_image;
            $('.restaurants').append('<div class="resname"><h2>'+resName+'</h2> <div>(' + hood + ')</div> <div> <img src="'+ featImg +'"> </div> <div>Rating: ' + resRate + '</div> <div><a href="'+ menu+'">Menu</a></div></div>');
          }
        });
      }

    });
  }

  // Stocks
  if ($('body').hasClass('stocks')) {
    $('.stocks .card').hide()
    $('#stock_value').click(function(){
      var stockValue = $("#stock").val();
      $('.stocks .card').show()
      if(stockValue =='') {
         alert("Enter A Stock Symbol");
      } else {
        var symbol = stockValue;
        var dksStock = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
        $.getJSON(dksStock, function(data){
          $('.dks-name').append('<div>'+data.Name+'</div>');
          $('.dks-symbol').append('<div>'+data.Symbol+'</div>');
          $('.dks-price').append('<div>'+data.LastPrice+'</div>');
          $('.dks-ytd').append('<div>'+data.ChangeYTD+'</div>');
          $('.dks-high').append('<div>'+data.High+'</div>');
          $('.dks-low').append('<div>'+data.Low+'</div>');
          $('.dks-open').append('<div>'+data.Open+'</div>');
        });
      }
    });
  }

  // Weather
  if ($('body').hasClass('weather')) {
    var weatherCities = {
      atl: {
        weatherDiv: '.atl .wx span',
        iconDiv: '.atl .w-icon',
        tempDiv: '.atl .temp span',
        timeDiv: '.atl .clock span',
        timeZone: 'America/New_York',
        weatherUrl: 'http://api.openweathermap.org/data/2.5/weather?zip=30307,us&appid=6ba9fe7b01ace29efd87f6336dcd299b'
      },
      pit: {
        weatherDiv: '.pit .wx span',
        iconDiv: '.pit .w-icon',
        tempDiv: '.pit .temp span',
        timeDiv: '.pit .clock span',
        timeZone: 'America/New_York',
        weatherUrl: 'http://api.openweathermap.org/data/2.5/weather?zip=15108,us&appid=6ba9fe7b01ace29efd87f6336dcd299b'
      },
      sur: {
        weatherDiv: '.sur .wx span',
        iconDiv: '.sur .w-icon',
        tempDiv: '.sur .temp span',
        timeDiv: '.sur .clock span',
        timeZone: 'Asia/Colombo',
        weatherUrl: 'http://api.openweathermap.org/data/2.5/weather?q=Surat&appid=6ba9fe7b01ace29efd87f6336dcd299b'
      }
    }

    function ToFahrenheit(temp) {
      return (temp - 273) * 9 / 5 + 32;
    }

    for (var city in weatherCities) {

      (function (city) {
        var weatherUrl = weatherCities[city].weatherUrl;
        var weatherDiv = weatherCities[city].weatherDiv;
        var tempDiv = weatherCities[city].tempDiv;
        var iconDiv = weatherCities[city].iconDiv;

        $.getJSON(weatherUrl, function (data) {
          for (var i in data.main) {
            var temperature = data.main.temp.toFixed(0);
            $(tempDiv).html(ToFahrenheit(temperature));
          }

          for (var i in data.weather) {
            var id = data.weather[i].main;
            $(weatherDiv).html(id);
            $(iconDiv).append('<img alt="' + id + '" src="http://openweathermap.org/img/w/' + data.weather[i].icon + '.png" />');
          }
        });
      })(city);
    }
  }


  // Football data
  // key 02a9c4b69c5c44ec9d669383b7fdd698
  // League Table example: http://api.football-data.org/v1/competitions/398/leagueTable

  // Vehicle data
  // key 467ku67s5u2f7wmbgd6ax286
  // http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&state=new&api_key=

  // Example of getting all mazda vehicles
  // http://api.edmunds.com/api/vehicle/v2/mazda?fmt=json&api_key=467ku67s5u2f7wmbgd6ax286

  // Docs http://developer.edmunds.com/api-documentation/overview/

  if ($('body').hasClass('cars')) {

  }


  // TV Data
  // http://www.tvmaze.com/api
  // Example of getting a schedule for a given date: http://api.tvmaze.com/schedule?country=US&date=2014-12-01
  // Example of searching for a tv actor: http://api.tvmaze.com/search/people?q=tim-allen
  if ($('body').hasClass('tv')) {
    $('#text_value').click(function() {
      var text_value = $("#text").val();
      if(text_value=='') {
         alert("Enter A Show Input Field");
      } else {
        var shows = text_value;
        var tvShowsUrl = 'http://api.tvmaze.com/search/shows?q='+text_value+'';
        var tvActorUrl = 'http://api.tvmaze.com/search/people?q='+text_value+'';

        $.getJSON(tvShowsUrl, function(data){
          for ( var i in data ) {
            var show = data[i].show.name;
            //var showImg = data[i].show.image.original;
            var showSum = data[i].show.summary;
            //var showNetwork = data[i].show.network.name;
            $('.shows').append('<div class="show-card"><div class="show-name"><h5>'+show+'</h5></div><div>'+showSum+'</div></div>');
          };
        });

      }

    });
  }

  // NEWS - API Key: 1e92dc106d5b4734b5e11c359c8eb0e4
  // Example of news articles from Assoc Press: https://newsapi.org/v1/articles?source=associated-press&apiKey=1e92dc106d5b4734b5e11c359c8eb0e4
  // Link to sources: https://newsapi.org/v1/sources
  if ($('body').hasClass('news')) {
    var newsKey = '1e92dc106d5b4734b5e11c359c8eb0e4';
    var newsSourceUrl = 'https://newsapi.org/v1/sources?language=en';

    $('button').hide();
    $('.refresh').click(function(){
      location.reload();
    });
    $('.layout').click(function(){
      $('.stories').toggleClass('full');
    });

    $.getJSON(newsSourceUrl, function(data){
      for (var i in data.sources){
        var newsSource = data.sources[i].name;
        var newsSourceId = data.sources[i].id;
        $('select').append('<option value="'+newsSourceId+'">'+newsSource+'</option>');
      }

      $('select').on('change', function (e){
        $('.selection').fadeOut();
        $('button').fadeIn();
        $('button').click(function() {
          $('.news-nav').toggleClass('active');
        });
        $('.stories').fadeIn();
        var theSource = $(this).val();
        var newsArticlesUrl = 'https://newsapi.org/v1/articles?source='+theSource+'&apiKey='+newsKey+'';
        $.getJSON(newsArticlesUrl, function(data){
          for (var i in data.articles){
            const articleAuthor = data.articles[i].author;
            const articleTitle = data.articles[i].title;
            const articleDescription = data.articles[i].description;
            const articleStoryUrl = data.articles[i].url;
            const articleUrlToImage = data.articles[i].urlToImage;
            const articlePublished = data.articles[i].publishedAt;
            $('.stories').append('<div class="story"><div class="title"><h2>'+articleTitle+'</h2></div><div class="description"><p>'+articleDescription+'</p></div><div class="article-link"><a href="'+articleStoryUrl+'" target="_blank">Full Story</a></div></div>');
          }
        });
      });
    });
  }

});
