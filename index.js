// let url= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data";
let text=document.getElementById("text");
let btn=document.getElementById("button");
let image=document.getElementById("qr-image");


btn.addEventListener("click",()=>{
    if(text.value.length>0){ 
    image.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value; 
    }
    else
    setTimeout(()=>{
    text.classList.add("error");

},1000);
});