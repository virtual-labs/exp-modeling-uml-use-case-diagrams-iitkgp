/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Use Case Diagrams and Capturing Use Case Scenarios
File Name: simulation.js
Author: Prakriti Dhang */

let highlightxt, highlightxta1;
function playsimulation(){
    //document.getElementById("goend").disabled=true;
    //document.getElementById("gostrt").disabled=true;
   // const highlighttxt = document.getElementById('mu1');
   // highlighttxt.style.background= "linear-gradient(90deg,white 0%, rgba(255, 255, 255, 0) 50%)";
   // highlighttxt.style.webkitAnimationPlayState = "running";
   // const highlighttxtu7 = document.getElementById('mu7');
   // highlighttxtu7.style.background="linear-gradient(90deg,white 0%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("du31").style.display="none";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm3").style.display="none";
    document.getElementById("du11").style.display="none";
    document.getElementById("playbtn").style.display="none";
    document.getElementById("pausebtn").style.display="block";
    highlightxt = document.getElementById('m1');
    highlightxt.style.webkitAnimationPlayState = "running";

    stopani = setTimeout(mactor1, 15000);
   
function mactor1(){
    highlightxta1 = document.getElementById('m11');
    highlightxta1.style.webkitAnimationPlayState = "running";
   // highlightxt.style.background=" linear-gradient(90deg, yellow 49%, rgba(255, 255, 255, 0) 50%)";
    stopani = setTimeout(mactor11, 3000);
}


function mactor11(){
    document.getElementById("pm1").style.display="block";
    document.getElementById("da11").style.display="block";
    document.getElementById("pm2").style.display="none";
    document.getElementById("pm3").style.display="none";
    stopani = setTimeout(highlightxttxtm2, 5000);
}

function highlightxttxtm2(){
    const highlightxt2 = document.getElementById('m2');
    highlightxt2.style.webkitAnimationPlayState = "running";
    const highlightxta1 = document.getElementById('m11');
    highlightxta1.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    const highlightxt = document.getElementById('m1');
    highlightxt.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm1").style.display="none";
    stopani = setTimeout(mactor2, 30000);
}

function mactor2(){
    const highlightxta2 = document.getElementById('m22');
    highlightxta2.style.webkitAnimationPlayState = "running";
    stopani = setTimeout(mactor22, 3000);
}

    function mactor22(){
    document.getElementById("pm2").style.display="block";
    document.getElementById("da21").style.display="block";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm3").style.display="none";
    stopani = setTimeout(highlightxttxtm3, 5000);
}

function highlightxttxtm3(){
    const highlightxt3 = document.getElementById('m3');
    highlightxt3.style.webkitAnimationPlayState = "running";
    const highlightxta2 = document.getElementById('m22');
    highlightxta2.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    const highlightxt2 = document.getElementById('m2');
    highlightxt2.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm2").style.display="none";
    stopani = setTimeout(mactor3, 10000);
}
function mactor3(){
    const highlightxta3 = document.getElementById('m33');
    highlightxta3.style.webkitAnimationPlayState = "running";
    stopani = setTimeout(mactor33, 3000);
}
function mactor33(){
    document.getElementById("pm3").style.display="block";
    document.getElementById("da31").style.display="block";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm2").style.display="none";
    stopani = setTimeout(mhuc1, 5000);
}

function mhuc1(){
    const highlightxtu1 = document.getElementById('mu1');
    //highlightxtu1.style.background= "linear-gradient(90deg, orange 50%, rgba(255, 255, 255, 0) 50%)";
    highlightxtu1.style.webkitAnimationPlayState = "running";
    const highlightxt3 = document.getElementById('m3');
    highlightxt3.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    const highlightxta2 = document.getElementById('m33');
    highlightxta2.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm3").style.display="none";
    document.getElementById("da11").style.display="none";
    stopani = setTimeout(muc1, 2500);
}
function muc1(){
    document.getElementById("pm1").style.display="block";
    document.getElementById("du11").style.display="block";
    document.getElementById("pm3").style.display="none";
    document.getElementById("pm2").style.display="none";
    stopani = setTimeout(mhuc2, 4000);
}

function mhuc2(){
    const highlightxtu2 = document.getElementById('mu2');
    highlightxtu2.style.webkitAnimationPlayState = "running";
    const highlightxtu1 = document.getElementById('mu1');
    highlightxtu1.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm1").style.display="none";
    stopani = setTimeout(muc2, 2500);
}
function muc2(){
    document.getElementById("pm2").style.display="block";
    document.getElementById("du21").style.display="block";
    document.getElementById("da21").style.display="none";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm3").style.display="none";
    stopani = setTimeout(mhuc3, 4000);
}

function mhuc3(){
    const highlightxtu3 = document.getElementById('mu3');
    highlightxtu3.style.webkitAnimationPlayState = "running";
    const highlightxtu2 = document.getElementById('mu2');
    highlightxtu2.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm2").style.display="none";
    document.getElementById("du21").style.display="none";
    stopani = setTimeout(muc3, 2800);
}
function muc3(){
    document.getElementById("pm2").style.display="block";
    document.getElementById("du22").style.display="block";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm3").style.display="none";
    stopani = setTimeout(mhuc4, 3500);
}

function mhuc4(){
    const highlightxtu4 = document.getElementById('mu4');
    highlightxtu4.style.webkitAnimationPlayState = "running";
    const highlightxtu3 = document.getElementById('mu3');
    highlightxtu3.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm2").style.display="none";
    document.getElementById("du22").style.display="none";
    stopani = setTimeout(muc4, 2500);
}
function muc4(){
    document.getElementById("pm2").style.display="block";
    document.getElementById("du23").style.display="block";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm3").style.display="none";
    stopani = setTimeout(mhuc5, 3500);
}

function mhuc5(){
    const highlightxtu5 = document.getElementById('mu5');
    highlightxtu5.style.webkitAnimationPlayState = "running";
    const highlightxtu4 = document.getElementById('mu4');
    highlightxtu4.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm2").style.display="none";
    document.getElementById("du23").style.display="none";
    stopani = setTimeout(muc5, 2500);
}
function muc5(){
    document.getElementById("pm2").style.display="block";
    document.getElementById("du24").style.display="block";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm3").style.display="none";
    stopani = setTimeout(mhuc6, 3500);
}

function mhuc6(){
    const highlightxtu6 = document.getElementById('mu6');
    highlightxtu6.style.webkitAnimationPlayState = "running";
    const highlightxtu5 = document.getElementById('mu5');
    highlightxtu5.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm2").style.display="none";
    document.getElementById("du24").style.display="none";
    stopani = setTimeout(muc6, 2500);
}
function muc6(){
    document.getElementById("pm2").style.display="block";
    document.getElementById("du25").style.display="block";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm3").style.display="none";
    stopani = setTimeout(mhuc7, 3500);
}
function mhuc7(){
    const highlightxtu7 = document.getElementById('mu7');
   // highlightxtu7.style.background= "linear-gradient(90deg, orange 50%, rgba(255, 255, 255, 0) 50%)";
    highlightxtu7.style.webkitAnimationPlayState = "running";
    const highlightxtu6 = document.getElementById('mu6');
    highlightxtu6.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("pm2").style.display="none";
    document.getElementById("da31").style.display="none";
    document.getElementById("du25").style.display="none";
    stopani = setTimeout(muc7, 2500);
}
function muc7(){
    document.getElementById("pm3").style.display="block";
    document.getElementById("du31").style.display="block";
    document.getElementById("pm1").style.display="none";
    document.getElementById("pm2").style.display="none";
    stopani = setTimeout(stopsimulation, 3500);
}
function stopsimulation(){
    document.getElementById("pm3").style.display="none";
    document.getElementById("du31").style.display="none";
    const highlightxtu7 = document.getElementById('mu7');
    highlightxtu7.style.background=" linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("playbtn").style.display="none";
    document.getElementById("pausebtn").style.display="none";
    document.getElementById("replaybtn").style.display="block";
    //document.getElementById("goend").disabled=false;
    //document.getElementById("gostrt").disabled=false;
    clearTimeout(stopani);
   // setTimeout(replayimulation, 3500);
}
}

