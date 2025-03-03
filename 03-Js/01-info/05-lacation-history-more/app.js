console.log(window);
console.log(window.location);
var openPage;
// const refreshbtn = document.querySelector("#refresh");
// refreshbtn.addEventListener("click" , function (event) {
    // location.reload();
    // location.replace("/output");
    // location.replace("output");
    // event.preventDefault();
    // location.replace("http://127.0.0.1:5500/03-Js");
    // location.search = "?key = value&key2 = value2";
    // history.back();
    // history.forward();
    // history.go(-1);
    // history.go(1);
    // location.assign("output");
    //  openPage = window.open("http://127.0.0.1:5500/00-practice-js/06-forms-in-js/index.html" , "" , "width = 500px , height = 500px"); 
    //  openPage = window.open("" , "" , "width = 500px , height = 500px");
    //  openPage.document.write("<p>lolores. Minus beatae sit distinctio vel incidunt quis doloremque!</p>"); 
// });

// const closebutton = document.querySelector("#close");
// closebutton.addEventListener("click" , function (event){
    // openPage.close();
// });

// const scrollbtn = document.querySelector("#scroll");
// scrollbtn.addEventListener("click" ,function (event) {
    // window.scroll({top :0 , behavior :"smooth"});
    // window.scrollBy(0 , -20);
    // window.scrollBy({top : -20 , behavior : "smooth"});
    // window.scrollTo({top : 50 , behavior : "smooth"});
    // window.scrollTo(0 ,-20); 
// });

console.log( "inner width",window.innerWidth);
console.log( "inner height" ,window.innerHeight);
console.log( "outer width" ,window.outerWidth);
console.log( "outer height", window.outerHeight);

// const movebtn =  document.querySelector("#move");
// movebtn.addEventListener("click" , function (event){
// window.openPage.moveTo(200,200); 
// window.openPage.moveBy(100 ,100);
// window.openPage.resizeTo(700,700);  
// window.openPage.resizeBy(50 , 400);  
// });
const x = "Asam" ;

const searchButton = document.getElementById("location-search");
const goButton = document.getElementById("history-go");
const backButton = document.getElementById("history-back");
const refreshButton = document.getElementById("refresh2");
const openButton = document.getElementById("open");
const moveToButton = document.getElementById("moveto");
const moveByButton = document.getElementById("moveby");
const resizeToButton = document.getElementById("resizeto");
const resizeByButton = document.getElementById("resizeby");
const scrollButton = document.getElementById("scroll");
const scrollToButton = document.getElementById("to");
const scrollByButton = document.getElementById("by");
const closeButton = document.getElementById("close");
const togglebutton = document.querySelector("#toggle");


searchButton.addEventListener("click" , function (event){
    location.search =  "?key = value&key2 = value2";
});

backButton.addEventListener("click" , function (event){
history.go(1);
});
goButton.addEventListener("click" , function (event){
history.back();
});

refreshButton.addEventListener("click" ,
    function (event){
    window.location.reload();    
    }
)
openButton.addEventListener("click" ,
    function (event) {
        openPage = window.open("http://127.0.0.1:5500/03-Js/01-info/05-lacation-history-more/index.html" , "" , "width = 500px , height = 500px");
     openPage.document.write("<p>lolores. Minus beatae sit distinctio vel incidunt quis doloremque!</p>");    
    }
)
moveToButton.addEventListener("click" ,
    function (event) {
        window.openPage.moveTo(200,200); 
         openPage.focus(); 
    }
)
moveByButton.addEventListener("click" ,
    function (event) {
   window.openPage.moveBy(200 ,200);
   openPage.focus(); 

    }
)
resizeToButton.addEventListener("click" ,
    function (event) {
window.openPage.resizeTo(200,200);
openPage.focus(); 

}
)
resizeByButton.addEventListener("click" ,
    function (event) {
    window.openPage.resizeBy(50 , 50); 
    openPage.focus(); 

   
    }
)
scrollButton.addEventListener("click" ,
    function (event) {
        window.scroll({top :0 , behavior :"smooth"});
    }
)
scrollToButton.addEventListener("click" ,
    function (event) {
      window.scrollTo({top : 50 , behavior : "smooth"});
    }
)
scrollByButton.addEventListener("click" ,
    function (event) {
    window.scrollBy({top : -20 , behavior : "smooth"});
  
    }
)
closeButton.addEventListener("click" ,
    function (event) {
        openPage.close();
   
    }
)

togglebutton.addEventListener("click" , function (event){
    event.target.classList.toggle("active-style");
});





