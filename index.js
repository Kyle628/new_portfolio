$(document).ready(function(){

    // switch to contact view

    $("#contact").click(function() {
        $("#shred_description").html('<h3>Email</h3><h3>kyjoconn@gmail.com</h3>');
        $("#shred_icon").html('<h3>Phone</h3><h3>1(209)485-8351</h3>');
        $("#gorilla").hide();
        $("#more-projects").hide();
        $("#shredjournal").css("background-color", "#f9db6d");
        $("#shred_description").css("background-color", "#f9db6d");
    });

    // switch to project view

    $("#projects").click(function() {
        $("#shred_description").html('<a href="shredjournal.html" style="text-decoration: none;"><h3>ShredJournal</h3><p>This was my most recent, and favorite project. Mainly, because I actually use it! Users can keep a journal like they normally would, but connection to surfline&#39s API autofills complicated weather conditions that would normally be very tedious to keep track of. Things like wind and swell direction are important for surfing, but boring to write about when you just caught the wave of your life!</p></a>');
        $("#shred_description").addClass("rounded-bottom");
        $("#shred_icon").html('<a href="shredjournal.html"><img src="img/shredjournal.svg"></a>');
        $("#gorilla_description").html('<a href="gorilla.html" style="text-decoration: none;"><h3><h3>Gorilla Unleashed</h3><p>This is a game I made for fun with my friend Luke. This was my first mobile game, and was a great intro to mobile game development. Making the sprites was challenging, but inspired me to improve my graphic design skills.</p></a>');
        $("#gorilla_description").css("background-color", "#f9db6d");
        $("#gorilla").css("background-color", "#b4d8c0");
        $("#gorilla_icon").css("background-color", "#b4d8c0");
        $("#gorilla_icon").html('<a href="gorilla.html"><img src="img/harambe.svg"></a>');
        $("#gorilla_icon").addClass("rounded-bottom");
        $("#gorilla").show();
        $("#view-source").html('<a href="https://github.com/Kyle628" style="text-decoration: none;"><i class="fa fa-github" id="github"></i><h1>Source Code</h1></a>');
        $("#view-more").css("background-color", "#015249");
        $("#view-more").addClass("rounded-top");
        $("#more-projects").css("background-color", "#b4d8c0");
        $("#view-more").html('<a href="all_projects.html" style="text-decoration: none;"><h3>Check out more of my projects</h3><i class="fa fa-arrow-circle-right" id="arrow" aria-hidden="true"></i></a>');
        $("#more-projects").show();
        $("#shredjournal").css("background-color", "#b4d8c0", "font-size", "100%");
        $("#shred_description").css("background-color", "#57bc90");
    });

    // switch to about view

    $("#about").click(function() {
        $("#shred_description").html('<img src="img/me_smaller.svg">');
        $("#shred_description").removeClass("rounded-bottom");
        $("#shred_description").css({"background-color": "#b4d8c0", "border-style": "none"});
        $("#shredjournal").css("background-color", "#015249", "font-size", "100%");
        $("#shred_icon").html('<h3>Yo!</h3><h3>My name is Kyle, and I like to make websites.</h3>');
        $("#gorilla").show();
        $("#gorilla_description").html('<img src="img/UCSC.png">');
        $("#gorilla_description").css("background-color", "#b4d8c0");
        $("#gorilla_icon").html('<h3 style="margin: 75px 5px 125px 5px;">I received my degree in Computer Science from the University of California Santa Cruz</h3>');
        $("#gorilla_icon").css("background-color", "#f9db6d");
        $("#gorilla_icon").addClass("rounded-bottom");
        $("#more-projects").show();
        $("#more-projects").css("background-color", "#015249");
        $("#view-more").css("background-color", "#b4d8c0");
        $("#view-source").html('<h3 style="margin: 100px 5px 0px 5px;">When I am not programming...I like to go for a surf, or play some video games!</h3>');
        $("#view-more").html('<img src="img/vector_surf.svg">');
        $("#view-more").removeClass("rounded-top");
    });


});
