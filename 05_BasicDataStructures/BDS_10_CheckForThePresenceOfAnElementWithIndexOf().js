var quickCheck = function (arr, elem) {
    return (arr.indexOf(elem) == -1) ? false : true;
}

/*function quickCheck(arr, elem){
// Only change code below this line
if(arr.indexOf(elem)==-1){
    return false;
} else{
    return true;
}
  }*/

console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));