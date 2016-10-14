/* setting logos of the links */
window.addEventListener("load",setLogos);

function setLogos(e){
	var logoProvider = "http://icons.better-idea.org/allicons.json?pretty=true&url=";
	var links = document.querySelectorAll("a.link");
	var imgURL = "";
	var linkDiv;
	for(var i = 0; i < links.length; i++){
		imgURL = logoProvider+links[i].getAttribute("href");
		loadJSON(imgURL,i); //updating the image URL  via JSON  service
	}
}

function loadJSON(data_file,curDiv){
	var http_request = new XMLHttpRequest();
	try{
	   // Opera 8.0+, Firefox, Chrome, Safari
	   http_request = new XMLHttpRequest();
	}catch (e){
	   // Internet Explorer Browsers
	   try{
		  http_request = new ActiveXObject("Msxml2.XMLHTTP");					
	   }catch (e) {				
		  try{
			 http_request = new ActiveXObject("Microsoft.XMLHTTP");
		  }catch (e){
			 // Something went wrong
			 alert("Your browser broke!");
			 return false;
		  }					
	   }
	}
	
	http_request.onreadystatechange = function(){
	
	   if (http_request.readyState == 4  ){
		  // Javascript function JSON.parse to parse JSON data
		  var jsonObj = JSON.parse(http_request.responseText);
		  var imgURLfromJSON = jsonObj.icons[0].url;
		  document.querySelectorAll("div.link-div")[curDiv].style.backgroundImage = "url(\""+imgURLfromJSON+"\")";
	   }
	}
	
	http_request.open("GET", data_file, true);
	http_request.send();
 }