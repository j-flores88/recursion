//ASSIGNMENT 1 - FIBONACCI USING ITERATION
const fibs = (n) => {
    let fibArr = [0, 1];
  
    for(let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }
    return fibArr
}

// ASSIGNMENT 1.2 - FIBONACCI RECURSION
const fibsRec = (n) => {
    if(n === 0) return [0];
    if(n === 1) return [0, 1];
    const fibArr = fibs(n-1);
    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    return fibArr;
}

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