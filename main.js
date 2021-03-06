function alertt() {
    alert('Привет! Пожалуйста, включи звук! :)')
  }
alertt();

let mainSound = document.querySelector('.main-sound');
let fireSound = document.querySelector('.fire');
let circle = document.querySelector('.circle');
let container = document.querySelector('.containner');
let section = document.querySelector('.section');
let set = document.querySelector('.set');
let mainText = document.querySelector('.main-text');

let flowers = ['flower1', 'flower17', 'flower3', 'flower4', 'flower5', 'flower6', 'flower7', 'flower8', 'flower9', 'flower10', 'flower11', 'flower12', 'flower13', 'flower19', 'flower15', 'flower16', 'flower2', 'flower18', 'flower14', 'flower20', 'flower3', 'flower5', 'flower11', 'flower13', 'flower1']
function createFlower() {
  let flowerBox = document.createElement('div');
  document.querySelector('.body').prepend(flowerBox);
  flowerBox.classList.add('displayNone');
  flowerBox.classList.add('flower-box');
  let outInner = '';
  flowers.forEach(item => {
   outInner += `<div class='section__img-inner'><img src='images/${item}.jpg' class='section__img'></div>`;
  });

  flowerBox.innerHTML = outInner;
}

createFlower();

function animateCircle() {
    document.querySelector('.circle_inner').remove();
    circle.classList.add('animate-circle1');
    section.classList.remove('displayNone');
    mainText.classList.remove('displayNone');
    container.remove();
    circle.remove(); 
    mainSound.play();
    
    setTimeout(animatePage, 10000);
    setTimeout(appearHearts, 18000);
    setTimeout(showFire, 24000);
}
circle.onclick = animateCircle;


function animatePage() {
  
    set.remove();
    mainText.remove();
    section.classList.add('section_bg');
    section.classList.add('section_two');
  
    let flowerBox = document.querySelector('.flower-box');
    flowerBox.classList.remove('displayNone');
   
}


let hearts = ['heart1', 'heart2', 'heart3', 'heart1', 'heart2', 'heart3', 'heart1', 'heart2', 'heart3', 'heart1', 'heart2', 'heart3'];

function appearHearts() {
  section.remove();
  let box = document.createElement('div');
  document.querySelector('.body').prepend(box);
  box.classList.add('box');

  let outInner = '';
    hearts.forEach(item => {
       outInner += `<div class='box__img-inner'><img src='images/${item}.png' class='box__img'></div>`;
      });
    box.innerHTML = outInner;

}


function showFire() {
  var b = document.getElementById("div");
var c = document.getElementById("canvas");
var a = c.getContext("2d");
var W=c.width=document.body.clientWidth; //ширина - по размерам клиенской части окна
var H=c.height=screen.height; //высота - это не "во весь экран", а больше из-за служебных областей окна
var Objects=[];
var Colors="255,0,0;0,255,0;0,0,255;255,255,0;255,0,255;0,255,255;255,255,204;255,204,255;204,255,255".split(";");
var timeInterval=20; //частота обновления, мс
var petardColor="rgb(0,128,0)"; //цвет петарды до взрыва
var numRays=16; //количество лучей <s>чучхе</s> при взрыве
var percentAlive=70; //процент пускаемых, 0-все, 100-никто
var petardRadius=3; //начальный радиус петарды, пикс.
var fireRadius=21; //радиус для вызрыва, пикс.
var fireBallRadius=4; //радиус отдельного огонька при взрыве, пикс.

DeleteObject=function (obj,t) {
 if(t) delete Objects[obj];
 else Objects[Objects.length]=obj;
};

DrawBack=function() {
 a["globalCompositeOperation"]="source-over"; //новая фигура визуализируется поверх уже добавленных на холст
 a.fillStyle="rgba(0,0,0,.4)";
 a.fillRect(0,0,W,H);
};

ColorPath=function(x,y,r,f) {
 a.beginPath();
 a.arc(x,y,r,0,Math.PI*2,0);
 a.fillStyle=f;
 a.fill();
};

FinalDraw=function(k,x,y,g){
 this.k=k;
 this.x=k?x:(Math.random()*(W-200))+100;
 this.y=k?y:H;
 this.t=0;
 this.j=k?20:70;
 this.a=k?Math.random()*360:240+Math.random()*70;
 this.s=Math.random()*3+2;
 this.g=g;

 this.thisDraw=function() {
  this.t++;
  if(this.k) { //взрыв
   f=(Math.PI/180)*this.a;
   this.x+=Math.cos(f)*this.s;
   this.y+=Math.sin(f)*this.s;
   a["globalCompositeOperation"]="lighter";
   g=a.createRadialGradient(this.x,this.y,1,this.x,this.y,fireBallRadius);
   g["addColorStop"](0,"rgba(255,255,255,.55)");
   g["addColorStop"](1,"rgba("+this.g+",.03)");
   ColorPath(this.x,this.y,fireRadius,g);
  }
  else { //пуск петарды
   f=(Math.PI/180)*this.a;
   this.x+=Math.cos(f)*5; //
   this.y+=Math.sin(f)*7; //увеличьте для взрывов выше
   ColorPath(this.x,this.y,petardRadius,petardColor);
  }
 }
};

setInterval(
 function() {
  DrawBack();
  for (q in Objects) {
   var obj=Objects[q];
   obj.thisDraw();
   if(obj.t>obj.j) {
    if(!obj.k) {
     h=Math.random()*Colors.length|0;
     for (c=0;c<numRays;c++) DeleteObject(new FinalDraw(1,obj.x,obj.y,Colors[h]));
    }
    DeleteObject(q,1);
   }
  }
  var c=Math.random()*100;
  if(c>percentAlive) DeleteObject(new FinalDraw);
 },timeInterval);
let box = document.querySelector('.box');
 box.remove();
  section.remove();
  document.querySelector('#div').classList.remove('displayNone');
  fireSound.play();
}
