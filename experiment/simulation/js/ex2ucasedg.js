/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Use Case Diagrams and Capturing Use Case Scenarios
File Name: ex2ucasedg.js
Author: Prakriti Dhang*/

/******************************Function of Table 1 of Exercise 2*************************************/

var inpt21, arract2 = [];
var actorex2 = [];
function addbtnt21() {
    let newLi;
    inpt21 = document.getElementById("inp21").value;

    let isInserted = false;

    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerowact2(this)");
    newIconbtn.setAttribute("id", "btnremove");
    newIconbtn.setAttribute("style", "cursor:pointer;");

    //rbtn.appendChild(newIconbtn);   

    newLi = document.createElement("li");
    newLi.setAttribute("data-value", inpt21);
    //newdiv = document.createElement("div");
    //newdiv.setAttribute("class", "form-check");
    //newLi.appendChild(newdiv);

    let liTextNodeact = document.createTextNode(inpt21);
    newLi.appendChild(liTextNodeact);
    newLi.appendChild(newIconbtn);
    // this just makes sure a user cant enter in a blank value

    if (inpt21 == "") {
        alert("Please Enter Actor from the given problem statement before clicking Add Button");
    } else {
        const myLista21 = document.getElementById("actord2");
        const listItemsa21 = myLista21.getElementsByTagName("li");
        for (let i = 0; i < listItemsa21.length; i++) {
            if (listItemsa21[i].textContent == inpt21) {
                isInserted = true;
                break;
            }
        }
        if (isInserted) {
            alert("You have already enter that actor.");
            document.getElementById("inp21").value = "";
        } else {

            document.getElementById('actord2').appendChild(newLi);
            document.getElementById("inp21").value = "";
            actorex2.push(inpt21); // push actor into the array named actorex2.
            /* Actor = Select option from the dropdown */
            let newOptionID;
            newOptionID = 'newOption_' + inpt21;

            let newOption = document.createElement('option');

            let optionText = document.createTextNode(inpt21);
            // set option text
            newOption.appendChild(optionText);
            // and option value

            newOption.setAttribute("id", newOptionID);
            newOption.setAttribute("class", "classActor");
            newOption.setAttribute('value', inpt21);
            let select1 = document.getElementById('selectactuc21');
            select1.appendChild(newOption);

            /* Use Case = Select option from the dropdown */
            let newOptionID2;
            newOptionID2 = 'newOption_' + inpt21;

            let newOption2 = document.createElement('option');

            let optionText2 = document.createTextNode(inpt21);
            // set option text
            newOption2.appendChild(optionText2);
            // and option value

            newOption2.setAttribute("id", newOptionID2);
            newOption2.setAttribute("class", "classActor");
            newOption2.setAttribute('value', inpt21);
            let select2 = document.getElementById('selectactuc22');
            select2.appendChild(newOption2);

        }
    }

}

/***************************Function of Table 2 of Exercise 2************************************/

let inpt22;
var ucaseex2 = [];
function addbtnt22() {

    let isInserted = false;

    let newLi;
    inpt22 = document.getElementById("inp22").value;

    /* var rbtn=document.createElement("button");
    rbtn.setAttribute("id", "removebtnuc");
    rbtn.setAttribute("type", "button");
    rbtn.setAttribute("class", "btn btn-danger");
    rbtn.setAttribute("onclick", "removerowuc(this)"); */

    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("id", "btnremove");
    newIconbtn.setAttribute("onclick", "removerowuc2(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");

    newLi = document.createElement("li");
    newLi.setAttribute("data-value", inpt22);
    //newdiv = document.createElement("div");
    //newdiv.setAttribute("class", "form-check");
    //newLi.appendChild(newdiv);

    let liTextNodeuc = document.createTextNode(inpt22);
    newLi.appendChild(liTextNodeuc);
    newLi.appendChild(newIconbtn);
    // this just makes sure a user cant enter in a blank value

    if (inpt22 == "") {
        alert("Please Enter Noun/Noun Phrase Before Click Add Button");
    }


    else {

        const myListuc2 = document.getElementById("usecased2");
        const listItemsuc2 = myListuc2.getElementsByTagName("li");
        for (let i = 0; i < listItemsuc2.length; i++) {
            if (listItemsuc2[i].textContent == inpt22) {
                isInserted = true;
                break;
            }
        }
        if (isInserted) {
            alert("You have already enter a use case by the same name.");
            document.getElementById("inp22").value = "";
        } else {
            document.getElementById('usecased2').appendChild(newLi);
            document.getElementById("inp22").value = "";

            //ucaseex2.push(inpt22);

            /* Use Case=Select option from the dropdown  */
            let newOptionID;
            newOptionID = 'newOption_' + inpt22;

            let newOption = document.createElement('option');
            let optionText = document.createTextNode(inpt22);
            // set option text
            newOption.appendChild(optionText);
            // and option value

            newOption.setAttribute("id", newOptionID);
            newOption.setAttribute("class", "classUC");
            newOption.setAttribute('value', inpt22);
            let select2 = document.getElementById('selectactuc21');
            select2.appendChild(newOption);

            /* Actor = Select option from the dropdown */
            let newOptionID1;
            newOptionID1 = 'newOption_' + inpt22;

            let newOption1 = document.createElement('option');
            let optionText1 = document.createTextNode(inpt22);
            // set option text
            newOption1.appendChild(optionText1);
            // and option value

            newOption1.setAttribute("id", newOptionID1);
            newOption1.setAttribute("class", "classUC");
            newOption1.setAttribute('value', inpt22);
            let select1 = document.getElementById('selectactuc22');
            select1.appendChild(newOption1);

        }
    }

}


