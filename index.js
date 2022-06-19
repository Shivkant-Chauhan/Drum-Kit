document.addEventListener("keypress", function(event){
    sound(event.key);
});


function sound(letter){
    console.log(letter);

    switch (letter){
        case 'a':
            $(".a").addClass("glow");
            setInterval(function(){$(".a").removeClass("glow");}, 500);
            var audio = new Audio("nuhat-jr-ope.wav");
            audio.play();
        break;


        case 's':
            $(".s").addClass("glow");
            setInterval(function(){$(".s").removeClass("glow");}, 500);
            var audio = new Audio("newjr-19.wav");
            audio.play();
        break;


        case 'd':
            $(".d").addClass("glow");
            setInterval(function(){$(".d").removeClass("glow");}, 500);
            var audio = new Audio("mc-snare-4b.wav");
            audio.play();
        break;


        case 'f':
            $(".f").addClass("glow");
            setInterval(function(){$(".f").removeClass("glow");}, 500);
            var audio = new Audio("unnamed-ws-2.wav");
            audio.play();
        break;


        case 'g':
            $(".g").addClass("glow");
            setInterval(function(){$(".g").removeClass("glow");}, 500);
            var audio = new Audio("emt-rimshot.wav");
            audio.play();
        break;


        case 'h':
            $(".h").addClass("glow");
            setInterval(function(){$(".h").removeClass("glow");}, 500);
            var audio = new Audio("hi-hat-open.wav");
            audio.play();
        break;


        case 'j':
            $(".j").addClass("glow");
            setInterval(function(){$(".j").removeClass("glow");}, 500);
            var audio = new Audio("new-kick-7.wav");
            audio.play();
        break;


        case 'k':
            $(".k").addClass("glow");
            setInterval(function(){$(".k").removeClass("glow");}, 500);
            var audio = new Audio("newjr-13.wav");
            audio.play();
        break;


        case 'l':
            $(".l").addClass("glow");
            setInterval(function(){$(".l").removeClass("glow");}, 500);
            var audio = new Audio("reindeer-rok.wav");
            audio.play();
        break;
    }
}