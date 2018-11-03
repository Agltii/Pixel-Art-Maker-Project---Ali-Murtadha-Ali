//Function to creat cells based on the height and width inputs by the user
function makeGrid() { 
    //Assign the elements to variabels
    var height = document.getElementById('inputHeight').value; 
    var width = document.getElementById('inputWidth').value;   
    var table = document.getElementById('pixelCanvas');        
    
    // To draw the table based on the user inputs
    table.innerHTML = '';
    var tbody = document.createElement('tbody'); 
    // Add rows as per the value of height
    for (var i = 0; i < height; i++) {           
        var tr = document.createElement('tr');
        // Add cells as per the value of width
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

// Add color to the cells 
$('body').on('click', 'td', function() { 
	var color = document.getElementById('colorPicker').value; //Assign the elements to variabels
    $(this).css('background-color', color); //Set the color as per the color picker
});