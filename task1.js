function vowels(str){
    this.str=str;
}
vowels.prototype.countVowel= function(){

    var m = this.str.match(/[aeiou]/gi);
   m === null ? 0 : m.length;
  console.log(m.length);
   }

var vowels1 = new vowels('hello');
vowels1.countVowel();