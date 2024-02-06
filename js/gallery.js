function upDate(previewPic){
  document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
  document.getElementById('image').innerHTML = previewPic.alt;
  
  }

function unDo(){
  document.getElementById('image').style.backgroundImage = "url('')";
  document.getElementById('image').innerHTML = "Hover over an image below to display here."
   

  }
function addFocus(){
  imgs = document.querySelectorAll(".preview");
  for(let i = 0; i < imgs.length; i++){
    imgs[i].setAttribute("tabindex", "0");
    console.log(imgs[i].src);
  }
}
