// Select color input
// Select size input
var height, color, width,pixels,rows,cell;
// When size is submitted by the user, call makeGrid()
var sizeSubmission;

sizeSubmission = $('input[type="submit"]')

sizeSubmission.click(function(event) {
  event.preventDefault();
  makeGrid();
});
function makeGrid() {

// Your code goes here!

 pixel = $('#pixelCanvas');
 height = $('#inputHeight').val();
 width = $('#inputWidth').val();

$('#pixelCanvas').children().remove();


for (i = 1; i <= height; i++) {
pixel.append('<tr></tr>');
rows = $('tr');
for (j = 1; j <= width; j++) {
    rows.append('<td></td>');
    } 
}

 cell = pixel.find('td');

cell.click(function() {
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
});

}

