(function($) 
{
  $("#more-less-button").click(function(evnt)
  {
    evnt.preventDefault();

    var more = $(this).html() == "More";
    var has_more = $("#more-less-div").html() !== "";

    if(has_more)
    {
      if(more)
      {
        $("#more-less-div").slideDown();
        $(this).html("Less");
      }
      else
      {
        $("#more-less-div").slideUp();
        $(this).html("More");
      }
    }

  })
})(jQuery);