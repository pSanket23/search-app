var pages = [
    {"text":"apage", "url":"a.html", "keywords":["apage","akey", "aword", "aline"]},
    {"text":"bpage","url":"b.html", "keywords":["bpage","bkey", "bword", "bline"]},
    {"text":"cpage","url":"c.html", "keywords":["cpage","ckey", "cword", "cline"]},
    {"text":"dpage","url":"d.html", "keywords":["dpage","dkey", "dword", "dline"]},
    {"text":"epage","url":"e.html", "keywords":["epage","ekey", "eword", "eline"]}
]

function searchPage(){
    var inputP = document.getElementById("searchbar").value
    
    //document.getElementById("show").innerHTML = pages[2]["keywords"][3]
    /*if(inputP.match(pages[2]["keywords"][3])){
        document.getElementById("show").innerHTML = "<a href=" + pages[2]["url"] + ">" + pages[2]["text"] + "</a>"
    }else{
        document.getElementById("show").innerHTML = "False"
    }*/
    var tempPages = []
    for(var i=0 ; i < pages.length; i++){
        for(var j=0; j < pages[i]["keywords"].length; j++){
            if(inputP.toLowerCase().match(pages[i]["keywords"][j])){
                var tempStr = "<a href=" + pages[i]["url"] + ">" + pages[i]["text"] + "</a>"
                
                if(!tempPages.includes(tempStr))
                    tempPages.push(tempStr)
            }   
        }
    }
    

    tempList = ""
    for(var i=0 ; i < tempPages.length; i++){        
        tempList = tempList + '<li class="list-item">' + tempPages[i] + "</li>";
    }

    if(!tempList == ""){
        document.getElementById("list").innerHTML = tempList
    }
    
}

function search_animal() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('animals'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 