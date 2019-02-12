// Hide Header on on scroll down
var didScroll;
window.lastScrollTop = 0;
var delta = 5;
var navbarHeight = 125;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    console.log(st);
    
    // Make sure they scroll more than delta
    if(Math.abs(window.lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > window.lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
        console.log("DOWN");
    } else {
        // Scroll Up
        console.log("UP");
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    window.lastScrollTop = st;
}

jQuery(function() {
    $("button").click(function(e) {
        var success = true;
        $("select").each(function() {
            if ($(this).val() == "Default") {
                success = false;
            }
        });

        if (!success) {
            e.preventDefault();
            alert("Please fill all fields correctly.");
        }
    });

    $(window).resize(function() {
        $(".col-map").css("height", $(".col-contact").height());
    });

    $(".col-map").css("height", $(".col-contact").height());
});