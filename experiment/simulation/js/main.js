/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Use Case Diagrams and Capturing Use Case Scenarios
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex = document.getElementById("selectex");
function subex() {
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("ex1").style.display = "block";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("dispuml2").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;

  }
  if (ex.options[ex.selectedIndex].value == 2) {
    document.getElementById("exercise2").style.display = "block";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex2").style.display = "block";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("show_result").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("dispuml1").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;

  }

  if (ex.options[ex.selectedIndex].value == 0) {
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("para1").style.display = "none";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result").style.display = "none";
    document.getElementById("dispviewbtn").disabled = true;
    document.getElementById("viewsol").disabled = true;

  }
}
/* Submit button to directly view the solution*/

function viewsolutionb() {
  document.getElementById("dispres").style.display = "block";
  document.getElementById("viewsol").disabled = false;
  document.getElementById("dispviewbtn").disabled = true;
  window.scrollBy(0, 1800);
}

function solview() {
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result1").style.display = "block";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("viewsol").disabled = true;
  }
  if (ex.options[ex.selectedIndex].value == 2) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result2").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("viewsol").disabled = true;
  }

}

/*********************************************Function for Table 1 ****************************************/

/*let newCheckLabel = document.createElement('LABEL');
newCheckLabel.setAttribute('for', newCheckBoxID);
let labelTextNode = document.createTextNode(inpt1);
newCheckLabel.appendChild(labelTextNode);
newLi.appendChild(newCheckLabel);*/
var inpt1, arract = [];
var actorex1 = [];
function addbtnt1() {
  let newLi;
  var letters = /^[A-Za-z]+$/;
  inpt1 = document.getElementById("inp1").value;

  let isInserted = false;

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("id", "btnremove");
  newIconbtn.setAttribute("style", "cursor:pointer;");

  //rbtn.appendChild(newIconbtn);   

  newLi = document.createElement("li");
  newLi.setAttribute("data-value", inpt1)
  //newdiv = document.createElement("div");
  //newdiv.setAttribute("class", "form-check");
  //newLi.appendChild(newdiv);
  //var alreadyExistActor = 0;
  let liTextNodeact = document.createTextNode(inpt1);
  newLi.appendChild(liTextNodeact);
  newLi.appendChild(newIconbtn);
  // this just makes sure a user cant enter in a blank value

  if (inpt1 == "") {
    alert("Please Enter Actor from the given problem statement before clicking Add Button");
  } else if (!inpt1.match(letters)) {
    alert("Write name of actor again, you are allowed to use  alphabets, numerics and white-space only");
  }
  else {

    const myList = document.getElementById("actord");
    const listItems = myList.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].textContent == inpt1) {
        isInserted = true;
        break;
      }
    }
    if (isInserted) {
      alert("You have already enter that actor.");
      document.getElementById("inp1").value = "";
    } else {

      document.getElementById('actord').appendChild(newLi);
      document.getElementById("inp1").value = "";
      actorex1.push(inpt1);
      /* Actor = Select option from the dropdown */
      let newOptionID;
      newOptionID = 'newOption_' + inpt1;

      let newOption = document.createElement('option');
      let optionText = document.createTextNode(inpt1);
      // set option text
      newOption.appendChild(optionText);
      // and option value

      newOption.setAttribute("id", newOptionID);
      newOption.setAttribute('class', "classActor");
      newOption.setAttribute('value', inpt1);
      let select1 = document.getElementById('selectactuc1');
      select1.appendChild(newOption);

      /* Use Case = Select option from the dropdown */
      let newOptionID2;
      newOptionID2 = 'newOption_' + inpt1;

      let newOption2 = document.createElement('option');
      let optionText2 = document.createTextNode(inpt1);
      // set option text
      newOption2.appendChild(optionText2);
      // and option value

      newOption2.setAttribute("id", newOptionID2);
      newOption2.setAttribute("class", "classActor");
      newOption2.setAttribute('value', inpt1);
      let select2 = document.getElementById('selectactuc2');
      select2.appendChild(newOption2);
    }

  }







}
/*************************************Function for Table 2***********************************************/
let inpt2, arruc = [];;

