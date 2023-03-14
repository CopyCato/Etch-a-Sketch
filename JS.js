const container = document.querySelector('.grid-container');

for(let i = 0; i < 256; i++){
  const div = document.createElement('div');
  div.classList.add('grid-item');
  container.appendChild(div);
}

const hover = document.querySelectorAll('.grid-item');
hover.forEach((item) => {
  item.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "blue";
  });
});
