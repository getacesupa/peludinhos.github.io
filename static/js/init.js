(function($){
  $(function(){
 
      $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
      
    
      $('.slider').slider();
    
      
    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space