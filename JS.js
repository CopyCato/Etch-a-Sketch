const container = document.querySelector('.grid-container');
const button = document.querySelector('button');
let gridSize = 16;
let autoString = '';

function createGrid(gridSize){
  for(let i = 0; i < gridSize; i++){
    autoString += 'auto ';
    for(let j = 0; j < gridSize; j++){
      const div = document.createElement('div');
      div.classList.add('grid-item');
      container.appendChild(div);
    }
  }
  container.style.gridTemplateColumns = autoString;
}

function deleteGrid(){
  const element = document.querySelectorAll('.grid-item ');
  element.forEach((item) => {
    item.remove();
  });
}

function hoverEffect(){
  const hover = document.querySelectorAll('.grid-item');
  hover.forEach((item) => {
    item.addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = "blue";
    });
  });
}

createGrid(gridSize);
hoverEffect();


button.addEventListener('click', () => {
  deleteGrid(gridSize);
  autoString = '';
  let newGridSize = 0;
  newGridSize = prompt('Number of squares per side for the new grid');
  if(newGridSize < 100){
    createGrid(newGridSize);
    hoverEffect();
  }
});