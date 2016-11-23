// Let us get the json

$.getJSON( "epl.json", function( data ) {
  var items = [];
  
  JSON.stringify(data);
  
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    //"class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});