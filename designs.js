/*
Pixel Art Maker.
Built single-page web app that allows users to draw pixel art on
customizable canvas.
*/

$(document).ready( function() {

// This function will be used to create the canvas.
  function makeGrid() {

    const getGridHeight = $('.input_height').val();
    const getGridWidth = $('.input_width').val();
    const cell = $('.pixel_canvas');

//Nested for loops to create the table.
    for(let i = 0; i < getGridHeight; i++){
      cell.append('<tr class="row"> </tr>)');
      for(let j = 0; j < getGridWidth; j++){
        cell.children().last().append('<td class="column"></td>)');
      }
    }
  }

//Event Listener, to create the canvas, when user presses submit button.
  $('.sizePicker').on("submit", function( evt ) {
    evt.preventDefault();
    $('.row, .column').remove();
    makeGrid();
  });

//Event Listener, to add selected color in the clicked cell.
  $('.pixel_canvas').on("click", "td", function() {
    let selectedColor = $('.colorPicker').val();
    $(this).css('background-color', selectedColor);
  });

});