function addbtnt2() {

  let isInserted = false;
  let newLi;
  inpt2 = document.getElementById("inp2").value;

  /* var rbtn=document.createElement("button");
  rbtn.setAttribute("id", "removebtnuc");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerowuc(this)"); */

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("id", "btnremove");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");

  newLi = document.createElement("li");
  newLi.setAttribute("data-value", inpt2);
  //newdiv = document.createElement("div");
  //newdiv.setAttribute("class", "form-check");
  //newLi.appendChild(newdiv);

  let liTextNodeuc = document.createTextNode(inpt2);
  newLi.appendChild(liTextNodeuc);
  newLi.appendChild(newIconbtn);
  // this just makes sure a user cant enter in a blank value

  if (inpt2 == "") {
    alert("Please Enter Noun/Noun Phrase Before Click Add Button");
  }


  else {
    const myListuc = document.getElementById("usecased");
    const listItemsuc = myListuc.getElementsByTagName("li");
    for (let i = 0; i < listItemsuc.length; i++) {
      if (listItemsuc[i].textContent == inpt2) {
        isInserted = true;
        break;
      }
    }
    if (isInserted) {
      alert("You have already enter a use case by the same name.");
      document.getElementById("inp2").value = "";
    } else {


      document.getElementById('usecased').appendChild(newLi);
      document.getElementById("inp2").value = "";
      //arruc.push(inpt2);

      /* Use Case=Select option from the dropdown  */
      let newOptionID;
      newOptionID = 'newOption_' + inpt2;

      let newOption = document.createElement('option');

      let optionText = document.createTextNode(inpt2);
      // set option text
      newOption.appendChild(optionText);
      // and option value

      newOption.setAttribute("id", newOptionID);
      newOption.setAttribute('value', inpt2);
      let select2 = document.getElementById('selectactuc2');
      select2.appendChild(newOption);

      /* Actor = Select option from the dropdown */
      let newOptionID1;
      newOptionID1 = 'newOption_' + inpt2;

      let newOption1 = document.createElement('option');
      newOption.setAttribute("class", "classUC");
      let optionText1 = document.createTextNode(inpt2);
      // set option text
      newOption1.appendChild(optionText1);
      // and option value

      newOption1.setAttribute("id", newOptionID1);
      newOption1.setAttribute("class", "classUC");
      newOption1.setAttribute('value', inpt2);
      let select1 = document.getElementById('selectactuc1');
      select1.appendChild(newOption1);

    }
  }

}


