$(document).ready(function(){

  // strava
  if ($('body').hasClass('strava')) {
    var samId = 10095088;
    var dadId = 20146501;
    var key = '237bdb3d2bf2cd7c036b588e2890d7e14565c048';
    // Get an athlets activities
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
        // $('select').append('<option value="'+name+'">'+name+'</option>');

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

  // Football data
  // key 02a9c4b69c5c44ec9d669383b7fdd698



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
  // Example of getting some shows: http://api.tvmaze.com/search/shows?q=last-man
  // Example of getting a schedule for a given date: http://api.tvmaze.com/schedule?country=US&date=2014-12-01
  // Example of searching for a tv actor: http://api.tvmaze.com/search/people?q=tim-allen
  if ($('body').hasClass('tv')) {

  }
});
