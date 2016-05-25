$(document).ready(function(){
	resizeDiv();
    equalheight('quote-content');
    equalheight('testimonial-item');
    
	$(window).bind('scroll', function () {
    if ($(window).scrollTop()) {
        $('.header-section').addClass('navbar-fixed-top');
    } else {
        $('.header-section').removeClass('navbar-fixed-top');
    }
	});
	$('.sroll-container-link a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate( {
        'scrollTop': $target.offset().top-60
    }, 1000, 'swing', function () {
        window.location.hash = target;
    } );
	} );
});

window.onresize = function(event) {
    $('#heroBanner').height('auto');
	resizeDiv();
    equalheight('quote-content');
    equalheight('testimonial-item');
}

function resizeDiv() {
	vph = $(window).height() - 59,
    hBanner = $('#heroBanner').height(),
    pst = 0;
    if(vph > hBanner && vph > 500){
        hBanner = vph;
        pst = 10;
    }else{
        hBanner = 'auto';
        pst = 5;
    }
	$('#heroBanner').height(hBanner);
    $('#heroBanner').css('padding-top', pst+'%');
}

function equalheight(el){
    var _el = $('.'+ el);
    var hMax = 0; 
    $.each( _el, function( key, value ) { 
        $(value).height('auto');
    });
    $.each( _el, function( key, value ) { 
        if($(value).height() > hMax){
            hMax = $(value).height();
        }
    });
    _el.height(hMax);
}    