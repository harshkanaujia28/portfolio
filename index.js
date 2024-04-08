console.log("running.......") 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
   sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
  
function opentab(tabname) {
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}


let work = document.querySelector(".work1 img")
let work1 = document.querySelector(".work2 img")
let work2 = document.querySelector(".work3 img")
let work3 = document.querySelector(".work4 img")
let btn =  document.querySelector(".btn")

  function readme(){
 btn.innerHTML ="See Less"

  work2.style.display="block"
  work3.style.display="block"
  btn.style.display="none"
}

  





 
