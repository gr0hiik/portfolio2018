$(document).ready(function() {
    
    window.onscroll = function(){
           
        if (window.pageYOffset > 300) {
            $('nav').removeClass('nav-hide');
        } else {
            $('nav').addClass('nav-hide');
        }
        
    };
    
    var date = new Date();
    var currentYear = date.getFullYear();
    
    $('.currentYear').html(currentYear);
    
    AOS.init();
});