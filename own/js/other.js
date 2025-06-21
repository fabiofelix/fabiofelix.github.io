document.addEventListener("DOMContentLoaded", function()
{
  if(navigator.language.match("pt") != null && window.location.pathname.match("pt") == null )
    window.location.replace(window.location + "pt-br")
  // else if(navigator.language.match("pt") == null && window.location.pathname.match("pt") != null )    
  //   window.location.replace(window.location.href.split("pt")[0])

  let btn_desc_more = document.getElementById("desc_more");

  btn_desc_more.addEventListener("click", function(event, target)
  { 
    const pt_br = window.location.href.search("pt-br") > -1;
    const more  = pt_br ? "Mais" : "More";
    const less  = pt_br ? "Menos" : "Less";

    event.target.innerHTML = event.target.innerHTML === more ? less : more;
  });
});