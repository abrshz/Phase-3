




// 
// let footer = $(".footer-links-wrapper h3");
//  let footerul = $(".footer-links-wrapper ul");

// footer.on("click" , bind)

// function bind() {
    
//     // footer.css("color","red")
//     //  let element=$(footerul.currentTarget)
//     $(this).next("ul").slideToggle()
    

    
//     $(this).toggleClass("expanded");
    
// }




// if (window.matchMedia("(max-width: 768px)").matches) {
// $(".footer-links-wrapper h3").on("click", function () {
//     $(this).toggleClass("expanded")
//   $(this).next("ul").slideToggle();
//   return;
// });
  
//  }


// if (condition) {
//     $("#div").toggle(
//         function() {
//             do this
//         },
//         function() {
//             do that
//         }
//     );
// }
// else {

//     // How do I achieve this?
//     $("#div").disableToggle(

//     );
// }


// $(document.ready()){}

let footer = $(".footer-links-wrapper h3");
// let footerul = $(".footer-links-wrapper ul");

footer.on("click", function(){
    if($(window).width() <= 768 ){


        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
        
    }



    $window.resize(function () {
      if ($(window).width() > 768 ||$(window).width()<=768) {
        location.reload();
      }
    });
 
    // else{
    //     $(this).next("ul").disableToggle();
    // }
        
    
    });
    
    
