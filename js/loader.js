const loader=document.getElementById("loader");
const loadingText=document.getElementById("loadingText");
const messages=["Initializing experience...","Loading creative systems...","Preparing portfolio...","Welcome to Web Dev's Max."];
let i=0;
const interval=setInterval(()=>{i++;if(i<messages.length)loadingText.textContent=messages[i]},420);
window.addEventListener("load",()=>{
  setTimeout(()=>{clearInterval(interval);loader.classList.add("hide")},1200);
});
