(function($) 
{
  if(navigator.language.match("pt") != null && window.location.pathname.match("pt") == null )
    window.location.replace(window.location + "pt-br")
  else if(navigator.language.match("pt") == null && window.location.pathname.match("pt") != null )    
    window.location.replace(window.location.href.split("pt")[0])

  if (navigator.language.match("pt") != null)
  {
    $('.image.thumb').toggleClass('pt-br');    
  }    

  $(".more-less-button").click(function(evnt)
  {
    evnt.preventDefault();

    var more_desc = "More",
        less_desc = "Less";

    if (navigator.language.match("pt") != null)
    {
      more_desc = "Mais"
      less_desc = "Menos"
    }

    var more = $(this).html() == more_desc;
    var name = $(this).attr("id").split("-")[3];
    var div_name = "#more-less-div-" + name;
    // var div_name = "#more-less-div"
    var has_more = $(div_name).html() !== "";

    if(has_more)
    {
      if(more)
      {
        $(div_name).slideDown();
        $(this).html(less_desc);
      }
      else
      {
        $(div_name).slideUp();
        $(this).html(more_desc);
      }
    }

  })
})(jQuery);