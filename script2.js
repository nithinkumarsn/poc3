window.onload = initDivMouseOver;
function initDivMouseOver()   {
   var div = document.getElementById("editor");
   div.mouseIsOver = false;
   div.onmouseover = function()   {
      this.mouseIsOver = true;
   };
   div.onmouseout = function()   {
      this.mouseIsOver = false;
   }
   div.onclick = function()   {
      if (this.mouseIsOver)   {
         var tool=document.querySelector(".toolbar");
         tool.style.display="show";
      }
      else{
      tool.style.display="none";
   }
}
