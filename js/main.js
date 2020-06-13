const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const closeHam = document.getElementById('close');
const menuNav =  document.querySelector('.nav_menu');
let showMenu = false;

menu.addEventListener('click', toggle);

function toggle(){
    if(!showMenu){
        menuNav.classList.add('open');
        hamburger.classList.add('close');
        closeHam.classList.add('open');

        showMenu = true;
    }else{
        menuNav.classList.remove('open');
        hamburger.classList.remove('close');
        closeHam.classList.remove('open');

        showMenu = false;
    }

}



// TABBED SECTION JS
document.getElementById("defaultOpen").click();

function openTab(evt, data) {
    var i, tabLinks, tabContent;

    tabContent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("show", "");
    }

    document.getElementById(data).style.display = "flex";
    evt.currentTarget.className += " show";
}

// ACCORDION
var accordion = document.getElementsByClassName('accordion');

for(var i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    });
}