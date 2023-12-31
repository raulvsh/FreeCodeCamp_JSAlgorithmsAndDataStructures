function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];


    const getOrbPeriod = function(obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        // create new object
        return {name: obj.name, orbitalPeriod: orbPeriod};
      };
    
      for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
      }
    


    //console.log(arr)
    return newArr;

  }
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));