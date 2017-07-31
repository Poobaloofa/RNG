function findMaxCount(array){
  var max = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i].count > max){
      max = array[i].count
    }
  }
  return max;
}
