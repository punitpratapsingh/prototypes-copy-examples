function person(name,age,gender,city){
    this.name=name;
    this.age=age;
    this.gender=gender;
  
  
  }
  person.prototype.nfkeys= function(){
    console.log(Object.keys(person1).length);
  }
  
  
  var person1 = new person('punit',21,'male',);
  
  person1.nfkeys();