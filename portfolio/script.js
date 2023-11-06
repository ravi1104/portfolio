
var interval;
let lastele=false;

let navmenutags=document.querySelectorAll('.navbar a');
for(let i=0;i<navmenutags.length;i++){
    navmenutags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetLink=this.textContent.trim().toLowerCase().replace(' ','');
        var targetId=document.getElementById(targetLink);
        if(i==navmenutags.length-1){
            lastele=true;
        }
        interval = setInterval(function () {
            scrollVertically(targetId);
        }, 20);
    })
}

function scrollVertically(targetId) {

    var targetIdCoordinates =
        targetId.getBoundingClientRect();

        // console.log(targetIdCoordinates.top);
    if (targetIdCoordinates.top <= 0||(lastele&& targetIdCoordinates.top<=125 ) ) {
        clearInterval(interval);
        lastele=false;
        return;
    }
    window.scrollBy(0, 50);
}


var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 10);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



window.addEventListener("scroll", checkScroll);
let isNav=true;
const tooglenav=document.getElementById('togglenav');
const nav=document.getElementById('dropdown-nav');
tooglenav.addEventListener('click',()=>{
    if(isNav){
        nav.style.display='flex';
        isNav=false;
    }
    else{
        nav.style.display='none';
        isNav=true;
    }
})