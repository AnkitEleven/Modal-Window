'use strict';
let button = document.querySelectorAll(".showmodal");
for(let i = 0; i<button.length; i++)
{

    button[i].addEventListener("click", dialogopen);
    
    
}
function dialogopen() {
    let container = document.querySelector(".container1");
    container.classList.add("open");

var limit = 3;
jQuery.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    headers: { 'X-Api-Key': '/XqYktXf0JFzNFMYYZ/o2w==wAMTlzuBeQpRV1xD'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        let facts = document.querySelector(".facts");
        facts.textContent = JSON.stringify(result[0].fact);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

  
}

function closedialog() {
    let container = document.querySelector(".container1");
    container.classList.remove("open");
    // Remove the click event listener when closing the dialog
    document.removeEventListener("click", clickOutsideHandler);
}

// Example usage
// dialogopen();

// Example usage
// dialogopen();

function closedialog( )
{

    let container = document.querySelector(".container1");
    container.classList.remove("open");
}
let crossbutton = document.querySelector(".crossbutton");
crossbutton.addEventListener("click", closedialog)

addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closedialog();
    }
});


