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

