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

//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function() {

    //getElementByID function
    function GetID(x){
        var element = document.getElementById(x);
        return element;   
    }


    //Getting the form variables //
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
    var bearingValue;
    var accessoryValue;
           
    
    
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
        accessoryValue =[];
        for (i=0, j=accessChecked.length; i<j; i++){
            if(accessChecked[i].checked){
                accessoryValue.push(accessChecked[i].value);
                
            }
        }
        
    }
    
    //get value of Bearing radio buttons
    var getBearingRating = function(){
        for (i=0, j=bearingType.length; i<j; i++){
            if(bearingType[i].checked){
                bearingValue = bearingType[i].value;
            }
        }
        
    }
    
    
    //Get the data into storage!
    var saveData = function(){
        var id = Math.floor(Math.random()*100000000);
        //Get form fields and put in object
        //Object will contain value and input
        getAccessories();
        getBearingRating();
        var formItem = {};
            formItem.board = ["Board: ", GetID("brand").value];
            formItem.category = ["Category: ", GetID("Category").value];
            formItem.width = ["Width: ", GetID("width").value];
            formItem.bearing = ["Bearings: ", bearingValue];
            formItem.trucks = ["Trucks: ", GetID("truckBrand").value];
            formItem.accessories = ["Accessories: ", accessoryValue];
            formItem.manudate = ["Manufacturer's Date: ", GetID("date").value];
            formItem.notes = ["Notes: ", GetID("notes").value];
            //save data into local storage using stringify.
            localStorage.setItem(id, JSON.stringify(formItem));
            alert("Board is saved");
    }
    
    
    //togglecontrols
    var toggleControls = function(n){
        switch(n){
            case "on":    
                GetID("addaBoard").style.display = "none";
                GetID("clearButton").style.display = "inline";
                GetID("displayBoards").style.display = "none";
                GetID("addNew").style.display = "inline";
                break;
            case "off":
                GetID("addaBoard").style.display = "block";
                GetID("clearButton").style.display = "inline";
                GetID("displayBoards").style.display = "inline";
                GetID("addNew").style.display = "none";
                GetID("NewBoards").style.display = "none";
                break;
            default:
                return false;
        }
        
    }
    
    
    //put data to the browser
    var getData = function(){
        toggleControls("on");
        if(localStorage.length ===0){
            alert("Ya gotta add a board first!");
        }
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "NewBoards");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeList);
        //GetID("NewBoards").style.display = "block";
        for (var i=0, j=localStorage.length; i<j; i++) {
            var makeLi = document.createElement("li");
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //connecting string in localstorage to an object
            var object = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeLi.appendChild(makeSubList);
            for ( var n in object ){
                var makeSubLi = document.createElement("li");
                makeSubList.appendChild(makeSubLi);
                var optSubText = object[n][0] + " " + object[n][1];
                makeSubLi.innerHTML = optSubText;
            }
        }
        
    }
    
    var clearData = function(){
        if(localStorage.length === 0){
            alert ("There is no data to clear.")
            
        }else{
            localStorage.clear();
            alert ("All boards deleted.");
            window.location.reload();
            return false;
        }
        
    }
    
    //form button actions
    var submitbutton = GetID("submitbutton");
    submitbutton.addEventListener("click", saveData);
    var clearButton = GetID("clearButton");
    clearButton.addEventListener("click", clearData);
    var displayBoards = GetID("displayBoards");
    displayBoards.addEventListener("click", getData);



} );