/*************************************Function for Table 3***********************************************/
var objselrel2, dobjrel2, objsel21, dobj21, objsel22, dobj22, inpt23;
var arrrel2 = [];
var arruc2 = [];


var arrlbl2 = [];
var arr = [];
function addbtnt23() {

    objsel21 = document.getElementById("selectactuc21"); // select 
    dobj21 = objsel21.options[objsel21.selectedIndex].value; // select option actor and ucase from left
    //alert(dobj1);
    leftClass = objsel21.options[objsel21.selectedIndex].getAttribute("class");
    //alert(leftClass);
    objsel22 = document.getElementById("selectactuc22");
    dobj22 = objsel22.options[objsel22.selectedIndex].value;  // select option actor and ucase from right
    //alert(dobj2);

    rightClass = objsel22.options[objsel22.selectedIndex].getAttribute("class");
    //alert(rightClass);

    objselrel2 = document.getElementById("selectrel2");
    dobjrel2 = objselrel2.options[objselrel2.selectedIndex].value; // select option relationship


    //alert(dobjrel);
    inpt23 = document.getElementById("labelt23i").value;



    /*var myTable = document.getElementById('tbl25');
    
    
    var totalRowCount = myTable.rows.length;
    
    
    if((totalRowCount)== 13){
    
    document.getElementById("drawbtn2").disabled=false;
    }
    else{
    document.getElementById("drawbtn2").disabled=true;
    }*/

    //alert(inpt3);
    var rbtn = document.createElement("button");
    rbtn.setAttribute("id", "removebtn");
    rbtn.setAttribute("type", "button");
    rbtn.setAttribute("class", "btn btn-danger");
    rbtn.setAttribute("onclick", "removerowtb(this)");

    var newIconbtn = document.createElement("i");
    newIconbtn.setAttribute("class", "bi bi-dash-circle");
    rbtn.appendChild(newIconbtn);

    if ((dobj21 == dobj22)) {
        if (leftClass == 'classUC') {
            alert('A use case can not be related with itself');
        } else {
            alert('An actor can not be related with itself');
        }
    }

    // Association is not allowed between two use cases 
    else if ((leftClass == 'classUC') && (rightClass == 'classUC') && (dobjrel2 == 'Association')) {
        alert('Association is not possible between two use cases');
    }
    // Only generalization is possible between two actors
    else if ((leftClass == 'classActor') && (rightClass == 'classActor') && (dobjrel2 != 'Generalization')) {
        alert('Only generalization is possible between two actors');
    }

    else if ((leftClass == 'classUC') && (rightClass == 'classUC') && (dobjrel2 == 'Generalization')) {
        var tr = document.createElement('tr');
        //tr.setAttribute("id","t5uc");
        document.getElementById('tbodytbl25').appendChild(tr);
        var td1 = document.createElement('td');
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var tdval1 = document.createTextNode(dobj21);
        var tdval2 = document.createTextNode(dobjrel2);
        var tdval3 = document.createTextNode(dobj22);
        var tdval4 = document.createTextNode(inpt23);
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
        document.getElementById('tbodytbl25').appendChild(tr);
    }

    else if ((leftClass != rightClass) && (dobjrel2 != 'Association')) {
        alert(dobjrel2 + ' is not possible between ' + dobj21 + ' and ' + dobj22);
    }
    else {

        var tr = document.createElement('tr');
        //tr.setAttribute("id","t5uc");
        document.getElementById('tbodytbl25').appendChild(tr);
        var td1 = document.createElement('td');
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var tdval1 = document.createTextNode(dobj21);
        var tdval2 = document.createTextNode(dobjrel2);
        var tdval3 = document.createTextNode(dobj22);
        var tdval4 = document.createTextNode(inpt23);
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
        document.getElementById('tbodytbl25').appendChild(tr);

    }

    /*arr[0]=dobj21;
 arr[1]=dobjrel2;
 arr[2]=dobj22;
 arr[3]=inpt23;
 arr[4]=rbtn;
 var tabrowindex=0;
 
 tabrowindex + 1;
 
 var row = myTable.insertRow(++tabrowindex); // Row increment
     for (var q = 0; q <5; q++) {
 
         var cell = row.insertCell(q);
         cell.innerHTML = arr[q];
         //
     }*/
    /*  Customer --Association-- Make booking */
    /*if(((dobj21 == "customer")|| (dobj21 == "Customer")) && (dobjrel2 == "Association") && ((dobj22 == "make booking") || (dobj22 == "Make booking") || (dobj22 == "booking")) ){
    var tr = document.createElement('tr');
    //tr.setAttribute("id","t5uc");
    document.getElementById('tbodytbl25').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    var tdval1=document.createTextNode(dobj21);
    var tdval2=document.createTextNode(dobjrel2);
    var tdval3=document.createTextNode(dobj22);
    var tdval4=document.createTextNode(inpt23);
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
    document.getElementById('tbodytbl25').appendChild(tr);
    
    
    }*/

    /*  Book flight --Generalization-- Make booking */
    /*if(((dobj21 == "Book flight")) && (dobjrel2 == "Generalization") && ((dobj22 == "make booking") || (dobj22 == "Make booking") || (dobj22 == "booking")) ){
      var tr = document.createElement('tr');
      //tr.setAttribute("id","t5uc");
      document.getElementById('tbodytbl25').appendChild(tr);
      var td1 = document.createElement('td');
      var td2=document.createElement("td");
      var td3=document.createElement("td");
      var td4=document.createElement("td");
      var td5=document.createElement("td");
      var tdval1=document.createTextNode(dobj21);
      var tdval2=document.createTextNode(dobjrel2);
      var tdval3=document.createTextNode(dobj22);
      var tdval4=document.createTextNode(inpt23);
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
      document.getElementById('tbodytbl25').appendChild(tr);
      
      
      }
    /*  Book hotel room --Generalization-- Make booking */
    /*if(( (dobj21 == "Book hotel room")) && (dobjrel2 == "Generalization") && ((dobj22 == "make booking") || (dobj22 == "Make booking") || (dobj22 == "booking")) ){
      var tr = document.createElement('tr');
      //tr.setAttribute("id","t5uc");
      document.getElementById('tbodytbl25').appendChild(tr);
      var td1 = document.createElement('td');
      var td2=document.createElement("td");
      var td3=document.createElement("td");
      var td4=document.createElement("td");
      var td5=document.createElement("td");
      var tdval1=document.createTextNode(dobj21);
      var tdval2=document.createTextNode(dobjrel2);
      var tdval3=document.createTextNode(dobj22);
      var tdval4=document.createTextNode(inpt23);
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
      document.getElementById('tbodytbl25').appendChild(tr);
      
      
      }*/

    /*  Book flight --!Generalization-- Make booking */
    /*if(( (dobj21 == "Book hotel room")||(dobj21 == "Book flight")) && (dobjrel2 !== "Generalization") && ((dobj22 == "make booking") || (dobj22 == "Make booking") || (dobj22 == "booking")) ){
      
      alert(dobjrel2 +" is not possible between" +dobj21 +" and " +dobj22 );
      
      }*/

    /* Customer --Association-- Make payment */
    /*if(((dobj21 == "customer")|| (dobj21 == "Customer")) && (dobjrel2 == "Association") && ((dobj22 == "make payment") || (dobj22 == "Make payment") || (dobj22 == "payment"))  ){
    var tr = document.createElement('tr');
    //tr.setAttribute("id","t5uc");
    document.getElementById('tbodytbl25').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    var tdval1=document.createTextNode(dobj21);
    var tdval2=document.createTextNode(dobjrel2);
    var tdval3=document.createTextNode(dobj22);
    var tdval4=document.createTextNode(inpt23);
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
    document.getElementById('tbodytbl25').appendChild(tr);
    
    }*/

    /*  Pay by card --Generalization-- Make payment */
    /*if(((dobj21 == "Pay by card")) && (dobjrel2 == "Generalization") && ((dobj22 == "make payment") || (dobj22 == "Make payment") || (dobj22 == "payment"))  ){
      var tr = document.createElement('tr');
      //tr.setAttribute("id","t5uc");
      document.getElementById('tbodytbl25').appendChild(tr);
      var td1 = document.createElement('td');
      var td2=document.createElement("td");
      var td3=document.createElement("td");
      var td4=document.createElement("td");
      var td5=document.createElement("td");
      var tdval1=document.createTextNode(dobj21);
      var tdval2=document.createTextNode(dobjrel2);
      var tdval3=document.createTextNode(dobj22);
      var tdval4=document.createTextNode(inpt23);
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
      document.getElementById('tbodytbl25').appendChild(tr);
      
      }*/

    /*  Pay by cash --Generalization-- Make payment */
    /*if(((dobj21 == "Pay by cash")) && (dobjrel2 == "Generalization") && ((dobj22 == "make payment") || (dobj22 == "Make payment") || (dobj22 == "payment"))  ){
      var tr = document.createElement('tr');
      //tr.setAttribute("id","t5uc");
      document.getElementById('tbodytbl25').appendChild(tr);
      var td1 = document.createElement('td');
      var td2=document.createElement("td");
      var td3=document.createElement("td");
      var td4=document.createElement("td");
      var td5=document.createElement("td");
      var tdval1=document.createTextNode(dobj21);
      var tdval2=document.createTextNode(dobjrel2);
      var tdval3=document.createTextNode(dobj22);
      var tdval4=document.createTextNode(inpt23);
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
      document.getElementById('tbodytbl25').appendChild(tr);
      
      }*/

    /*  Pay by card, pay by cash--!Generalization-- Make payment */
    /* if(((dobj21 == "Pay by cash")||(dobj21 == "Pay by card")) && (dobjrel2 !== "Generalization") && ((dobj22 == "make payment") || (dobj22 == "Make payment") || (dobj22 == "payment"))  ){
       
       alert(dobjrel2 +" is not possible between" +dobj21 +" and " +dobj22 );
       
       }*/

    /* Customer --Association-- Cancel Booking */
    /*if(((dobj21 == "customer")|| (dobj21 == "Customer")) && (dobjrel2 == "Association") && ((dobj22 == "cancel") || (dobj22 == "cancel booking") || (dobj22 == "Cancel booking"))  ){
      var tr = document.createElement('tr');
      //tr.setAttribute("id","t5uc");
      document.getElementById('tbodytbl25').appendChild(tr);
      var td1 = document.createElement('td');
      var td2=document.createElement("td");
      var td3=document.createElement("td");
      var td4=document.createElement("td");
      var td5=document.createElement("td");
      var tdval1=document.createTextNode(dobj21);
      var tdval2=document.createTextNode(dobjrel2);
      var tdval3=document.createTextNode(dobj22);
      var tdval4=document.createTextNode(inpt23);
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
      document.getElementById('tbodytbl25').appendChild(tr);
      
      }*/

    /*  Cancel flight --Generalization-- Cancel booking */
    /*if(((dobj21 == "Cancel flight")) && (dobjrel2 == "Generalization") && ((dobj22 == "cancel") || (dobj22 == "cancel booking") || (dobj22 == "Cancel booking"))  ){
      var tr = document.createElement('tr');
      //tr.setAttribute("id","t5uc");
      document.getElementById('tbodytbl25').appendChild(tr);
      var td1 = document.createElement('td');
      var td2=document.createElement("td");
      var td3=document.createElement("td");
      var td4=document.createElement("td");
      var td5=document.createElement("td");
      var tdval1=document.createTextNode(dobj21);
      var tdval2=document.createTextNode(dobjrel2);
      var tdval3=document.createTextNode(dobj22);
      var tdval4=document.createTextNode(inpt23);
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
      document.getElementById('tbodytbl25').appendChild(tr);
  
      }*/

    /*  Cancel hotel room --Generalization-- Cancel booking */
    /*if(((dobj21 == "Cancel hotel room")) && (dobjrel2 == "Generalization") && ((dobj22 == "cancel") || (dobj22 == "cancel booking") || (dobj22 == "Cancel booking"))  ){
          var tr = document.createElement('tr');
          //tr.setAttribute("id","t5uc");
          document.getElementById('tbodytbl25').appendChild(tr);
          var td1 = document.createElement('td');
          var td2=document.createElement("td");
          var td3=document.createElement("td");
          var td4=document.createElement("td");
          var td5=document.createElement("td");
          var tdval1=document.createTextNode(dobj21);
          var tdval2=document.createTextNode(dobjrel2);
          var tdval3=document.createTextNode(dobj22);
          var tdval4=document.createTextNode(inpt23);
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
          document.getElementById('tbodytbl25').appendChild(tr);
          }*/

    /*  Cancel flight, cancel hotel room --!Generalization-- Cancel booking */
    /*if(((dobj21 == "Cancel hotel room")||(dobj21 == "Cancel flight")) && (dobjrel2 !== "Generalization") && ((dobj22 == "cancel") || (dobj22 == "cancel booking") || (dobj22 == "Cancel booking"))  ){
      alert(dobjrel2 +" is not possible between" +dobj21 +" and " +dobj22 );
      }*/

    /*  Customer --!Association-- Make booking */
    /*if(((dobj21 == "customer")|| (dobj21 == "Customer")) && (dobjrel2 !== "Association") && ((dobj22 == "make booking") || (dobj22 == "Make booking") || (dobj22 == "booking") || (dobj22 == "cancel") || (dobj22 == "Cancel booking") || (dobj22 == "Make Payment"))  ){
    alert(dobjrel2 +" is not possible between" +dobj21 +" and " +dobj22 );
    }*/

    /*  Travel Agent --!Association-- Make booking */
    /*if(((dobj21 == "Travel agent")|| (dobj21 == "Travel Agent")) && (dobjrel2 !== "Association") && ((dobj22 == "make booking") || (dobj22 == "Make booking") || (dobj22 == "booking") || (dobj22 == "cancel") || (dobj22 == "Cancel booking") || (dobj22 == "Make Payment"))  ){
      alert(dobjrel2 +" is not possible between" +dobj21 +" and " +dobj22 );
      }*/

    /*  Travel Agent --Association-- Make booking */
    /*if(((dobj21 == "Travel agent")||(dobj21 == "Travel Agent")) && (dobjrel2 == "Association") && (((dobj22 == "make booking") || (dobj22 == "Make booking") || (dobj22 == "booking"))) ){
    var tr = document.createElement('tr');
    //tr.setAttribute("id","t5uc2");
    document.getElementById('tbodytbl25').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    
    var tdval1=document.createTextNode(dobj21);
    var tdval2=document.createTextNode(dobjrel2);
    var tdval3=document.createTextNode(dobj22);
    var tdval4=document.createTextNode(inpt23);
    
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
    
    document.getElementById('tbodytbl25').appendChild(tr);
    
    }*/

    /*  Travel Agent --Association-- Make payment */
    /*if(((dobj21 == "Travel agent")||(dobj21 == "Travel Agent")) && (dobjrel2 == "Association") && ((dobj22 == "make payment") || (dobj22 == "Make payment") || (dobj22 == "payment")) ){
    var tr = document.createElement('tr');
    //tr.setAttribute("id","t5uc2");
    document.getElementById('tbodytbl25').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    
    var tdval1=document.createTextNode(dobj21);
    var tdval2=document.createTextNode(dobjrel2);
    var tdval3=document.createTextNode(dobj22);
    var tdval4=document.createTextNode(inpt23);
    
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
    
    document.getElementById('tbodytbl25').appendChild(tr);
    
    }*/


    /*  Travel Agent --Association-- Cancel booking */
    /*if(((dobj21 == "Travel agent")||(dobj21 == "Travel Agent")) && (dobjrel2 == "Association") && ((dobj22 == "cancel") || (dobj22 == "cancel booking") || (dobj22 == "Cancel booking"))  ){
      var tr = document.createElement('tr');
      //tr.setAttribute("id","t5uc");
      document.getElementById('tbodytbl25').appendChild(tr);
      var td1 = document.createElement('td');
      var td2=document.createElement("td");
      var td3=document.createElement("td");
      var td4=document.createElement("td");
      var td5=document.createElement("td");
      var tdval1=document.createTextNode(dobj21);
      var tdval2=document.createTextNode(dobjrel2);
      var tdval3=document.createTextNode(dobj22);
      var tdval4=document.createTextNode(inpt23);
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
      document.getElementById('tbodytbl25').appendChild(tr);
      
      }*/

    /*  Refund --Extend-- Cancel booking */
    /*if(((dobj21 == "Cancel")) && (dobjrel2 == "Extend") && ((dobj22 == "Get refund")) ){
    var tr = document.createElement('tr');
    //tr.setAttribute("id","t5uc3");
    document.getElementById('tbodytbl5').appendChild(tr);
    var td1 = document.createElement('td');
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    var tdval1=document.createTextNode(dobj21);
    var tdval2=document.createTextNode(dobjrel2);
    var tdval3=document.createTextNode(dobj22);
    var tdval4=document.createTextNode(inpt23);
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
    document.getElementById('tbodytbl25').appendChild(tr);
    
    }*/

    /*if(((dobj21 == "Get refund")) && (dobjrel2 == "Extend") && ((dobj22 == "cancel")) ){
        var tr = document.createElement('tr');
        //tr.setAttribute("id","t5uc3");
        document.getElementById('tbodytbl5').appendChild(tr);
        var td1 = document.createElement('td');
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        var td5=document.createElement("td");
        var tdval1=document.createTextNode(dobj21);
        var tdval2=document.createTextNode(dobjrel2);
        var tdval3=document.createTextNode(dobj22);
        var tdval4=document.createTextNode(inpt23);
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
        document.getElementById('tbodytbl25').appendChild(tr);
        
        }*/

    /*  Refund --!Extend-- Cancel booking */

    /*if(((dobj21 == "Get refund")|| (dobj21 == "cancel")) && (dobjrel2 !== "Extend") && ((dobj22 == "cancel")|| (dobj22 == "Get refund")) ){
    alert(dobjrel2 +" is not possible between two use cases");
    }*/



}

