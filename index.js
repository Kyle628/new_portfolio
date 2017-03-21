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
        $("#shred_description").html('<h3>ShredJournal</h3><p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>');
        $("#shred_icon").html('<img src="img/shredjournal.svg">');
        $("#gorilla_description").html('<h3><h3>Gorilla Unleashed</h3><p>blah blah blah mobile game harambe ftwblah blah blah mobile game harambe ftwblah blah blah mobile game harambeblah blah blah mobile game harambe ftw blah blah blah mobile game harambe ftw</p>');
        $("#gorilla_description").css("background-color", "#f9db6d");
        $("#gorilla").css("background-color", "#b4d8c0");
        $("#gorilla_icon").css("background-color", "#b4d8c0");
        $("#gorilla_icon").html('<img src="img/harambe.svg">');
        $("#gorilla").show();
        $("#view-source").html('<i class="fa fa-github" id="github"></i><h1>Source Code</h1>');
        $("#view-more").css("background-color", "#015249");
        $("#more-projects").css("background-color", "#b4d8c0");
        $("#view-more").html('<h3>Check out more of my projects</h3><a href="#"><i class="fa fa-arrow-circle-right" id="arrow" aria-hidden="true"></i></a>');
        $("#more-projects").show();
        $("#shredjournal").css("background-color", "#b4d8c0", "font-size", "100%");
        $("#shred_description").css("background-color", "#57bc90");
    });

    // switch to about view

    $("#about").click(function() {
        $("#shred_description").html('<img src="img/me_smaller.svg">');
        $("#shred_description").css("background-color", "#b4d8c0");
        $("#shredjournal").css("background-color", "#015249", "font-size", "100%");
        $("#shred_icon").html('<h3>Yo!</h3><h3>My name is Kyle, and I like to make websites.</h3>');
        $("#gorilla").show();
        $("#gorilla_description").html('<img src="img/UCSC.png">');
        $("#gorilla_description").css("background-color", "#b4d8c0");
        $("#gorilla_icon").html('<h3>UCSC</h3><h3>I received my degree in Computer Science from the University of California Santa Cruz</h3>');
        $("#gorilla_icon").css("background-color", "#f9db6d");
        $("#more-projects").show();
        $("#more-projects").css("background-color", "#015249");
        $("#view-more").css("background-color", "#b4d8c0");
        $("#view-source").html('<h3>When I am not programming...</h3><h3>I like to go for a surf, or play some video games!</h3>');
        $("#view-more").html('<img src="img/me_surf.jpg">');
    });


});
