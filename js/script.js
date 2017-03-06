$(document).ready(function(){

  var key = '237bdb3d2bf2cd7c036b588e2890d7e14565c048';
  var url = 'https://www.strava.com/api/v3/athlete/activities?access_token='+key+'';

  $.getJSON(url, function(data){
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

});
