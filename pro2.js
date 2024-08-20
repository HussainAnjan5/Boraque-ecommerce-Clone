function mydesc() {
    let a = document.getElementById('toggledesc');
    if (toggledesc.style.display != 'none') {
        toggledesc.style.display = 'none';
    } else {
        toggledesc.style.display = 'block';
    }
}

function myinst() {
    let b = document.getElementById('toggleinst');
    if (toggleinst.style.display != 'none') {
        toggleinst.style.display = 'none';
    } else {
        toggleinst.style.display = 'block';
    }
}

function mydelv() {
    let c = document.getElementById('toggledel');
    if (toggledel.style.display != 'none') {
        toggledel.style.display = 'none';
    } else {
        toggledel.style.display = 'block';
    }
}

function mychange() {
    let d = document.getElementById('togglechange');
    if (togglechange.style.display != 'none') {
        togglechange.style.display = 'none';
    } else {
        togglechange.style.display = 'block';
    }
}

function mycart() {
    let d = document.getElementById('dropdown');
    if (dropdown.style.display != 'none') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
        dropdown.style.flex = 'space-between';
    }
}
let dropclose = document.getElementById('dropdown');

function closedrop(){
  dropdown.style.display = "none";
}

function item1() {
    document.getElementById('item').innerHTML =
        '<img src="https://cdn.shopify.com/s/files/1/2277/5269/products/104_25c17334-a915-4a20-bc58-9ae98fa2a8d3.jpg?v=1663847484" alt="" height="100%">'
}


function item2() {
    document.getElementById('item').innerHTML =
        '<img src="https://cdn.shopify.com/s/files/1/2277/5269/products/105_0c2df509-16d9-412e-a88a-6f2e13ef86d2.jpg?v=1663847484" alt=""  height="100%" >'

}
function item3() {
    document.getElementById('item').innerHTML =
        '<img src="https://cdn.shopify.com/s/files/1/2277/5269/products/106_9be2eaf6-d104-4344-9838-2abef037946c.jpg?v=1663847484" alt=""  height="100%" >'

}

function item4() {
    document.getElementById('').innerHTML =
        '<img src="https://cdn.shopify.com/s/files/1/2277/5269/products/thumbnil_2_10869248-9a6a-401a-94db-ccc58edc8302.jpg?v=1664007595" alt=""height="100%">'

}

let plusvalue = document.querySelector('.plus');
let numvalue = document.querySelector('.num');
let minusvalue = document.querySelector('.minus');

let a=1;
plusvalue.addEventListener('click', ()=>{
    if(a<20){
    a++;
    numvalue.innerText=a;
    console.log(a);
    }
});
minusvalue.addEventListener('click', ()=>{
    if(a>1){
        a--;
        numvalue.innerText=a;
        console.log(a);
    }
});
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
