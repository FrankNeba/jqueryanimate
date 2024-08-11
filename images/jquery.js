var tops = true
let nextpage = false
var clicked = false
var animate = false

function loadNextPage(){
    // $('#content').removeClass('hidden');
    // $('#block1').addClass('hidden');
    if (tops){
        window.scrollTo({top: 10, behavior:"smooth"});
        console.log(tops);
        tops = false
    }//scrolls down when next page loads
              


    // Text appear animation start
    // Set id of "LEADING INSIGHT" text to block2
    $('#leading-text-container').css('display','flex')
    if(!animate){
         $("#leading-text").animate(
        {
        fontSize: "50px",
        marginTop: "0px",
        marginLeft: "0px",
        fontWeight: "700",
        paddingTop: '550px',
        paddingBottom: '200px'
          },
        2000
        );

        $('#leading-text-container').animate({
            marginTop: "-90%",
            marginLeft: "0%",
            width: '100%',
            height: '134vh',
        }, 2000)

        setTimeout(() => {
            $('#leading-text-container').animate({
            marginTop: "-100%",
        }, 500)

            $('#content').removeClass('hidden')
        }, 1500)

        setTimeout(() => {
            $('#first-section').addClass('hidden')
            }, 3400)
        setTimeout(() => {
        $('#nav-bar').css('color', 'black')
        // $('#bg').css('paddingTop','60px')
        }, 2500)
        
        $('#leading-text-container').addClass('bgg')

        setTimeout(() => {
        $('#block2').removeClass('bg')
        }, 3400)
        animate = true
    }
   

     // change color of links in nav-bar


    

    
        // Text appear animation end

        nextpage = true
} // load next page ends



// Load previous page starts
function loadPreviousPage(){
    if(!animate){
        $("#leading-text").animate(
       {
       fontSize: "3500px",
       marginTop: "0px",
       marginLeft: "0px",
       fontWeight: "1000",
       padding: '20px'
         },
       2000
       );

       $('#leading-text-container').animate({
           marginTop: "-8850px",
           marginLeft: "-670%",
           width: '100%',
           height: '100%',
       }, 2000)

       setTimeout(() => {

           $('#content').addClass('hidden')
       }, 2100)
       

       setTimeout(() => {
           $('#first-section').removeClass('hidden')
           }, 10)
       animate = true
       tops = true
       
       setTimeout(() => {
       $('#nav-bar').css('color', 'white')
       }, 1500) // change color of links in nav-bar
   }
    
      $(document).ready(function () {
        animate=false


        window.scrollTo({top: 0});
        $('#downbutton').click(function() {
            console.log(clicked);
            clicked = true;
            console.log(clicked);
            if ( clicked) {
               loadNextPage()
        // Text appear animation end
            }  
        });
    })
}



        
        $(window).scroll(function() {
            var windowBottom = $(window).scrollTop() + $(window).height();
           var scrollPosition = $(window).scrollTop() - 4;
            var targetTop = $('#content').offset().top;
            
            if (windowBottom >= targetTop + 800) {

                loadNextPage()
            }
            if (scrollPosition < 0 && nextpage) {
                console.log(scrollPosition);
                
                loadPreviousPage()

                nextpage == false

            } 
        });
        
