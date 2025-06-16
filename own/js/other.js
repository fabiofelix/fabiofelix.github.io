(function($) 
{
  if(navigator.language.match("pt") != null && window.location.pathname.match("pt") == null )
    window.location.replace(window.location + "pt-br")
  // else if(navigator.language.match("pt") == null && window.location.pathname.match("pt") != null )    
  //   window.location.replace(window.location.href.split("pt")[0])

  if (navigator.language.match("pt") != null)
  {
    $('.image.thumb').toggleClass('pt-br');    
  }    

})(jQuery);