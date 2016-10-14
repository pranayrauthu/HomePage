function addNewUrl(){
    //getting form data
    var formData = document.forms[0];
    var name = formData.elements[0].value;
    var url = formData.elements[1].value;
    var bgColor = formData.elements[2].value||"blue";
    
    //creating object
    var linkJSON = localStorage.getItem("links");
    var linkArray = JSON.parse(linkJSON);
    linkArray.push({"name":name,"url":url,"bgcolor":bgColor});
    localStorage.setItem("links",JSON.stringify(linkArray));
    alert("link added successfully");
}

//displaying links for edit
var localLinksInJson = window.localStorage.getItem("links");
window.onload = function(){
    if(localLinksInJson){
        var localLinks = JSON.parse(localLinksInJson);
        var linkList = document.getElementById("all_links");
        for(var i in localLinks){
            var liTag = document.createElement("li");
            var link = localLinks[i].name + " : " + localLinks[i].url + " <button class='link_del_btn' id=" + i +" >Delete</button>";
            liTag.innerHTML = link;
            linkList.appendChild(liTag);
        }
        var btnList = document.getElementsByClassName("link_del_btn");
        for(var i=0; i<btnList.length; i++){
            var curbtn = btnList[i];
            curbtn.addEventListener("click",function(){deleteLinks(curbtn)});
        }
    }
}

//delete function
function deleteLinks(element){
    var localLinks = JSON.parse(localLinksInJson);
    var id = element.getAttribute("id");
    id = parseInt(id);
    var index = localLinks.indexOf(localLinks[id]);
    if(index>-1){
        localLinks.splice(index,1);
    }
    localLinks = JSON.stringify(localLinks);
    window.localStorage.setItem("links",localLinks);
    alert("deleted successfully");
    window.location.reload();
}

