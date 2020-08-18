import  "./css/styles.css";

const generateBoxes = function(){

  let figure = document.querySelector('.imageContainer');
  figure.style.width = "300px";
  figure.style.margin = "0 auto";
  figure.style.display = "grid";
  figure.style.gridTemplateColumns = "100px 100px 100px";
  figure.style.gridTemplateRows = "repeat(3,minmax(100,auto))";
  figure.style.gap = "2px";
  for(let idx = 0; idx < 9; idx++){
    let colors = ["red","green","yellow","orange","blue","black","grey","salmon","silver","lightblue"];
    let index = Math.floor(Math.random()*(colors.length));
    let color = colors[index];
    /*Boxes*/
    let div = document.createElement('div');
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = `${color}`;
    figure.appendChild(div);
  }
  let childs = figure.children;
  /*First row*/
  childs[0].style.gridColumn = "1/2"; childs[0].style.gridRow = "1/2";
  childs[1].style.gridColumn = "2/3"; childs[1].style.gridRow = "1/2";
  childs[2].style.gridColumn = "3/4"; childs[2].style.gridRow = "1/2";
  /*Second row*/
  childs[3].style.gridColumn = "1/2"; childs[3].style.gridRow = "2/3";
  childs[4].style.gridColumn = "2/3"; childs[4].style.gridRow = "2/3";
  childs[5].style.gridColumn = "3/4"; childs[5].style.gridRow = "2/3";
  /*Third row*/
  childs[6].style.gridColumn = "1/2"; childs[6].style.gridRow = "3/4";
  childs[7].style.gridColumn = "2/3"; childs[7].style.gridRow = "3/4";
  childs[8].style.gridColumn = "3/4"; childs[8].style.gridRow = "3/4";
}();


const enlargeTarget = function(){
  let figure = document.querySelector('.imageContainer');
  figure.addEventListener("click",function(event){
    console.log(event.target.tagName)
    if(event.target.tagName === 'DIV'){
      let enlarge_target = document.createElement('section');
      enlarge_target.style.position = "absolute";
      enlarge_target.style.top = window.pageYOffset + "px";
      enlarge_target.style.left =  window.pageXOffset + "px";
      enlarge_target.style.background = 'rgba(0,0,0,0.5)';
      enlarge_target.style.width = window.innerWidth + "px";
      enlarge_target.style.height = window.innerHeight + "px";
      closeX(enlarge_target);
      document.querySelector('body').appendChild(enlarge_target);

    }
  },false)
}();
/*Close screen*/
function closeX(parent){
  let close = document.createElement('span');
  close.innerHTML = "X";
  close.style.position = "absolute";
  close.style.top = "10px";
  close.style.right = "30px";
  close.style.color = "white";
  close.style.fontSize = "30px";
  parent.appendChild(close);
  close.addEventListener('mouseover',function(event){
    event.target.style.color = "red";
    setTimeout(function(){
      event.target.style.color = "white";
    },500);
  },false);
  close.addEventListener('click',function(){
    if(parent){
      parent.parentNode.removeChild(parent);
    }
  });
}

generateBoxes();
enlargeTarget();