function replaysimulation(){
    location.reload();
    document.getElementById("playbtn").style.display="block"; //displays play button
    document.getElementById("pausebtn").style.display="none"; // display none pause button
}


function pausesimulation(){
    const highlightxt = document.getElementById('m1');
    highlightxt.style.webkitAnimationPlayState = "paused";
    const highlightxt2 = document.getElementById('m2');
    highlightxt2.style.webkitAnimationPlayState = "paused";
    const highlightxt3 = document.getElementById('m3');
    highlightxt3.style.webkitAnimationPlayState = "paused";
    const highlightxt11 = document.getElementById('m11');
    highlightxt11.style.webkitAnimationPlayState = "paused";
    const highlightxt22 = document.getElementById('m22');
    highlightxt22.style.webkitAnimationPlayState = "paused";
    const highlightxt33 = document.getElementById('m33');
    highlightxt33.style.webkitAnimationPlayState = "paused";
    const highlightxtu1 = document.getElementById('mu1');
    highlightxtu1.style.webkitAnimationPlayState = "paused";
    const highlightxtu2 = document.getElementById('mu2');
    highlightxtu2.style.webkitAnimationPlayState = "paused";
    const highlightxtu3 = document.getElementById('mu3');
    highlightxtu3.style.webkitAnimationPlayState = "paused";
    const highlightxtu4 = document.getElementById('mu4');
    highlightxtu4.style.webkitAnimationPlayState = "paused";
    const highlightxtu5 = document.getElementById('mu5');
    highlightxtu5.style.webkitAnimationPlayState = "paused";
    const highlightxtu6 = document.getElementById('mu6');
    highlightxtu6.style.webkitAnimationPlayState = "paused";
    const highlightxtu7 = document.getElementById('mu7');
    highlightxtu7.style.webkitAnimationPlayState = "paused";
    document.getElementById("playbtn").style.display="block";
    document.getElementById("pausebtn").style.display="none";
    clearTimeout(stopani);

}


