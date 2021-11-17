(function($) 
{
  if(navigator.language.match("pt") != null && window.location.pathname.match("pt") == null )
    window.location.replace(window.location + "pt-BR")
  else if(navigator.language.match("pt") == null && window.location.pathname.match("pt") != null )    
    window.location.replace(window.location.href.split("pt")[0])

  $("#more-less-button").click(function(evnt)
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
    var has_more = $("#more-less-div").html() !== "";

    if(has_more)
    {
      if(more)
      {
        $("#more-less-div").slideDown();
        $(this).html(less_desc);
      }
      else
      {
        $("#more-less-div").slideUp();
        $(this).html(more_desc);
      }
    }

  })
})(jQuery);