/******************Remove elements**********************/
function removerowtb(btndel) {
    if (typeof (btndel) == "object") {
        $(btndel).closest("tr").remove();

    } else {
        return false;
    }
}


function removerowact2(btndel) {
    if (typeof (btndel) == "object") {

        var listItemValue2 = $(btndel).closest("li").data("value");
        //console.log(listItemValue);
        $(btndel).closest("li").remove();
        $("#selectactuc21").find('option[value="' + listItemValue2 + '"]').remove();
        $("#selectactuc22").find('option[value="' + listItemValue2 + '"]').remove();
        var index = actorex2.indexOf(listItemValue);
        if (index !== -1) {
            actorex2.splice(index, 1);
        }
        console.log(actorex2);

    } else {
        return false;
    }


}

function removerowuc2(btndel) {
    if (typeof (btndel) == "object") {
        var listItemValue2 = $(btndel).closest("li").data("value");
        //console.log(listItemValue);
        $(btndel).closest("li").remove();
        $("#selectactuc21").find('option[value="' + listItemValue2 + '"]').remove();
        $("#selectactuc22").find('option[value="' + listItemValue2 + '"]').remove();



    } else {
        return false;
    }


}

var paper;
var arrreltyp2 = [];
var actor2ex2 = [];
var arrucase2 = [];
var lblarr2 = [];
var myTab2;
function drawbtnex2() {

    document.getElementById("dispuml2").style.display = "block";
    myTab2 = document.getElementById('tbl25');
    let indexc1 = document.getElementById('froma2').cellIndex;
    let indexc2 = document.getElementById('reltyp2').cellIndex;
    let indexc3 = document.getElementById('toa2').cellIndex;
    let indexc4 = document.getElementById('lbl2').cellIndex;



    for (a = 1; a < myTab2.rows.length; a++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCellsa = myTab2.rows.item(a).cells;

        for (var i = indexc1; i <= indexc2; i++) {
            var ex2act = objCellsa.item(k).innerText;
        }

        actorex2.push(ex2act);
    }
    console.log(actorex2);

    for (r = 1; r < myTab2.rows.length; r++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCellsr = myTab2.rows.item(r).cells;

        for (var k = indexc2; k <= indexc2; k++) {
            var ex2rel = objCellsr.item(k).innerText;
        }

        arrrel2.push(ex2rel);
    }
    console.log(arrrel2);


    for (u = 1; u < myTab2.rows.length; u++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCellsu = myTab2.rows.item(u).cells;
        for (var l = indexc3; l <= indexc3; l++) {
            var ex2uc = objCellsu.item(l).innerText;
        }
        arruc2.push(ex2uc);
    }
    console.log(arruc2);

    for (lb = 1; lb < myTab2.rows.length; lb++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCellsl = myTab2.rows.item(lb).cells;
        for (var m = indexc4; m <= indexc4; m++) {
            var ex2lb = objCellsl.item(m).innerText;
        }
        arrlbl2.push(ex2lb);
    }

    console.log(arrlbl2);


    function removeDuplicatesact2(actorex2) {

        actorex2.forEach(element => {
            if (!actor2ex2.includes(element)) {
                actor2ex2.push(element);
            }
        });
        return actor2ex2;
    }

    function removeDuplicatesrel2(arrrel2) {

        arrrel2.forEach(element => {
            if (!arrreltyp2.includes(element)) {
                arrreltyp2.push(element);
            }
        });
        return arrreltyp2;
    }
    function removeDuplicatesuc2(arruc2) {

        arruc2.forEach(element => {
            if (!arrucase2.includes(element)) {
                arrucase2.push(element);
            }
        });
        return arrucase2;
    }

    function removeDuplicateslbl2(arrlbl2) {

        arrlbl2.forEach(element => {
            if (!lblarr2.includes(element)) {
                lblarr2.push(element);
            }
        });
        return lblarr2;
    }

    console.log(removeDuplicatesact2(actorex2));
    console.log(removeDuplicatesrel2(arrrel2));
    console.log(removeDuplicatesuc2(arruc2));
    console.log(removeDuplicateslbl2(arrlbl2));


    console.log(actor2ex2);
    console.log(arrreltyp2);
    console.log(arrucase2);
    console.log(lblarr2);







    var namespace = joint.shapes;

    var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

    paper = new joint.dia.Paper({
        el: document.getElementById('ucdiagram2'),
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



    /*  $(window).resize(function() {
        var diagramsize2 = $('#ucdiagram2');
        paper.setDimensions(diagramsize2.width(), diagramsize2.height());
    });*/

    var actor1 = new joint.shapes.standard.Image();
    actor1.resize(120, 90);
    actor1.position(-21, 211);
    //actor1.position(103, 15);
    actor1.attr('root/title', 'joint.shapes.standard.BoarderedImage');
    actor1.attr('label/text', actor2ex2[0]);
    actor1.attr('label/fontSize', 16);
    actor1.attr('body/strokeWidth', 2);
    actor1.attr('border/rx', 2);
    actor1.attr('image/xlinkHref', 'images/actor.png');
    actor1.addTo(graph);






    /* Actor 2 */

    var actor2 = new joint.shapes.standard.Image();
    actor2.resize(120, 90);
    actor2.position(534, 186);
    //actor2.position(316, 15);
    actor2.attr('root/title', 'joint.shapes.standard.BoarderedImage');
    actor2.attr('label/text', actor2ex2[1]);
    actor2.attr('label/fontSize', 16);
    actor2.attr('body/strokeWidth', 2);
    actor2.attr('border/rx', 2);
    actor2.attr('image/xlinkHref', 'images/actor.png');
    actor2.addTo(graph);



    /* Use Case 1 */
    var uc21 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);

    uc21.position(138, 28);
    uc21.resize(120, 50);
    uc21.attr({
        body: {
            fill: '#DAFF94',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: arrucase2[0],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc21.addTo(graph);

    /* Use Case 2 */
    var uc22 = new joint.shapes.standard.Ellipse();
    //uc1.position(172, 204);
    uc22.position(165, 205);
    uc22.resize(120, 50);
    uc22.attr({
        body: {
            fill: '#DAFF94',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: arrucase2[1],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc22.addTo(graph);

    /* Use Case 3 */
    var uc23 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc23.position(156, 365);
    uc23.resize(120, 50);
    uc23.attr({
        body: {
            fill: '#DAFF94',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: arrucase2[2],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc23.addTo(graph);

    /* Use Case 4 */
    var uc24 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc24.position(126, 137);
    uc24.resize(120, 50);
    uc24.attr({
        body: {
            fill: '#CFFDFF',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: actor2ex2[2],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc24.addTo(graph);




    /* Use Case 5 */
    var uc25 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc25.position(251, 134);
    uc25.resize(120, 50);
    uc25.attr({
        body: {
            fill: '#CFFDFF',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: actor2ex2[3],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc25.addTo(graph);

    /* Use Case 6 */
    var uc26 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc26.position(124, 285);
    uc26.resize(120, 50);
    uc26.attr({
        body: {
            fill: '#CFFDFF',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: actor2ex2[4],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc26.addTo(graph);

    /* Use Case 7 */
    var uc27 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc27.position(257, 282);
    uc27.resize(120, 50);
    uc27.attr({
        body: {
            fill: '#CFFDFF',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: actor2ex2[5],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc27.addTo(graph);


    /* Use Case 8 */
    var uc28 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc28.position(58, 477);
    uc28.resize(120, 50);
    uc28.attr({
        body: {
            fill: '#CFFDFF',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: actor2ex2[6],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc28.addTo(graph);

    /* Use Case 9 */
    var uc29 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc29.position(203, 478);
    uc29.resize(120, 50);
    uc29.attr({
        body: {
            fill: '#CFFDFF',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: actor2ex2[7],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc29.addTo(graph);

    /* Use Case 10 */
    var uc210 = new joint.shapes.standard.Ellipse();
    //uc1.position(112, 180);
    uc210.position(360, 438);
    uc210.resize(120, 50);
    uc210.attr({
        body: {
            fill: '#CFFDFF',
            rx: 20,
            ry: 20,
            strokeWidth: 2
        },
        label: {
            text: actor2ex2[8],
            fill: 'black',
            fontSize: 16,

        }
    });
    uc210.addTo(graph);


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
    link1.target(uc21);

    link1.addTo(graph);

    var link2 = new joint.shapes.examples.CustomLink();

    link2.source(actor1);
    link2.target(uc22);
    link2.addTo(graph);



    var link3 = new joint.shapes.examples.CustomLink();

    link3.source(actor1);
    link3.target(uc23);
    link3.addTo(graph);


    var link4 = new joint.shapes.examples.CustomLink();

    link4.source(actor2);
    link4.target(uc21);

    link4.addTo(graph);

    var link5 = new joint.shapes.examples.CustomLink();

    link5.source(actor2);
    link5.target(uc22);
    link5.addTo(graph);



    var link6 = new joint.shapes.examples.CustomLink();

    link6.source(actor2);
    link6.target(uc23);
    link6.addTo(graph);


    var linkg1 = new joint.shapes.standard.Link();

    linkg1.source(uc24);
    linkg1.target(uc21);
    linkg1.attr({
        line: {
            targetMarker: { // minute hand
                'type': 'path',
                'stroke': 'black',
                'stroke-width': 2,
                'fill': 'white',

            }
        }
    });
    linkg1.addTo(graph);

    var linkg2 = new joint.shapes.standard.Link();

    linkg2.source(uc25);
    linkg2.target(uc21);
    linkg2.attr({
        line: {
            targetMarker: { // minute hand
                'type': 'path',
                'stroke': 'black',
                'stroke-width': 2,
                'fill': 'white',

            }
        }
    });
    linkg2.addTo(graph);


    var linkg3 = new joint.shapes.standard.Link();

    linkg3.source(uc26);
    linkg3.target(uc22);
    linkg3.attr({
        line: {
            targetMarker: { // minute hand
                'type': 'path',
                'stroke': 'black',
                'stroke-width': 2,
                'fill': 'white',

            }
        }
    });
    linkg3.addTo(graph);


    var linkg4 = new joint.shapes.standard.Link();

    linkg4.source(uc27);
    linkg4.target(uc22);
    linkg4.attr({
        line: {
            targetMarker: { // minute hand
                'type': 'path',
                'stroke': 'black',
                'stroke-width': 2,
                'fill': 'white',

            }
        }
    });
    linkg4.addTo(graph);



    var linkg5 = new joint.shapes.standard.Link();

    linkg5.source(uc28);
    linkg5.target(uc23);
    linkg5.attr({
        line: {
            targetMarker: { // minute hand
                'type': 'path',
                'stroke': 'black',
                'stroke-width': 2,
                'fill': 'white',

            }
        }
    });
    linkg5.addTo(graph);


    var linkg6 = new joint.shapes.standard.Link();

    linkg6.source(uc29);
    linkg6.target(uc23);
    linkg6.attr({
        line: {
            targetMarker: { // minute hand
                'type': 'path',
                'stroke': 'black',
                'stroke-width': 2,
                'fill': 'white',

            }
        }
    });
    linkg6.addTo(graph);


    var linke = new joint.shapes.standard.Link();

    linke.source(uc210);
    linke.target(uc23);
    linke.appendLabel({
        attrs: {
            text: {
                text: 'Extend',
                fontSize: 16
            }

        }
    });
    linke.attr({
        line: {
            stroke: 'black',
            strokeWidth: 2,
            strokeDasharray: '4 2',


        }
    });

    linke.addTo(graph);

}