/*************************************Function for Table 3***********************************************/
var objselrel, dobjrel, objsel1, dobj1, objsel2, dobj2, inpt3;
var arrrel = [];
var arrlbl = [];
function addbtnt3() {

  objsel1 = document.getElementById("selectactuc1");
  dobj1 = objsel1.options[objsel1.selectedIndex].value;
  //alert(dobj1);
  leftClass = objsel1.options[objsel1.selectedIndex].getAttribute("class");
  //alert(leftClass);
  objsel2 = document.getElementById("selectactuc2");
  dobj2 = objsel2.options[objsel2.selectedIndex].value;
  //alert(dobj2);
  rightClass = objsel2.options[objsel2.selectedIndex].getAttribute("class");
  //alert(rightClass);
  objselrel = document.getElementById("selectrel");
  dobjrel = objselrel.options[objselrel.selectedIndex].value;
  //alert(dobjrel);
  inpt3 = document.getElementById("labelt3i").value;



  /*var myTable = document.getElementById('tbl5');
  var totalRowCount = myTable.rows.length;
if((totalRowCount)== 5){
 
  document.getElementById("drawbtn").disabled=false;
}
else{
  document.getElementById("drawbtn").disabled=true;
}*/

  //alert(inpt3);
  var rbtn = document.createElement("button");
  rbtn.setAttribute("id", "removebtn");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerow(this)");

  var newIconbtn = document.createElement("i");
  newIconbtn.setAttribute("class", "bi bi-dash-circle");
  rbtn.appendChild(newIconbtn);

  /*if(((dobj1 == "user")|| (dobj1 == "User")|| (dobj1 == "student") ||((dobj1 == "member"))) && (dobjrel == "Association") && ((dobj2 == "issue") || (dobj2 == "issue book")) )*/
  if ((dobj1 == dobj2)) {
    if (leftClass == 'classUC') {
      alert('A use case can not be related with itself');
    } else {
      alert('An actor can not be related with itself');
    }
  }

  // Association is not allowed between two use cases 
  else if ((leftClass == 'classUC') && (rightClass == 'classUC') && (dobjrel == 'Association')) {
    alert('Association is not possible between two use cases');
  }
  // Only generalization is possible between two actors
  else if ((leftClass == 'classActor') && (rightClass == 'classActor') && (dobjrel != 'Generalization')) {
    alert('Only generalization is possible between two actors');
  }

  else if ((leftClass != rightClass) && (dobjrel != 'Association')) {
    alert(dobjrel + ' is not possible between ' + dobj1 + ' and ' + dobj2);
  }
  else {
    var tr = document.createElement('tr');
    tr.setAttribute("id", "t5uc");
    document.getElementById('tbodytbl5').appendChild(tr);
    var td1 = document.createElement('td');
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var tdval1 = document.createTextNode(dobj1);
    var tdval2 = document.createTextNode(dobjrel);
    var tdval3 = document.createTextNode(dobj2);
    var tdval4 = document.createTextNode(inpt3);
    //var tdval5=document.appendChild(newIconbtn);
    // tbody.appendChild(tr);




    td1.appendChild(tdval1);
    td2.appendChild(tdval2);
    td3.appendChild(tdval3);
    td4.appendChild(tdval4);
    td5.appendChild(rbtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    document.getElementById('tbodytbl5').appendChild(tr);

  }



  /*if(((dobj1 == "user")|| (dobj1 == "User")|| (dobj1 == "student") ||((dobj1 == "member"))) && (dobjrel == "Association") && ((dobj2 == "return")) ){
    var tr = document.createElement('tr');
    tr.setAttribute("id","t5uc1");
    document.getElementById('tbodytbl5').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    var tdval1=document.createTextNode(dobj1);
    var tdval2=document.createTextNode(dobjrel);
    var tdval3=document.createTextNode(dobj2);
    var tdval4=document.createTextNode(inpt3);
    //var tdval5=document.appendChild(newIconbtn);
   // tbody.appendChild(tr);
   
    
    
    
    td1.appendChild(tdval1);
    td2.appendChild(tdval2);
    td3.appendChild(tdval3);
    td4.appendChild(tdval4);
    td5.appendChild(rbtn);
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    document.getElementById('tbodytbl5').appendChild(tr);
  
  }*/

  /*if(((dobj1 == "user")|| (dobj1 == "User")|| (dobj1 == "student") ||((dobj1 == "member"))) && (dobjrel !== "Association") && ((dobj2 == "issue")|| (dobj2 == "return")) ){
    alert(dobjrel +" is not possible between" +dobj1 +"and" +dobj2 );
  }*/

  /*if(((dobj1 == "librarian")) && (dobjrel == "Association") && ((dobj2 == "issue")) ){
    var tr = document.createElement('tr');
    tr.setAttribute("id","t5uc2");
    document.getElementById('tbodytbl5').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
  
    var tdval1=document.createTextNode(dobj1);
    var tdval2=document.createTextNode(dobjrel);
    var tdval3=document.createTextNode(dobj2);
    var tdval4=document.createTextNode(inpt3);
   
   // tbody.appendChild(tr);
    
    
    
    
    td1.appendChild(tdval1);
    td2.appendChild(tdval2);
    td3.appendChild(tdval3);
    td4.appendChild(tdval4);
    td5.appendChild(rbtn);
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    
    document.getElementById('tbodytbl5').appendChild(tr);
  
  }
  
  if(((dobj1 == "librarian")) && (dobjrel == "Association") && ((dobj2 == "return")) ){
    var tr = document.createElement('tr');
    tr.setAttribute("id","t5uc3");
    document.getElementById('tbodytbl5').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
  
    var tdval1=document.createTextNode(dobj1);
    var tdval2=document.createTextNode(dobjrel);
    var tdval3=document.createTextNode(dobj2);
    var tdval4=document.createTextNode(inpt3);
   
   // tbody.appendChild(tr);
    
    
    
    
    td1.appendChild(tdval1);
    td2.appendChild(tdval2);
    td3.appendChild(tdval3);
    td4.appendChild(tdval4);
    td5.appendChild(rbtn);
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    
    document.getElementById('tbodytbl5').appendChild(tr);
  
  }
  
  if(((dobj1 == "librarian")) && (dobjrel !== "Association") && ((dobj2 == "issue")|| (dobj2 == "return")) ){
    alert(dobjrel +" is not possible between" +dobj1 +"and" +dobj2 );
  
  }
  
  
   if(((dobj1 == "issue")|| (dobj1 == "verify")) && (dobjrel == "Include") && ((dobj2 == "verify")|| (dobj2 == "issue")) ){
    var tr = document.createElement('tr');
    tr.setAttribute("id","t5uc4");
    document.getElementById('tbodytbl5').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    var tdval1=document.createTextNode(dobj1);
    var tdval2=document.createTextNode(dobjrel);
    var tdval3=document.createTextNode(dobj2);
    var tdval4=document.createTextNode(inpt3);
   // tbody.appendChild(tr);
    
    
    
    
    td1.appendChild(tdval1);
    td2.appendChild(tdval2);
    td3.appendChild(tdval3);
    td4.appendChild(tdval4);
    td5.appendChild(rbtn);
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    document.getElementById('tbodytbl5').appendChild(tr);
  
  }
  
  if(((dobj1 == "issue")|| (dobj1 == "verify")) && (dobjrel !== "Include") && ((dobj2 == "verify") || (dobj2 == "issue")) ){
    alert(dobjrel +" is not possible between two use cases");
  }
  */


}
/* $('a.removeUC').live('click', function(event) {
  var txt = $(this).parent().text();
  event.preventDefault();
  $(this).parent().remove();

  $("#selectRightActorOrUC option").each(function(index){
      if (txt == $(this).text())
      {
          $(this).remove();
      }
  });

  $("#selectLeftActorOrUC option").each(function(index){
      if (txt == $(this).text())
      {
          $(this).remove();
      }
  });
  
});*/


/** Removes row in table 5 **/
function removerow(btndel) {
  if (typeof (btndel) == "object") {
    $(btndel).closest("tr").remove();

  }


  else {
    return false;
  }
}

/** Removes li in table 4 **/
function removerowuc(btndel) {

  if (typeof (btndel) == "object") {


    var listItemValue = $(btndel).closest("li").data("value");
    //console.log(listItemValue);
    $(btndel).closest("li").remove();
    $("#selectactuc1").find('option[value="' + listItemValue + '"]').remove();
    $("#selectactuc2").find('option[value="' + listItemValue + '"]').remove();

    var index = actorex1.indexOf(listItemValue);
    if (index !== -1) {
      actorex1.splice(index, 1);
      
    }
    console.log(actorex1);



  } else {
    return false;
  }


}

/*function removerowuc(){
$("#selectactuc21 option[value='dv']").remove(); 
}
/*

document.getElementById("btnremove").addEventListener("click",function() {
  const opt  = select.options[select.selectedIndex];
  if (opt) opt.remove()
})*/






/*var tabrowindex=0;
   arr[0] =inpt1;
   adtbl2= document.getElementById('tbl2');
   tabrowindex + 1;
  

  var row = adtbl2.insertRow(++tabrowindex); // Row increment
   for (var q = 0; q <1; ++q) {

       var cell = row.insertCell(q);
       cell.innerHTML = arr[q];
       //
   }*/

// //document.getElementById("tbl2").rows[1].cells[0].innerHTML = inpt1;
var paper;

var arractor = [];
var arrreltyp = [];
var arrucase = [];
var lblarr = [];
var myTab;

var lenact, lenuc;

function drawbtnex1() {
  
  

/* if((lenact == 2) && (lenuc == 3)){
  document.getElementById("dispuml1").style.display = "block";
}
else{
  alert("Insert Usecase or Actor in the table");
  document.getElementById("dispuml1").style.display = "none";
} */

  document.getElementById("dispuml1").style.display = "block";
  myTab = document.getElementById('tbl5');
  let indexc1 = document.getElementById('froma').cellIndex;
  let indexc2 = document.getElementById('reltyp').cellIndex;
  let indexc3 = document.getElementById('toa').cellIndex;
  let indexc4 = document.getElementById('lbl').cellIndex;

  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
  for (i = 1; i < myTab.rows.length; i++) {

    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
    var objCellsa = myTab.rows.item(i).cells;

    // LOOP THROUGH EACH CELL OF THE CURRENT ROW TO READ CELL VALUES.
    for (var j = indexc1; j <= indexc1; j++) {
      var ex1actor = objCellsa.item(j).innerText;
    }
    arract.push(ex1actor);
  }

  console.log(arract);


  // alert(arract);
  for (r = 1; r < myTab.rows.length; r++) {

    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
    var objCellsr = myTab.rows.item(r).cells;

    for (var k = indexc2; k <= indexc2; k++) {
      var ex1rel = objCellsr.item(k).innerText;
    }

    arrrel.push(ex1rel);
  }
  console.log(arrrel);


  for (u = 1; u < myTab.rows.length; u++) {

    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
    var objCellsu = myTab.rows.item(u).cells;
    for (var l = indexc3; l <= indexc3; l++) {
      var ex1uc = objCellsu.item(l).innerText;
    }
    arruc.push(ex1uc);
  }
  console.log(arruc);

  for (lb = 1; lb < myTab.rows.length; lb++) {

    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
    var objCellsl = myTab.rows.item(lb).cells;
    for (var m = indexc4; m <= indexc4; m++) {
      var ex1lb = objCellsl.item(m).innerText;
    }
    arrlbl.push(ex1lb);
  }

  console.log(arrlbl);


  /*function removeDuplicates(arractor) {
    
    return arractor.filter((item,
        index) => arract.indexOf(item) === index);
}
console.log(removeDuplicates(arract));*/

  function removeDuplicatesact(arract) {

    arract.forEach(element => {
      if (!arractor.includes(element)) {
        arractor.push(element);
      }
    });
    return arractor;
  }
  function removeDuplicatesrel(arrrel) {

    arrrel.forEach(element => {
      if (!arrreltyp.includes(element)) {
        arrreltyp.push(element);
      }
    });
    return arrreltyp;
  }
  function removeDuplicatesuc(arruc) {

    arruc.forEach(element => {
      if (!arrucase.includes(element)) {
        arrucase.push(element);
        //lenuc=arrucase.length;
      }
    });
    return arrucase;
  }

  function removeDuplicateslbl(arrlbl) {

    arrlbl.forEach(element => {
      if (!lblarr.includes(element)) {
        lblarr.push(element);
      }
    });
    return lblarr;
  }

  console.log(removeDuplicatesact(arract));
  console.log(removeDuplicatesrel(arrrel));
  console.log(removeDuplicatesuc(arruc));
  console.log(removeDuplicateslbl(arrlbl));



  console.log(arractor);
  console.log(arrreltyp);
  console.log(arrucase);
  console.log(lblarr);

  lenuc=arrucase.length;
  lenact=actorex1.length;
  

  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
    el: document.getElementById('ucdiagram1'),
    model: graph,
    //x: 0,
    //y: 0,
    //width: $('#ucdiagram1').width(),
    //height:  $('#ucdiagram1').height(), // height had to be increased

    background: {
      color: '#FFFFFF'
    },

    cellViewNamespace: namespace
  });

  $(window).resize(function () {
    var diagramsize = $('#ucdiagram1');
    paper.setDimensions(diagramsize.width(), diagramsize.height());
  });
  /*paper.setDimensions($('#ucdiagram1').width());
  paper.setDimensions($('#ucdiagram1').height());
  paper.scaleContentToFit({minScaleX: 1, minScaleY: 1, maxScaleX: 1 , maxScaleY: 1});*/

  var actor1 = new joint.shapes.standard.Image();
  actor1.resize(120, 90);
  actor1.position(-6, 8);
  //actor1.position(103, 15);
  actor1.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  actor1.attr('label/text', actorex1[0]);
  actor1.attr('label/fontSize', 16);
  actor1.attr('body/strokeWidth', 2);
  actor1.attr('border/rx', 2);
  actor1.attr('image/xlinkHref', 'images/actor.png');
  actor1.addTo(graph);






  /* Actor 2 */

  var actor2 = new joint.shapes.standard.Image();
  actor2.resize(120, 90);
  actor2.position(83, 8);
  //actor2.position(316, 15);
  actor2.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  actor2.attr('label/text', actorex1[1]);
  actor2.attr('label/fontSize', 16);
  actor2.attr('body/strokeWidth', 2);
  actor2.attr('border/rx', 2);
  actor2.attr('image/xlinkHref', 'images/actor.png');
  actor2.addTo(graph);

  /* Use Case 1 */
  var uc1 = new joint.shapes.standard.Ellipse();
  uc1.position(112, 180);
  uc1.position(7, 254);
  uc1.resize(100, 40);
  uc1.attr({
    body: {
      fill: '#DAFF94',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrucase[0],
      fill: 'black',
      fontSize: 16,

    }
  });
  uc1.addTo(graph);
  /* Use Case 2 */
  var uc2 = new joint.shapes.standard.Ellipse();
  uc2.position(325, 180);
  uc2.position(111, 254);
  uc2.resize(100, 40);
  uc2.attr({
    body: {
      fill: '#DAFF94',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrucase[1],
      fill: 'black',
      fontSize: 16
    }
  });
  uc2.addTo(graph);
  /* Use Case 3 */
  var uc3 = new joint.shapes.standard.Ellipse();
  uc3.position(115, 320);
  uc3.position(10, 420);
  uc3.resize(100, 40);
  uc3.attr({
    body: {
      fill: '#DAFF94',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrucase[2],
      fill: 'black',
      fontSize: 16
    }
  });
  uc3.addTo(graph);


  joint.shapes.standard.Link.define('examples.CustomLink', {
    attrs: {
      line: {
        stroke: 'black',
        strokeWidth: 2,
        targetMarker: {
          'type': 'rect',
          'stroke': 'none'
        }
      }
    },

  });

  var link1 = new joint.shapes.examples.CustomLink();

  link1.source(actor1);
  link1.target(uc1);
  link1.addTo(graph);

  var link2 = new joint.shapes.examples.CustomLink();

  link2.source(actor1);
  link2.target(uc2);
  link2.addTo(graph);

  var link3 = new joint.shapes.examples.CustomLink();

  link3.source(actor2);
  link3.target(uc1);
  link3.addTo(graph);

  var link4 = new joint.shapes.examples.CustomLink();

  link4.source(actor2);
  link4.target(uc2);
  link4.addTo(graph);

  var link5 = new joint.shapes.standard.Link();
  link5.source(uc1);
  link5.target(uc3);
  link5.appendLabel({
    attrs: {
      text: {
        text: arrreltyp[1],
        fontSize: 16
      }

    }
  });
  link5.attr({
    line: {
      strokeWidth: 2,
      strokeDasharray: '4 2',
      targetMarker: { // minute hand
        'type': 'path',
        'stroke': 'blue',
        'stroke-width': 2,
        'fill': 'white',

      }
    }
  });
  link5.addTo(graph);





  /*var c = document.getElementById("uc1");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
  ctx.font = "30px Arial";
  ctx.strokeText(inpt1,10,50);*/

}