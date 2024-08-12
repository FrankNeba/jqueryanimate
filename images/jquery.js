var tops = true
let nextpage = false
var clicked = false
var animate = false

function loadNextPage(){
    // $('#content').removeClass('hidden');
    // $('#block1').addClass('hidden');
    if (tops){
        window.scrollTo({top: 150, behavior:"smooth"});
        console.log(tops);
        tops = false
    }//scrolls down when next page loads
              
    // Text appear animation start
    // Set id of "LEADING INSIGHT" text to block2
    $('#leading-text-container').css('display','flex')
    if(!animate){
         $("#leading-text").animate(
        {
            paddingLeft: "400px"
          }, 2700 , 'swing',  
        );

        $('#leading-text').animate({
            paddingLeft: "50px",
            },300)

        $('#leading-text-container').animate({
            marginTop: "-80%",
            marginLeft: "0%",
            width: '100%',
            fontSize: "50px",
        }, 3000, 'swing')

        setTimeout(() => {
            $('#leading-text-container').animate({
            marginTop: "-90%",
            }, 400)

            $('#leading-text').animate({
                fontWeight: "700",
            },300)

            $('#content').removeClass('hidden')
        }, 500)

        setTimeout(() => {
            $('#first-section').addClass('hidden')
            }, 3000)
        setTimeout(() => {
        $('#nav-bar').css('color', 'black')
        // $('#bg').css('paddingTop','60px')
        }, 2500)

        animate = true
    }

        nextpage = true
} // load next page ends



// Load previous page starts
function loadPreviousPage(){

    
    if(!animate){
        $("#leading-text").animate(
            {
                // paddingRight: "800px"
            }, 2700 , 'swing',  
        );

        // $("#leading-text").animate(
        //     {
        //         paddingLeft: "-400px"
        //     }, 2700 , 'swing',  
        // );

       $('#leading-text-container').animate({
        marginTop: "-6550px",
        // marginRight: "800%",
        marginLeft: "-40%",
        width: '100%',
        fontSize: "5500px",
    }, 2000, 'swing')

       setTimeout(() => {

           $('#content').addClass('hidden')
           $('#leading-text-container').css('display','none')
       }, 3000)

       setTimeout(() => {
       $('#leading-text-container').css('marginLeft','-1830%')
    }, 3100)
       

       setTimeout(() => {
           $('#first-section').removeClass('hidden')
           }, 10)

        
       animate = true
       tops = true
       
       setTimeout(() => {
       $('#nav-bar').css('color', 'white')
       }, 100) // change color of links in nav-bar
    //    setTimeout(() =>{
        
    //     $('#leading-text-container').css('marginLeft','300px')
    //    },100);
       
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
        
