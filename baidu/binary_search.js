// function binary_search(arr, key){
//     let i = (arr.length - 1) ,
//     j = 0
//     while(j <= i){
//         let m = Math.floor((i+1)/2)
//         if( arr[i] < key){
//             i = m + 1
//         }else if(arr[i] > key){
//             j = m - 1
//         }else {
//             return m
//         }
//     }
//     return false
// }

// var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86]
// var result = binary_search(arr, 10)
// console.log(result)
function binary_search(arr, low, high, key){
    if(low > high){
        return -1
    }
    var mid = Math.floor(high + low/2);
    if(arr[mid] == key){
        return mid;
    }else if(arr[mid] > key){
        high = mid - 1;
    }else{
        low = mid + 1
        return binary_search(arr, low, high, key)
        
    }
}
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86]
var result = binary_search(arr, 0, 13, 2)
console.log(result)