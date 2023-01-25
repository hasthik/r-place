
function theBox(row)
{
    var output = ""
    for(var i = 0;i<200;i++)
    {
        output+=`<div class="tile" id="R${row}C${i+1}" onmouseover="displayPallete()"></div>`
    }
    return(output)
}

var selectedId = ""
var colour = "black"
var canvas = document.querySelector(".canvas")
for(var i = 0;i<150;i++)
{   
    canvas.innerHTML+=theBox(i+1)
}  


function displayPallete()
{
    selectedId = event.target.id
    changeColour(selectedId)
    var pallete = document.querySelector(".colour-picker")
    pallete.style.display = "block"
}
function hidePallete()
{
    colour = event.target.className
    var pallete = document.querySelector(".colour-picker")
    pallete.style.display = "none"
}
changeColour = (id) =>
{
    document.querySelector(`#${id}`).style.backgroundColor = colour
}

