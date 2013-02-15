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
var boardBrand = document.getElementById("brand");
var createUl = document.createElement("ul");
var createLi = document.createElement("li");
var accessChecked = document.getElementById("addaBoard").accessories;

/* Get the value of the check boxes */
var getAccessories = function(){
    for (i=0, j=accessChecked.length; i<j; i++){
        if(accessChecked[i].checked){
            console.log(accessChecked[i].value);
        }
    }
    
}

var getBrand = function(){
    console.log(boardBrand.value);
}

submitbutton.addEventListener("click", getAccessories);