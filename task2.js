String.prototype.noOfKeys = function(){
  var m = Object.keys(obj).length;
   return m ;
  };
  
  var obj = {name:'sam',city:'jhs'};
  console.log("obj ".noOfKeys());
  