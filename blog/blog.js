
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readPost("blender-renders");


function readPost(title){
    var newDiv = document.createElement("div");
    var importedPost = readTextFile("./posts/"+title+".md");
    var newContent = parse(importedPost);
    newDiv.appendChild(newContent);  
}
