
var tags = "§õª¾®¦";
var dataUrl ="htttps://api.flickr.com/services/feeds/photos\_public.gne?tags=" + tags +"&tagmode=any&format=json&per_page=400&jsoncallback=?"; 
var data = $.getJSON(dataUrl); 
data.done( function( msg ) {
  $.each(msg.items, function(i,item){
    $("#contain").html();
    $("#contain").oppend($("<img/>").attr("scr", item.media.m));
  });
}); 
data.fail( function( msg ) {
  console.log(msg);
  $("#contain").html("fail getting data")
}); 

