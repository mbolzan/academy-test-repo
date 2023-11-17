/* javascript */

// get event menu click
const menuItems = document.querySelectorAll(".menu a");
 for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        //menuItems[i].classList.toggle("red");
        console.info(menuItems[i]);
        alert(menuItems[i].textContent)
     });
 }

 // call ajax
 fetch('http://localhost:8080/json/api.json')
 .then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw response;
}).then(function (data) {
	console.log(data.item);
    document.querySelector("#data-ajax").innerHTML = data.item;
}).catch(function (error) {
	console.warn(error);
});