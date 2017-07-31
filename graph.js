var c = document.getElementById('canvas')
var ctx = c.getContext('2d')
function bar(x){
  this.value = x;
  this.count = 0;
  this.update = function(numb){
    if (numb == this.value){
      this.count++;
    }
  }
}
function graph(min, max){
  this.min = min;
  this.max = max;
  this.values = [];
  for(var i = min; i <= max; i++){
    this.values.push(new bar(i));
  }
  this.check = function(number){
    for(var i = 0; i <= max-min; i++){
      this.values[i].update(number)
    }
  }
  this.update = function(){
    ctx.clearRect(0,0,c.width,c.height)
    var maxCount = findMaxCount(graph1.values)
    console.log(maxCount)
    for (var i = 0; i < this.values.length; i++) {
      ctx.fillRect(c.width*i/this.values.length,c.height,c.width/this.values.length,(-c.height*this.values[i].count/maxCount)*.85)
    }
  }
}
