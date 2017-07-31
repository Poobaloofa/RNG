var t = 0
setInterval(
  function(){
    t++;
    if (t==10000000){
      t=0
    }
  },
  10
)
function random(a,b){
 var random01 = (Math.pow(t*Math.PI,Math.log(b-a+1)+1)%(a+(b+1)))/(a+(b+1))
 var randomab = Math.floor(random01*((b+1)-a) + a)
 return randomab
}
