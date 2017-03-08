$(document).ready(function(){

  // strava
  var samId = 10095088;
  var dadId = 20146501;
  var key = '237bdb3d2bf2cd7c036b588e2890d7e14565c048';
  // Get an athlets activities
  var stravaActivitiesUrl = 'https://www.strava.com/api/v3/athlete/activities?access_token='+key+'';
  // Get athletes profile information
  var stravaAthletesUrl = 'https://www.strava.com/api/v3/athletes/'+samId+'?access_token='+key+'';
  //Get athletes stats
  var stravaStatsUrl = 'https://www.strava.com/api/v3/athletes/'+samId+'/stats?access_token='+key+'';



  $.getJSON(stravaActivitiesUrl, function(data){
    // use this var to convert meters to miles
    var dist = 0.000621371;

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
      var number = distance * dist;
      var rounded = Math.round( number * 10 ) / 10;
      var speed = data[i].average_speed;
      var spdConvert = speed * 2.23694;
      var rndSpeedConv = Math.round( spdConvert * 10 ) / 10;
      $('.rides').append('<div class="ride"><div class="ride-name">' + rideName + '</div><div class="ride-date">Date: ' + stravaDate + ' </div> <div class="ride-distance">Distance: ' + rounded + ' miles</div><div class="spd">Avg Speed: ' + rndSpeedConv + ' mph</div> <div class="moving">Time: ' + movingRnd + ' minutes</div></div>');
    }

  });

  // zomato
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

  // Stocks
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
});
