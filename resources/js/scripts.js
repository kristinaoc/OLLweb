cssVars(); 


//open nav


$('.nav-prompt').click(function() {

    if ($('.nav-inner').attr('aria-expanded') == 'false') {

        $('.nav-inner').attr('aria-expanded', 'true')

    } else {
        $('.nav-inner').attr('aria-expanded', 'false');
    }


//changed the open/close navigation text to the three horizontal lines icon, so commented out below logic.
 //   if ($('.nav-prompt').text() == 'Open Navigation') {

  //      $('.nav-prompt').text('Close Navigation');

  //  } else {
 //       $('.nav-prompt').text('Open Navigation');
 //   }




})

//submenu dropdowns 

$('.dropbtn').click(function() {

    if ($('.dropdown-content').attr('aria-expanded') == 'false') {

        $('.dropdown-content').attr('aria-expanded', 'true')

    } else {
        $('.dropdown-content').attr('aria-expanded', 'false');
    }


})
 //btn1

$('.dropbtn1').click(function() {

    if ($('.dropdown1-content').attr('aria-expanded') == 'false') {

        $('.dropdown1-content').attr('aria-expanded', 'true')

    } else {
        $('.dropdown1-content').attr('aria-expanded', 'false');
    }


})

//btn2

$('.dropbtn2').click(function() {

    if ($('.dropdown2-content').attr('aria-expanded') == 'false') {

        $('.dropdown2-content').attr('aria-expanded', 'true')

    } else {
        $('.dropdown2-content').attr('aria-expanded', 'false');
    }


})

//btn3
$('.dropbtn3').click(function() {

    if ($('.dropdown3-content').attr('aria-expanded') == 'false') {

        $('.dropdown3-content').attr('aria-expanded', 'true')

    } else {
        $('.dropdown3-content').attr('aria-expanded', 'false');
    }


})

//btn4
$('.dropbtn4').click(function() {

    if ($('.dropdown4-content').attr('aria-expanded') == 'false') {

        $('.dropdown4-content').attr('aria-expanded', 'true')

    } else {
        $('.dropdown4-content').attr('aria-expanded', 'false');
    }


})





// nav active class


function activeMenu () {
    var url = window.location.href;


    $('.nav-inner a').filter(function( )  {
        return this.href == url;

    }).addClass('active');
}


activeMenu(); 




// image gallery


function imageGallery()  {

    if (!$('.image-gallery').length) {

        return;

    }

    $('.image-gallery a').simpleLightbox();
}


imageGallery(); 

