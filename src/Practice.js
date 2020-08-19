import  "./css/styles.css";

const generateBoxes = function(){

  let figure = document.querySelector('.container');
  figure.style.width = "300px";
  figure.style.margin = "0 auto";
  figure.style.display = "grid";
  figure.style.gridTemplateColumns = "100px 100px 100px";
  figure.style.gridTemplateRows = "repeat(3,minmax(100,auto))";
  figure.style.gap = "2px";
  for(let idx = 0; idx < 9; idx++){
    let colors = ["red","green","yellow","orange","blue","black","grey","salmon","silver","lightblue"];
    let index = Math.floor(Math.random()*(colors.length));
    let color = "black";
    /*Boxes*/
    let div = document.createElement('div');
    div.id =`${idx+1}`
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = `${color}`;
    div.style.position = "relative";
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
/*open screen*/
const markBoxes = function(){
  let countX = 0;
  let countY = 0;
  /*MATRIX*/
  let matrix = [];
  let index = 1;
  let box = document.querySelector(".container").addEventListener("click",function(e){
    /*X element*/
    let x = document.createElement('div'); let y = document.createElement('div');
    x.style.className = "x_position";          y.style.className = "x_position";
    x.style.fontSize = "30px";                 y.style.fontSize = "30px";
    x.style.position = "absolute";             y.style.position = "absolute";
    x.style.right= "40px";                      y.style.right= "40px";
    x.style.top= "35px";                       y.style.top= "35px";
    x.style.color= "white";                    y.innerHTML = "O";
    x.innerHTML = "X";                         y.style.color= "white";
    let box_id = Number(e.target.id);
    let boxes= "";
      if(countX === countY){
        boxes= e.target;
        boxes.appendChild(x);
        countX++;
      }
      else if(countX > countY){
        boxes= e.target;
        boxes.appendChild(y);

        countY++;
      }
      else{
        boxes= e.target;
        boxes.appendChild(x);

        countX++;
      }

      if(index>=8){
        countX = 0;
        countY  = 0;
        index = 0;
        box.removeChild(boxes);
      }
      console.log(index)
      index++;

  },false);
}();
