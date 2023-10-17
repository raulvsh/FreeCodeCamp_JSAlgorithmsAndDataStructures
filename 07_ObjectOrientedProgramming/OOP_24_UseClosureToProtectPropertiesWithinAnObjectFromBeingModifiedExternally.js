function Bird() {
    let weight = 15;
  
    this.getWeight = function(){
        return  weight;
    }
  }

let seagull = new Bird();

console.log(seagull.getWeight());