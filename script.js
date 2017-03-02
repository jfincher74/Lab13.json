$(document).ready(function(){ 
  
   $.get('https://www.reddit.com/r/aww/.json', function(rawwData){
     var rawwness = rawwData.data.children;
    for(var i=0; i<rawwness.length; i++){
      var thumbnail = rawwness[i].data.thumbnail;
      var title = rawwness[i].data.title;
      var author = rawwness[i].data.author;
      var score = rawwness[i].data.score;

      $('.reddit').append('<div><ul><li> Title:' + title +'</li><li> Author: '+ author + '</li><li> Score:    '+ score + '</li>' + '<img src="' + thumbnail + '"/></ul></div>');
    }
   });
});