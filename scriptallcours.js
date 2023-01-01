var course = document.querySelector('.course');

function creationCours(path, titre, prix) {
    course.innerHTML += "<div class=\"col-3 card me-2 mb-2\"><img src=\"" + path + "\" alt=\"\" class=\"card-img\"> <p class=\"card-title\">" + titre + "</p><span class=\"card-text\">" + prix + "</span></div>";
}


function creationCours2(path, titre, prix) {
    // <div><div>
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    div.setAttribute('class', 'col-3 card me-2 mb-2');
    img.src = path;
    img.setAttribute('class', 'card-img');
    p.setAttribute('class', 'card-title');
    span.setAttribute('class', 'card-text');

    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    course.append(div)
}



courses.forEach((element) => {
    creationCours2(element.image, element.title, element.price)
})


//search input
const search = document.querySelector("form-control");
search.addEventListener('keyup',(e) => {
    const searchletter = e.target.value;
    const courses = document.querySelector(".course");
    filterElement(searchletter,courses);
});

function filterElement(letters,elements){
    if(letters.length >2){
        for(let i=0 ;i<elements.length;i++){
            if(elements[i].textContent.toLowerCase().includes(letters))
            {
                elements[i].style.display = "block";
            }
            else{
                elements[i].style.display = "none";
            }
        }
    }
}

//pour rang prix
var slider = document.getElementById("myrang");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}


const hh = document.getElementById("html");
const cc = document.getElementById("css");
const pp = document.getElementById("php");

//pour html
hh.addEventListener('click',(e) => {
    const searchletter = e.target.value;
    const courses = document.querySelector(".course");
    filterElementhh(searchletter,course);
});

function filterElementhh(elements){
        for(let i=0 ;i<elements.length;i++){
            if(elements[i].textContent.toLowerCase().includes("html"))
            {
                elements[i].style.display = "block";
            }
            else{
                elements[i].style.display = "none";
            }
        }
}

//pour css

cc.addEventListener('click',(e) => {
    const searchletter = e.target.value;
    const courses = document.querySelector(".course");
    filterElementcc(searchletter,course);
});
function filterElementcc(elements){
    for(let i=0 ;i<elements.length;i++){
        if(elements[i].textContent.toLowerCase().includes("css"))
        {
            elements[i].style.display = "block";
        }
        else{
            elements[i].style.display = "none";
        }
    }
}

//php

pp.addEventListener('click',(e) => {
    const searchletter = e.target.value;
    const courses = document.querySelector(".course");
    filterElementcc(searchletter,course);
});
function filterElementpp(elements){
    for(let i=0 ;i<elements.length;i++){
        if(elements[i].textContent.toLowerCase().includes("php"))
        {
            elements[i].style.display = "block";
        }
        else{
            elements[i].style.display = "none";
        }
    }
}