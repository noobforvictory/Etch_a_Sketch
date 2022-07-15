const body =document.querySelector('.body');
const buttons =document.createElement('div')
buttons.classList.add('buttons');
const button = document.createElement('button');
button.classList.add('btn');
button.textContent="Make Grid";
buttons.appendChild(button);
const button1 = document.createElement('button');
button1.classList.add('btn');
button1.textContent="Draw";
buttons.appendChild(button1);
body.appendChild(buttons);
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
button.addEventListener('click',makeGrid);
button1.addEventListener('click',draw);

function makeGrid(){
  var num = Number(prompt("For N X N grid, enter N from 2 to 100"));
  if(num<2 || num>100){
    alert('OUT OF BOUNDS, TRY AGAIN');
    makeGrid();
    return;
   }else{
for(let i=0; i<num*num; i++){
    const i= document.createElement('div');
    i.classList.add('grid');
    container.style.gridTemplateColumns=`repeat(${num},1fr)`;
    container.style.gridTemplateRows=`repeat(${num},1fr)`;
    container.appendChild(i);
    }
   
  }
}

function draw(){
   const click = document.querySelectorAll('.grid');
   click.forEach(click=>click.addEventListener('click',mouseOver ));
}
function sketch(){
  this.classList.toggle('draw');
}


function mouseOver(){
  const click = document.querySelectorAll('.grid');
  click.forEach(click=>click.addEventListener('mouseover',sketch));
  
}

