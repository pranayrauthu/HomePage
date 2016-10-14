
window.addEventListener("load",firstLoad);

function firstLoad() {

    //links updating
    setLinks();
	
	//Notes Updating
	setNotes();

    //time updating
    setInterval(time, 1000);

    //create storage object if one is not present
    createStorageObjectForLinks();
	
	//create storage object for text area if one is not present
	createStorageObjectForNotes();
	
}

function setLinks(){
    //get link name and url from storage
    var linkJSON = window.localStorage.getItem("links");
    if(linkJSON){
        var linkArray = JSON.parse(linkJSON);
        var linksList = document.getElementById("links-list");
        for(var i in linkArray){
            var liTag = document.createElement("li");
            var anchorTag = document.createElement("a");
            var divTag = document.createElement("div");
            var spanTag = document.createElement("span");
			liTag.setAttribute("class","link-item");
			spanTag.setAttribute("class","link-text");
            spanTag.appendChild(document.createTextNode(linkArray[i].name));
            anchorTag.setAttribute("href",linkArray[i].url);
            divTag.setAttribute("class","link-div");
            divTag.style.backgroundColor = linkArray[i].bgcolor;
            divTag.appendChild(spanTag);
            anchorTag.setAttribute("class","link");
            anchorTag.appendChild(divTag);
            liTag.appendChild(anchorTag);
            linksList.appendChild(liTag);
        }
    }
}

function setNotes(){
	var notes = window.localStorage.getItem("notes");
	if(notes){
		var notesTag = document.getElementById("todo-input");
		notesTag.innerHTML = notes;
		notesTag.addEventListener("input",updateNotes);
	}
}

function time() {
    var d = new Date();
    document.getElementById("timeDisplay").innerHTML = d.toUTCString();
}

function createStorageObjectForLinks(){
    if((window.localStorage.getItem("links") == undefined)||(window.localStorage.getItem("links") == "")){
        var linksArray = new Array({name:"Click here to add a tile",url:"settings.html",bgcolor:"test"});
        window.localStorage.setItem("links",JSON.stringify(linksArray));
        setLinks();
    }
}

function createStorageObjectForNotes(){
	if((window.localStorage.getItem("notes") == undefined)||(window.localStorage.getItem("notes") == "")){
        window.localStorage.setItem("notes","//TODO or notes (*entered text will be saved automatically)");
        setNotes();
    }
}

function updateNotes(e){
	window.localStorage.setItem("notes",e.target.value);
}