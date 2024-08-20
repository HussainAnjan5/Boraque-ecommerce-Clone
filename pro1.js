let a=document.getElementById('det');
function togglehide(){
    // alert("welcome")
    if(det.style.display !='block'){
        det.style.display='block';
    }
    else{
        det.style.display='none';
    }
}
let b=document.getElementById('pric');
function toggleprice(){
    if(pric.style.display!='none'){
        // pric.style.height='15vh';
        pric.style.display='flex';
        pric.style.display='none';
    }
    else{
        pric.style.display='block';
        pric.style.display='flex';

    }
}
let c=document.getElementsByid('siz');
function togglesize(){
    if(siz.style.display!='none'){
        siz.style.display='none';
    }
    else{
        siz.style.display='block';

    }
}

let d=document.getElementsByid('fabric');
function togglefabric(){
    if(fabric.style.display!='none'){
        fabric.style.display='none';
    }
    else{
        fabric.style.display='block';

    }
}
let e=document.getElementsByid('piec');
function togglepiec(){
    if(piec.style.display =='none'){
        piec.style.display='block';
    }
    else{
        piec.style.display='none';
    }   
}
let navbar = document.getElementById("sidenav");

    function menubar() {
      if (sidenav.style.display != "none") {
        sidenav.style.display = "none";
        // sidenav.style.bottom='10%';
      } else {
        sidenav.style.display = "block";
        // sidenav.style.body.backgroundColor = 'transparent black';
      }
    }

function mydrawer() {
  let abc = document.getElementsByClassName("drop");
  if (drop.style.display != "none") {
    drop.style.display = "none";
    // sidenav.style.bottom='10%';
  } else {
    drop.style.display = "block";
  }
}
let abcd = document.getElementById("sidenav");

function closed() {
  sidenav.style.display = "none";
}