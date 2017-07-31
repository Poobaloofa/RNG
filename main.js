var graph1;
function myFunction(){
  console.log(graph1);
  var trial = random(parseInt(document.getElementById('min').value), parseInt(document.getElementById('max').value));
  console.log(trial);
  document.getElementById('result').innerHTML = trial;
  graph1.check(trial);
  graph1.update();
}
function replaceGraph(){
  graph1 = new graph(parseInt(document.getElementById('min').value), parseInt(document.getElementById('max').value));
  console.log(graph1);
  ctx.clearRect(0,0,500,500)
}
