var today = new Date();
var locale = "en-us";
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

mm = today.toLocaleString(locale, { month: "long" });


today = dd+' '+mm+' '+yyyy;

$(function(){
    $('.date').on('mouseenter', function(){
        $(this).text(today);
    });
    $('.date').on('mouseleave', function(){
        $(this).text('every.date.counts');
    });
    $('.st-menu > ul > li > a').on('click', function(){
        $(this).children('i').toggleClass('fa-angle-down');
       $(this).siblings('.submenu').slideToggle(300); 
    });
    $('.add-to').on('click', function(){
       $(this).html('added to bag'); 
    });
    $('.dropdown-select-slide > a').on('mouseenter', function(){
        $(this).children('i').removeClass('fa-angle-down');
        $(this).siblings('.dropdown-menu-select').slideDown(300);
    });
    $('.dropdown-select-slide').on('mouseleave', function(){
        $(this).children('a').find('i').addClass('fa-angle-down');
        $(this).children('.dropdown-menu-select').slideUp(300);
    });
    
    $('.search a').on('click', function(){
        $('.search-box-suggestions').hide();
       $('.search-box').toggle(); 
    });
    $('.search-box input').keypress(function(){
        $('.search-box-suggestions').show();
    });
    $('.close-box').on('click', function(){
       $(this).parent().hide(); 
    });
    $('.shopping-bag').on('click', function(){
       $('.shopping-cart-wrapper').show(); 
    });
//    $('.small-menu ul > li > a').on('mouseenter', function(){
//        $(this).siblings('.dropdown-nav').show();
//    });
//    $('.dropdown-nav').on('mouseleave', function(){
//        $('.dropdown-nav').hide();
//        $(this).hide();
//    });
    
    
});