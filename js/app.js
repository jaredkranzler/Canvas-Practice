console.log("lifes a Garden, Dig It");


const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d');

// function makeGrid(size){
//   if(size == undefined){
//     size = 100
//   }

  // draw the horizontal line using a for loop
  // for(let i = 0; i < canvas.height; i = i + size){
  // ctx.beginPath();
  // ctx.moveTo(0, i);
  // ctx.lineTo(canvas.width, i);
  // ctx.strokeStyle = "#009900";
  // ctx.stroke();
  // }
  // // draw the virtical lines using a for loop
  // for(let i = 0; i < canvas.width; i = i + size){
  // ctx.beginPath();
  // ctx.moveTo(i, 0);
  // ctx.lineTo(i, canvas.height);
  // ctx.strokeStyle = "#009900";
  // ctx.stroke();

  // }
// }
// makeGrid()

function draw(){
  for(var x = 0; x < 8; x++){
    for(var y = 0; y < 8; y++){
      if (x%2 == y%2){
        ctx.fillStyle = 'black';
        ctx.fillRect(100*x,100*y,100,100);
      }
      // else {
      //   ctx.fillStyle = 'white';
      //   ctx.fillRect(100*x,100*y,100,100);
      // } 
    }
  }
}
draw()
  





