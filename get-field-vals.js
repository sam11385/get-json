$(document).ready(function() {
  //function to get input value
  $('#text_value').click(function() {
    var text_value = $("#text").val();
    if(text_value=='') {
  	   alert("Enter Some Text In Input Field");
  	}
    else{
      var whichWeather = text_value;
      var appId = '6ba9fe7b01ace29efd87f6336dcd299b';

      var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+whichWeather+'&appid='+appId+'';

      $.getJSON(weatherUrl, function(data){
        $('.temp-city').html(data.name);

        for ( var i in data.weather) {
      		var id = data.weather[i].main;
      		var name = data.weather[i].description;
      		$('.temp-weather').html(id);
      	}

        for ( var i in data.main) {
      		var temperature = data.main.temp.toFixed(0);
          $('.temp-temp').html((temperature - 273) * 9 / 5 + 32);
      	}

        $('#text_reset').click(function() {
      	  $('#text').val('');
          weatherUrl.val('');
        });

      });

      // $('#text_reset').click(function() {
    	//   $('#text').val('');
      //   weatherUrl.val('');
      // });
  	}
  });
});
