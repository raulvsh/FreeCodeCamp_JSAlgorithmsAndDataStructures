function removeFirstTwo(list) {
    console.log("list: " + list)
    const [a, b, ...result] = list;
    console.log("a: " + a + " b: " + b + " list: " + result);
    return result;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);