$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(2000, function(){
            $('#btnFadeOut').text("It's Gone");
        }); // the second callback function loads after 2 seconds
    });
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(2000);
    });
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000);
    });

    $('#btnSlideDown').click(function(){
        $('#box').slideDown(2000);
    });
    $('#btnSlideUp').click(function(){
        $('#box').slideUp(2000);
    });
    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(2000);
    });
    $('#btnStop').click(function(){
        $('#box').stop();
    });

    $('#btnMoveRight').click(function(){
        $('#box2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '0.5'
        });
    });
    $('#btnMoveLeft').click(function(){
        $('#box2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '1'
        });
    });
    $('#btnMoveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left: 0,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    });
});