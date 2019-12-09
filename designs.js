// Select color input
var colorPicker = document.querySelector("#colorPicker").value;
// Select table input
var pixelCanvas = document.getElementById("pixelCanvas"),pixels;
var sizePicker = document.getElementById("sizePicker");

function makeGrid(height, width) {
    //loop for create rows
    for (var m = 0; m < height; m++) {
        var tableRow = document.createElement("tr");
        //loop for create columns
        for (var i = 0; i < width; i++) {
            var tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        pixelCanvas.appendChild(tableRow);
    }
}

function colorPixel(e){
  colorPicker = document.querySelector("#colorPicker").value;
  e.target.style.backgroundColor = colorPicker;
}

sizePicker.addEventListener('submit', function(e){
    e.preventDefault();//Clear table
    document.getElementById("pixelCanvas").innerHTML = "";

    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;

    makeGrid(height,width);

    var pixels = document.querySelectorAll('td');
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', colorPixel, false);
    }
});
