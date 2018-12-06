String.prototype.countVowel= function(){

    var m = this.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
     }
console.log("aeiou" .countVowel())
