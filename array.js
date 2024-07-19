function countElements(arr){
    let sorted_arr = arr.sort();

    let count = {};

    for(let element of sorted_arr){
        if(count[element]){
            count[element]++;
        }else{
            count[element] = 1;
        }
    }
    return {sorted_arr, count};
}

let arr = [1, 1, 1, 2, 4, 5, 72, 2, 4, 7, 8, 3, 8, 5, 4];

console.log(countElements(arr).count);