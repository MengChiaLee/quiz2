var tags = "§õª¾®¦";
var dataUrl ="https://api.flickr.com/services/feeds/photos\_public.gne?tags=" + tags
+"&tagmode=any&format=json&per_page=400&jsoncallback=?"; 
var data = $.getJSON(dataUrl); 
data.done( function( msg ) { // just do it!
}); 
data.fail( function( msg ) {// just do it!
}); 