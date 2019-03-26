$(document).ready(function () {
  AOS.init();

  var  menu_icon = document.querySelector(".menu_icon");
  var show = false;
  menu_icon.addEventListener("click", function(){
    if(!show)  
    {      
      document.querySelector(".navigation").classList.add("show");
      show = true;
    }
    else
    {
      document.querySelector(".navigation").classList.remove("show");
      show =  false;
    }
  })




})