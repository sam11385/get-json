$(document).ready(function() {
  //function to get input value
  $('#text_value').click(function() {
    var text_value = $("#text").val();
    if(text_value=='') {
  	   alert("Enter Some Text In Input Field");
  	}
    else{
  		//$('.display').append(text_value);
      var whichWeather = text_value;
      var appId = '6ba9fe7b01ace29efd87f6336dcd299b';

      var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+whichWeather+'&appid='+appId+'';

      $.getJSON(weatherUrl, function(data){
        $('.temp-city').html(data.name);
        $('.temp-country').html(data.weather);
      });

      $('#text_reset').click(function() {
    	  $('#text').val('');
        weatherUrl.val('');
        //$('.display').html('');
      });
  	}
  });

  var url ="http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6ba9fe7b01ace29efd87f6336dcd299b"
  $.getJSON(url, function(data){
    console.log(data.weather[1]);
  });

});
