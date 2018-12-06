function vowels(str){
    this.str=str;
}
vowels.prototypes.countvowel= function(){
    var m = vowels1.match(/[aeiou]/gi);
   m === null ? 0 : m.length;{
  console.log('m');
   }
}
var vowels1 = new vowels('hello');
vowels1.countvowel();
