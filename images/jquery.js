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
            marginTop: "0px",  // Changed from percentage to pixels
            marginLeft: "0px", // Changed from percentage to pixels
            fontSize: "50px",
        }, 3000, 'swing');

        $('#leading-text').animate({
            paddingTop: "510px",
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
}

function loadPreviousPage() {
    if (!animate) {
        console.log('Loading previous page...');

        // Ensure the text container is visible and reset its position
        $('#leading-text-container').css({
            display: 'flex',
            marginTop: "-6550px", // Changed from percentage to pixels
            marginLeft: "-1830px", // Changed from percentage to pixels
            fontSize: "5500px",
        });

        $('#leading-text').css({
            paddingTop: "550px",
            paddingLeft: "0px",
            paddingBottom: "200px",
            fontWeight: "1000",
        });

        // Animate leading text to fade out and scroll up
        $('#leading-text-container').animate({
            marginTop: "-6550px", // Changed from percentage to pixels
            marginLeft: "-1830px", // Changed from percentage to pixels
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

        animate = true;
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
    if (scrollPosition <= 10 && nextpage) { // Adjust the threshold as needed
        console.log('Scroll position:', scrollPosition, 'Loading previous page...');
        loadPreviousPage();
    }
});
