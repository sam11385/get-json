// Let us get the json
(function() {

	var apiData = "epl.json";
	$.getJSON( apiData, {
		format: "json"
	})

	.done(function( data ) {
      $.each( data.items, function( key, val ) {
        $( "<div>" ).attr( "src", item.media.m ).appendTo( "#list" );
        if ( i === 3 ) {
          return false;
        }
      });
    });


})();

	
// 	function( data ) {
//   	var items = [];
  
//   // JSON.stringify(data, function(key,val) {
//   // 	items.push( "<li id='" + key[0] + "'>" + val[0] + "</li>" );
//   // });
  
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key[0] + "'>" + val[0] + "</li>" );
//   });
 
//   $( "<ul/>", {
//     //"class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });




// (function() {
//   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

//   $.getJSON( flickerAPI, {
//     tags: "arsenal",
//     format: "json"
//   })
//     .done(function( data ) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//         if ( i === 3 ) {
//           return false;
//         }
//       });
//     });
// })();