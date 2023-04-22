function minMax (array) {
    function compareNumbers(a, b) {
        return a - b;
    }
    minMaxArr = [];
    array.sort(compareNumbers);
    minMaxArr.push(array[0]);
    minMaxArr.push(array[array.length - 1]);

    return minMaxArr;
    
}

array1 = [3,2,4,5,1]
array2 = [2334454, 5];
array3 = [1];
array4 = [45, 6, 23, 890, 5, 1, 0, -4, -900];

console.log(minMax(array1));
console.log(minMax(array2));
console.log(minMax(array3));
console.log(minMax(array4));


