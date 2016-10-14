/* making an AJAX call to bing for today's image */
(function(){
	loadJSON();
})();

 function loadJSON(){
	var data_file = "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US";
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

		  var bgImage = "url(\"http://www.bing.com"+jsonObj.images[0].url+"\")";
		  document.querySelector("html").style.backgroundImage = bgImage;
	   }
	}
	
	http_request.open("GET", data_file, true);
	http_request.send();
 }