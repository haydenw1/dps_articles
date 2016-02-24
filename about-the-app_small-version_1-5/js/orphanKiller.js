$( document ).ready(function(){
  //searches every <p> tag to find the last space between words with a regex, and
  //adds a non-breaking space there
  //*src: http://www.webdevdoor.com/jquery/preventing-widows-websites-jquery/
  $('p').each(function(){
      var string = $(this).html();
      //console.log(string);
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
  });
});
