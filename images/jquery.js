var tops = true;
let nextpage = false;
var clicked = false;
var animate = false;

function loadNextPage() {
    if (tops) {
        console.log('Loading next page...');
        tops = false;
    }

    // Ensure both animations are synced
    $('#leading-text-container').css('display', 'flex');
    if (!animate) {
        // Animate leading text
        $("#leading-text").animate(
            { paddingLeft: "400px" }, 
            2700, 
            'swing'
        );
        $("#leading-text").animate(
            { paddingLeft: "0px" }, 
            300, 
            'swing'
        );

        $('#leading-text-container').animate({
            marginTop: "0px",  
            marginLeft: "0px", 
            fontSize: "50px",
        }, 3000, 'swing');

        $('#leading-text').animate({
            paddingTop: "300px",
        }, 400);

        // Animate block1 to scroll up and fade out
        $('#block1').animate({
            marginTop: "-1200px", // Adjust based on your layout
            opacity: 0,
        }, 3000, 'swing');

        setTimeout(() => {
            $('#leading-text').animate({
                fontWeight: "700",
            }, 300);

            $('#content').removeClass('hidden');
        }, 500);

        setTimeout(() => {
            $('#block1').addClass('hidden');
        }, 3000);

        setTimeout(() => {
            $('#nav-bar').css('color', 'black');
        }, 2500);

        animate = true;
    }

    nextpage = true;
    tops = false
}

function loadPreviousPage() {
    if ($(window).scrollTop()<10) {
        console.log('Loading previous page...');

        // Animate leading text to fade out and scroll up
        $('#leading-text-container').animate({
            marginTop: "-6850px", 
            marginLeft: "-22330px", 
            fontSize: "5500px",
        }, 3000, 'swing');

        $('#leading-text').animate({
            paddingTop: "550px",
        }, 400);

        // Animate block1 to scroll down and appear
        $('#block1').removeClass('hidden').css({ opacity: 0 }); // Ensure block1 is visible before animating
        $('#block1').animate({
            marginTop: "0px",
            opacity: 1,
        }, 3000, 'swing');

        setTimeout(() => {
            $('#content').addClass('hidden');
            $('#leading-text-container').css('display', 'none'); // Hide after animation
        }, 3000);

        setTimeout(() => {
            $('#nav-bar').css('color', 'white');
        }, 2500);

        animate = false;
        tops = true;
        nextpage = false; // Reset to allow the next page transition
    }
}

$(document).ready(function () {
    $('#downbutton').click(function() {
        console.log('Down button clicked');
        clicked = true;
        if (clicked && !nextpage) {
            loadNextPage();
        }
    });
});

$(window).scroll(function() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    var targetTop = $('#content').offset().top;

    // Trigger page load when the bottom of the window reaches the target top
    if (windowBottom >= targetTop && !nextpage) {
        console.log('Scroll bottom reached, loading next page...');
        loadNextPage();
    }
    
    // Trigger page load when scrolled to the top
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition === 0 && nextpage) { // Adjust the threshold as needed
        console.log('Scroll position:', scrollPosition, 'Loading previous page...');
        loadPreviousPage();
    }
});