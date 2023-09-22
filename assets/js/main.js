var items=document.getElementsByClassName("item");
var slideitem=document.getElementById("slide-item")
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close=document.getElementById("close");

var index=0;

for(let i=0;i<items.length;i++){
   items[i].addEventListener('click',function(e){
   var img=e.target.src;
   slideitem.childNodes[3].setAttribute('src',img);
   slideitem.childNodes[1].innerHTML=`${i+1}/${items.length}`
    slide.classList.add('active');
     index=i;
  
   })
}
close.addEventListener('click',function(e){
    slide.classList.remove('active');
})
prev.addEventListener('click',function(){
    changeimg(index -1);
})
next.addEventListener('click',function(){
    changeimg(index +1);
})

function changeimg(i){
   if(i>=items.length)
   index=0;
   else if(i<0)
   index=items.length-1;
   else 
   index=i;
  
   let img=items[index].childNodes[1].getAttribute('src');
  slideitem.childNodes[3].setAttribute('src',img);
  slideitem.childNodes[1].innerHTML=`${index+1}/${items.length}`
   
    
}
document.onkeydown=function(e){
    if(e.keyCode==37)
    prev.click();
    if(e.keyCode==39)
    next.click();
    if(e.keyCode==27)
    close.click();
}
