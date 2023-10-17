/*let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
  */
  function Bird() {
    let weight = 15;
  
    this.getWeight = function(){
        return  weight;
    }
  }
  let funModule = (function(){
    return{
        isCuteMixin: function(obj){
            obj.cute=function(){
                console.log("I'm so cute");
            }
        },
        singMixin: function(obj){
            obj.sing=function(){
                console.log("I'm singing");
            }
        },
    }
  }

  )();

  let duck = new Bird();

  funModule.isCuteMixin(duck);
  funModule.singMixin(duck);

  duck.cute();
  duck.sing();