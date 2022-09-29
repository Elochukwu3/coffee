let myNav = $(".top-nav");

$(window).on('scroll', function() {

  if ($(window).scrollTop() >= 10) {
    // console.log(scrollY);
    myNav.addClass("scroll");
  } else {
    myNav.removeClass("scroll");
  }
});
let slider = document.querySelectorAll(".slider");


let slidePosition = 0;
function activaSlider() {
   for (let index = 0; index < slider.length; index++) {
       
       slider[index].style.transform = `translateX(-${slidePosition}00%)`
       
    }
    slidePosition++;
    if (slidePosition > slider.length-2) {
        slidePosition = 0;
        // for (let index = 0; index < slider.length; index++) {
        //     slider[index].style.transform = `translateX(${slidePosition}00%)`
        // }
    
    }

}
setInterval(() => {
    activaSlider()  
}, 2000);
let left = document.querySelector(".left");
let right = document.querySelector(".right");

right.addEventListener("click",()=>{
   slidePosition = slidePosition + 1;
   if (slidePosition < slider.length) {
       slidePosition = 0 ;
   }
   for (let index = 0; index < slider.length; index++) {
       
       
       slider[index].style.transform = `translateX(-${slidePosition}00%)`;
   }
   slidePosition++;
   
});
left.addEventListener("click",()=>{
   slidePosition = slidePosition - 1;
   
   // slidePosition++;
   if (slidePosition <= 1) {
       slidePosition = slider.length - 1;
   }
   for (let index = 0; index < slider.length; index++) {
       
       
       slider[index].style.transform = `translateX(-${slidePosition-1}00%)`;
   }
});