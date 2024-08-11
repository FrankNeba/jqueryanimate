var tops = true
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
    $('#bgdiv').css('display','flex')
    if(!animate){
         $("#bg").animate(
        {
        fontSize: "50px",
        marginTop: "0px",
        marginLeft: "0px",
        fontWeight: "700",
        paddingTop: '550px',
        paddingBottom: '100px'
          },
        2000
        );

        $('#bgdiv').animate({
            marginTop: "-70%",
            marginLeft: "0%",
            width: '100%',
            height: '100vh',
        }, 2000)

        setTimeout(() => {
            $('#bgdiv').animate({
            marginTop: "-95%",
        }, 500)

            $('#content').removeClass('hidden')
        }, 2100)
        

        setTimeout(() => {
            $('#first-section').addClass('hidden')
            }, 3400)
        animate = true
        
        setTimeout(() => {
        $('#nav-bar').css('color', 'black')
        }, 1500) // change color of links in nav-bar
    }
   

    setTimeout(function () {
          $(".block2-next-section").animate(
            {
              marginTop: "50px",
            },
            400
          );
        }, 800);//animates the section below LEADING INSIGHT

    setTimeout(() => {
        $('#block2').removeClass('bg')
        }, 3400)
        // Text appear animation end
} // load next page ands



// Load previous page starts
function loadPreviousPage(){
    if(!animate){
        $("#bg").animate(
       {
       fontSize: "50px",
       marginTop: "0px",
       marginLeft: "0px",
       fontWeight: "700",
       paddingTop: '550px',
       paddingBottom: '100px'
         },
       2000
       );

       $('#bgdiv').animate({
           marginTop: "-70%",
           marginLeft: "0%",
           width: '100%',
           height: '100vh',
       }, 2000)

       setTimeout(() => {
           $('#bgdiv').animate({
           marginTop: "-95%",
       }, 500)

           $('#content').removeClass('hidden')
       }, 2100)
       

       setTimeout(() => {
           $('#first-section').addClass('hidden')
           }, 3400)
       animate = true
       
       setTimeout(() => {
       $('#nav-bar').css('color', 'black')
       }, 1500) // change color of links in nav-bar
   }
  

   setTimeout(function () {
         $(".block2-next-section").animate(
           {
             marginTop: "50px",
           },
           400
         );
       }, 800);//animates the section below LEADING INSIGHT

   setTimeout(() => {
       $('#block2').removeClass('bg')
       }, 3400)
}// Load previous page ends


        
      $(document).ready(function () {

        //load next section on doen button click    
        animate=false
        window.scrollTo({top: 0});
        $('#downbutton').click(function() {
            clicked = true;
            if ( clicked) {
               loadNextPage()
            }  
        });
         })



        
        $(window).scroll(function() {
            var windowBottom = $(window).scrollTop() + $(window).height();
           var scrollPosition = $(window).scrollTop();
            var targetTop = $('#content').offset().top;
            
            if (windowBottom >= targetTop + 900) {

                loadNextPage()
            }
            if(tops) {

                loadPreviousPage()

            } 
        });
        
