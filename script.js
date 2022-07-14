const body =document.querySelector('.body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
makeGrid(16);
function makeGrid(num){
for(let i=0; i<num*num; i++){
    const i = document.createElement('div');
    i.classList.add('grid');
    container.appendChild(i);
  }
}
