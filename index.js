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