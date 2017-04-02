$(document).ready(function(){
  // Click nav items to display sections
  $('.nav-strava').click(function() {
    $('body').addClass('strava');
  })

  // strava
  if ($('body').hasClass('strava')) {
    const samId = 10095088;
    const dadId = 20146501;
    const key = '237bdb3d2bf2cd7c036b588e2890d7e14565c048';
    // Get an athletes activities
    const stravaActivities = 'https://www.strava.com/api/v3/athlete/activities?access_token='+key+'';
    // Get athletes profile information
    const stravaAthletes = 'https://www.strava.com/api/v3/athletes/'+samId+'?access_token='+key+'';
    //Get athletes stats
    const stravaStats = 'https://www.strava.com/api/v3/athletes/'+samId+'/stats?access_token='+key+'';
    // convert meters to miles
    const dist = 0.000621371;

    $.getJSON(stravaActivities, function(data){
      for (let i = 0; i < data.length; i++) {
        const distance = data[i].distance;
        // initialize a date format, convert it to a normal date
        const initDate = new Date(data[i].start_date);
        const day = initDate.getDate();
        const month = initDate.getMonth();
        const year = initDate.getFullYear();
        const stravaDate = (month+1) + "/" + day + "/" + year;
        const movingTime = data[i].moving_time / 60;
        const movingRnd = Math.round( movingTime * 10 ) / 10;
        const rideName = data[i].name;
        const rndDistance = Math.round(distance * dist * 10) / 10;
        const speed = data[i].average_speed;
        const spdConvert = speed * 2.23694;
        const rndSpeedConv = Math.round( spdConvert * 10 ) / 10;
        $('.rides').append('<div class="ride"><div class="ride-name">' + rideName + '</div><div class="ride-date">Date: ' + stravaDate + ' </div> <div class="ride-distance">Distance: ' + rndDistance + ' miles</div><div class="spd">Avg Speed: ' + rndSpeedConv + ' mph</div> <div class="moving">Time: ' + movingRnd + ' minutes</div></div>');
      }

    });

    $.getJSON(stravaStats, function(data){
      // Longest ride
      const longestRide = data.biggest_ride_distance * dist;
      // year to date rides
      const ytdRides = data.ytd_ride_totals.count;
      const ytdDist = Math.round(data.ytd_ride_totals.distance * dist * 10) / 10;
      const ytdMoveTime = data.ytd_ride_totals.moving_time / 60;
      const goalPercent = Math.floor((ytdDist / 1000) * 100);
      // All time rides
      const allRides = data.all_ride_totals.count;
      const allDistance = Math.round(data.all_ride_totals.distance * dist * 10) / 10;
      const allMoveTime = data.all_ride_totals.moving_time / 60;
      const allTimeLong = Math.round(data.biggest_ride_distance * dist * 10) / 10;

      $('.stats').append('<div class="stat"><div class="ytd"><h4>This Year:</h4><div class="ytd-count">2017 Rides: '+ytdRides+'</div><div class="ytd-dist">2017 Distance: '+ytdDist+' miles</div><div class="goal">2017 goal: 1000 miles <div>'+goalPercent+'% of the way to goal</div></div></div></div><div class="stat"><div class="ytd"><h4>All Time:</h4><div>All Time Rides: '+allRides+'</div><div>All Time Distance: '+allDistance+' miles</div><div>Longest Ride: '+allTimeLong+' miles</div></div></div>')
    });
  }


  // Brewery
  if ($('body').hasClass('brewery')) {
    var url = 'https://api.punkapi.com/v2/beers';

  	$.getJSON(url, function(data){
      for (let i = 0; i < data.beers.length; i++) {
        var name = data.beers[i].name;
        var abv = data.beers[i].abv;
        var descript = data.beers[i].descript;
      }
  	});
  }


  // zomato
  if ($('body').hasClass('zomato')) {
    $('#text_value').click(function() {
      const text_value = $("#text").val();
      if(text_value=='') {
         alert("Enter A Food Type In Input Field");
      } else {
        const city = text_value;
        const zomKey = '2baec02eae04283237c811b12ea1c01e';
        const zomUrl = 'https://developers.zomato.com/api/v2.1/search?entity_type=city&q='+city+'&apikey='+zomKey+'';

        $.getJSON(zomUrl, function(data){
          for ( let i = 0; i < data.restaurants.length; i++ ) {
            const resRate = data.restaurants[i].restaurant.user_rating.rating_text;
            const resName = data.restaurants[i].restaurant.name;
            const hood = data.restaurants[i].restaurant.location.locality;
            const menu = data.restaurants[i].restaurant.menu_url;
            const featImg = data.restaurants[i].restaurant.featured_image;
            $('.restaurants').append('<div class="resname"><h2>'+resName+'</h2> <div>(' + hood + ')</div> <div> <img src="'+ featImg +'"> </div> <div>Rating: ' + resRate + '</div> <div><a href="'+ menu+'">Menu</a></div></div>');
          }
        });
      }

    });
  }

  // Stocks
  if ($('body').hasClass('stocks')) {
    const symbol = 'dks';
    const stockUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(stockUrl, function(data){
      $('.'+symbol+'-name').append('<div>'+data.Name+'</div>');
      $('.'+symbol+'-symbol').append('<div>'+data.Symbol+'</div>');
      $('.'+symbol+'-price').append('<div>'+data.LastPrice+'</div>');
      $('.'+symbol+'-ytd').append('<div>'+data.ChangeYTD+'</div>');
      $('.'+symbol+'-high').append('<div>'+data.High+'</div>');
      $('.'+symbol+'-low').append('<div>'+data.Low+'</div>');
      $('.'+symbol+'-open').append('<div>'+data.Open+'</div>');
    });

    // const stockReq = new XMLHttpRequest();
    // stockReq.open('GET','http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=dks&callback=?',true)
    // stockReq.onload = function() {
    //   const stocks = jsonp.parse(stockReq.responseText);
    //   console.log(stocks);
    // }
    // stockReq.send();

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

  if ($('body').hasClass('soccer')) {
    const soccerKey = '02a9c4b69c5c44ec9d669383b7fdd698';

    $.ajax({
      headers: { 'X-Auth-Token': soccerKey },
      url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource
      var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      var teamId = res[1];
      console.log(teamId);
    });
  }

  // Vehicle data
  // key 467ku67s5u2f7wmbgd6ax286
  // new key via mashery h3h3u35545ntgcyzg2k2smvv
  // http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&state=new&api_key=

  // Example of getting all mazda vehicles
  // http://api.edmunds.com/api/vehicle/v2/mazda?fmt=json&api_key=467ku67s5u2f7wmbgd6ax286

  // Docs http://developer.edmunds.com/api-documentation/overview/
  if ($('body').hasClass('cars')) {
    const carKey = '467ku67s5u2f7wmbgd6ax286';
    const carMakesUrl = 'http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key='+carKey+'';

    $('.refresh').click(function(){
      location.reload();
    });

    $.getJSON(carMakesUrl, function(data){

      for (var i in data.makes){
        var carMake = data.makes[i].name;
        var carValue = data.makes[i].niceName;
        $('select').append('<option value="'+carValue+'">'+carMake+'</option>');
      }
    });
    $('select').on('change', function (e){
      var theCars = $(this).val();
      var carMakeUrl = 'http://api.edmunds.com/api/vehicle/v2/'+theCars+'?fmt=json&api_key='+carKey+'';
      $.getJSON(carMakeUrl, function(data){
        for (var i in data.models){
          var carModels = data.models[i].name;
          $('.car-models').append('<div class="model">'+carModels+'</div>');
        }
      });

    });
  }


  // TV Data
  // http://www.tvmaze.com/api
  // Example of getting a schedule for a given date: http://api.tvmaze.com/schedule?country=US&date=2014-12-01
  // Example of searching for a tv actor: http://api.tvmaze.com/search/people?q=tim-allen
  if ($('body').hasClass('tv')) {
    $('#text_value').click(function() {
      const text_value = $("#text").val();
      if(text_value=='') {
         alert("Enter A Show Input Field");
      } else {
        const shows = text_value;
        const tvShowsUrl = 'http://api.tvmaze.com/search/shows?q='+text_value+'';
        const tvActorUrl = 'http://api.tvmaze.com/search/people?q='+text_value+'';

        $.getJSON(tvShowsUrl, function(data){
          for ( let i = 0; i < data.length; i++ ) {
            const show = data[i].show.name;
            //const showImg = data[i].show.image.original;
            const showSum = data[i].show.summary;
            //const showNetwork = data[i].show.network.name;
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
    const newsKey = '1e92dc106d5b4734b5e11c359c8eb0e4';
    const newsSourceUrl = 'https://newsapi.org/v1/sources?language=en';

    $('button').hide();
    $('.refresh').click(function(){
      location.reload();
    });
    $('.layout').click(function(){
      $('.stories').toggleClass('full');
    });

    $.getJSON(newsSourceUrl, function(data){
      for (var i in data.sources){
        const newsSource = data.sources[i].name;
        const newsSourceId = data.sources[i].id;
        $('select').append('<option value="'+newsSourceId+'">'+newsSource+'</option>');
      }

      $('select').on('change', function (e){
        $('.selection').fadeOut();
        $('button').fadeIn();
        $('button').click(function() {
          $('.news-nav').toggleClass('active');
        });
        $('.stories').fadeIn();
        const theSource = $(this).val();
        const newsArticlesUrl = 'https://newsapi.org/v1/articles?source='+theSource+'&apiKey='+newsKey+'';
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

  // Random user API
  if ($('body').hasClass('users')){
    const userUrl = 'https://randomuser.me/api/?results=10';
    $.getJSON(userUrl, function(data){
      console.log(data);
    });

  }

  // NYTimes api
  // example: https://api.nytimes.com/svc/search/v2/articlesearch.json?format=json&api-key=e8948383f1d941adb668209fcb229b35
  // key = e8948383f1d941adb668209fcb229b35

  // search example = http://api.nytimes.com/svc/search/v2/articlesearch.json?q=soccer&api-key=e8948383f1d941adb668209fcb229b35
  if ($('body').hasClass('nytimes')){
    $('.nyt-submit').click(function(){
      const nytSearchVal = $('.nyt-search').val();
      if (nytSearchVal=='') {
        alert('Search for something.')
      } else {
        const nytKey = 'e8948383f1d941adb668209fcb229b35';
        const nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?format=json&api-key='+nytKey+'';
        const nytSearchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+nytSearchVal+'&api-key='+nytKey+'';
        $.getJSON(nytSearchUrl, function(data){
          for (let i = 0; i < data.response.docs.length; i++){
            const nytSnippet = data.response.docs[i].snippet;
            $('.nytimes-news').append('<div>'+nytSnippet+'</div>');
          }
        });
      }
    });
  }


  // Flickr
  // Key: fe2b00007676770451fa8b4bb61bdef2
  // Secret: 7d7066088738ef96

});
