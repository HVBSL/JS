var mouse = document.getElementById('btn');

mouse.addEventListener('mousedown', function () {
    console.log("Mouse down event");
    alert("mouse Down Event")
});

mouse.addEventListener('click', function () {
    console.log("click event");
    alert("Mouse Click Event")
});

mouse.addEventListener('mouseup', function () {
    console.log("Mouse up event");
    alert("mouse Up Event")

});

mouse.addEventListener('dblclick', function () {
    console.log("double click event");
});

var over = document.getElementById('div1');
var oinc = 0;
over.addEventListener('mouseover', function () {
    var count = document.querySelector('#div1 p');
    oinc += 1;
    count.innerHTML = oinc;

    console.log("mouse over event")
});

var mov = document.getElementById('div2');
var minc = 0;
mov.addEventListener('mousemove', function () {
    var count = document.querySelector('#div2 p');
    minc += 1;
    count.innerHTML = minc;
    console.log("mouse move event")
});

var enter = document.getElementById('div3');
var linc = 0;
enter.addEventListener('mouseleave', function () {
    var count = document.querySelector('#div3 p');
    linc += 1;
    count.innerHTML = linc;
    console.log("mouse enter event");
    enter.style.backgroundColor = 'red';
});