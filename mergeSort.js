//MERGE SORT
const mergeSort = (arr) => {
    if(arr.length < 2) return arr
  
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle);
    let right = arr.slice(middle)
    
    return sort(mergeSort(left), mergeSort(right));
};
  
const sort = (left, right) => {
    const arr = [];
  
    while(left.length && right.length) {
      if(left[0] < right[0]) {
        arr.push(left.shift())
      }
      else {
        arr.push(right.shift())
      }
    }
    return arr.concat(left.slice()).concat(right.slice())
}