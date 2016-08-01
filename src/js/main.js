(function($) {

    var img = $('img'),
        h2 = $('h2'),
        i = 0;

    // Set the url
    history.pushState("/", "/", "/greensock-git");

    var introAnimation = function() {

            i = 0;

            $(img).show()


            // GreenSock Tween Max
            TweenMax.from(img, 3, {
                ease: Elastic.easeInOut.config(1.5, 0),
                x: "400%",
                onStart: onStart,
                onUpdate: onUpdate,
                onComplete: onComplete
            });


            TweenMax.from(h2, 1, {autoAlpha: 0, delay: 2});

            function onStart() {
                console.log("Animation started!");
            }

            function onUpdate() {
                // console.log("Animation is in progress...");
                i++;

            }

            function onComplete() {
                $(h2).html("Animation completed with " + i + " steps");
                console.log("Animation completed!");
            }

    };
    introAnimation();

    $(h2).click(function(event) {
        // To prevent # being added to url
        event.preventDefault();
        $(this).html('');
        introAnimation();
    });

    $(img).click(function(event) {
        // To prevent # being added to url
        event.preventDefault();
        $(h2).html('');
        introAnimation();
    });

})(jQuery);