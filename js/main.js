/*
 Greg Koenig
 Visual Frameworks 1302
*/

/*
    .getElementById("string"); >>> gets the HTML line of the particular ID
    .getElementsByTagName(); >>>> returns an Array of the elements tagged
    .value >>>> returns the value of an ID from the HTML 
    .addEventListener("event", function);
    .setAttribute ("attribute name", "attribute value");
    .removeAttribute ();
    .innerHTML >>> returns text from the HTML tag
                    var myh2 = document.getElementById("ID of H2 tag");
                    console.log(myh2.innerHTML)
                    
    .addEventListener("click or blur or focus", whatToDo) >>> change, mouseover, mouseout
    .createElement("string");  >>>>> example    document.createElement("li");
    .appendChild("string");
    
*/
//Getting the form variables //
var boardBrand = document.getElementById("brand");
var accessCategory = document.getElementById("addaBoard").Category;
var boardWidth = document.getElementById("width");
var bearingType = document.getElementById("addaBoard").bearing;
var truckBrand = document.getElementById("truckBrand");
var accessChecked = document.getElementById("addaBoard").accessories;
var manuDate = document.getElementById("date");
var notes = document.getElementById("notes");
var createLi = document.createElement("li");
var createUl = document.createElement("ul");
var accessories;
       
       


//Create more categories
var categoryAdds = ["Vintage", "Novelty", "Art Piece"];
for (i=0, j=categoryAdds.length; i<j; i++) {
    var createOption = document.createElement("option");
    createOption.innerHTML = categoryAdds[i];
    createOption.value = categoryAdds[i];
    accessCategory.appendChild(createOption);    
}


// Get the value of the check boxes
var getAccessories = function(){
    for (i=0, j=accessChecked.length; i<j; i++){
        if(accessChecked[i].checked){
            return accessChecked[i];
            
        }
    }
    
}

//get value of Bearing radio buttons
var getBearingRating = function(){
    for (i=0, j=bearingType.length; i<j; i++){
        if(bearingType[i].checked){
            return bearingType[i];
        }
    }
    
}


//Get the data into storage!
var getData = function(){
    localStorage.setItem("Board Brand", boardBrand.value);
    localStorage.setItem("Category", accessCategory.value);
    localStorage.setItem("Width", boardWidth.value);
    localStorage.setItem("Accessories", accessories.value);
    localStorage.setItem("Bearings", getBearingRating);
    localStorage.setItem("Trucks", truckBrand.value);
    localStorage.setItem("Manufacturer's Date", manuDate.value);
    localStorage.setItem("Notes", notes.value);
}




submitbutton.addEventListener("click", getData);