function gostart(){

    const highlighttxt = document.getElementById('mu1');
    highlighttxt.style.background= "linear-gradient(90deg, orange 100%, rgba(255, 255, 255, 0) 50%)";
    highlighttxt.style.webkitAnimationPlayState = "running";
    const highlighttxtu7 = document.getElementById('mu7');
    highlighttxtu7.style.background="linear-gradient(90deg,white 50%, rgba(255, 255, 255, 0) 50%)";
    stopani = setTimeout(gostarts,200);
 
    function gostarts(){
    document.getElementById("pm1").style.display="block";
    
    document.getElementById("du11").style.display="block";
    document.getElementById("du31").style.display="none";
    document.getElementById("da31").style.display="none";
  
    document.getElementById("pm2").style.display="none";
   
    document.getElementById("pm3").style.display="none";
   
    document.getElementById("playbtn").style.display="block";
    document.getElementById("pausebtn").style.display="none";
    clearTimeout(stopani);
    }
}


function goend(){

    const highlighttxtu7 = document.getElementById('mu7');
    highlighttxtu7.style.background= "linear-gradient(90deg, orange 100%, rgba(255, 255, 255, 0) 50%)";
  highlighttxtu7.style.webkitAnimationPlayState = "running";
  const highlighttxt1 = document.getElementById('mu1');
    highlighttxt1.style.background="linear-gradient(90deg,white 50%, rgba(255, 255, 255, 0) 50%)";
    stopani = setTimeout(goends, 200);

    function goends(){

    document.getElementById("pm3").style.display="block";
    
    document.getElementById("du31").style.display="block";
    document.getElementById("da31").style.display="none";
    document.getElementById("pm2").style.display="none";
    
    document.getElementById("pm1").style.display="none";
   
    document.getElementById("playbtn").style.display="block";
    document.getElementById("pausebtn").style.display="none";
  clearTimeout(stopani);
    }
}

