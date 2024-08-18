
const container = document.querySelector(".container");
const button = document.querySelector("button");


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
    
    if(target.tagName === "DIV"){
        target.style.backgroundColor = "blue";
    }
    
}


function getUserInput(){

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




