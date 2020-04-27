

function openLink(url){
    window.open(url);
}

function openPage(url){
    
window.location.href = url;
}


const theme = localStorage.getItem('theme');


if(theme){
    if(theme == "dark"){
        SetDark();
    }

    if(theme == "solar"){
        SetSolar();
    }

    if(theme == "bull"){
        SetBull();
    }
}


function SetDark(){
    var html = document.getElementsByTagName('html')[0];
    html.style.cssText = "--mainColor: #222222; --secondColor: #121212;color:white;--highLight:#FFFFFF;";
    localStorage.setItem('theme','dark');
}

function SetSolar(){
    var html = document.getElementsByTagName('html')[0];
    html.style.cssText = "--mainColor: #eee8d5; --secondColor: #fdf6e3	;color:#657b83;--highLight:#657b83;";
    localStorage.setItem('theme','solar');
}

function SetBull(){
    var html = document.getElementsByTagName('html')[0];
    html.style.cssText = "--mainColor: #16254C; --secondColor: #D0B672	;color:black;--highLight:var(--mainColor);";
    localStorage.setItem('theme','bull');
}


function showThemeSelector(){
    var themeSelector = document.getElementById("themeSelector");
    themeSelector.style.opacity = 1;
}
function hideThemeSelector(){
    var themeSelector = document.getElementById("themeSelector");
    themeSelector.style.opacity = 0;
}