(function($) {

    var img = $('img'),
        h2 = $('h2'),
        i = 0;

	// GreenSock Tween Max


    TweenMax.from(img, 3, {
        ease: Elastic.easeInOut.config(1.5, 0),
        x: "400%",
        onStart: onStart,
        onUpdate: onUpdate,
        onComplete: onComplete
    });


    TweenMax.from(h2, 4, {autoAlpha: 0, delay: 2});

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

})(jQuery);