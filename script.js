
const container = document.querySelector(".container");
const button = document.querySelector("button");
let opacityPercentage = 10;

function generateBoxes(numberOfBoxes){

    let row;
    let column;
    
    let size = 800/numberOfBoxes;
    let count = 0

    for(let i = 1; i <= numberOfBoxes; i++){
    
        row = document.createElement("div");
        row.classList.add("row");
        row.style.height = size + "px";
        for(let j = 1; j <=numberOfBoxes; j++){
            
            column = document.createElement("div");
            column.classList.add("column");
            column.setAttribute("id", "box" + count);
            column.style.width = size + "px";
            column.style.height = size + "px";
            row.appendChild(column);

            count++;

        }
        
        container.appendChild(row);
    }    


}

function changeColor(event){
    let target = event.target;
    
    const colorPallete = ["#756AB6", "#E0AED0", "#FFE5E5", "#F7EFE5", "#E2BFD9", "#C8A1E0", "#674188"];

    let colorSelector = Math.floor(Math.random() * 6);


    let color = window.getComputedStyle(target).backgroundColor;

    console.log(color);

    if(target.tagName === "DIV" && color === "rgba(0, 0, 0, 0)"){
        target.style.backgroundColor = colorPallete[colorSelector];
        target.style.opacity = opacityPercentage + "%";

        if(opacityPercentage <= 100){
            opacityPercentage += 10;
        }
    }
    
}


function getUserInput(){
    opacityPercentage = 0;
    container.innerHTML = '';
    const numberOfBoxes = prompt("Enter the number of grid: ");

    if(numberOfBoxes <= 100){
        generateBoxes(numberOfBoxes);

    }
    else{
        alert("Invalid number");
    }
    
}

getUserInput();

container.addEventListener("mouseover", changeColor);
button.addEventListener("click", getUserInput);




