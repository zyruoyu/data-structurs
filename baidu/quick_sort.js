// 分治 
// 1. 随机选择数组中的一个数A 基准中点
// 2. 其他数与他比较 小于它的放左边 大于它的放右边
// 3. 递归的思想， 将左边的数和右边的数重复做两次
// a ， b ， c
// a.concat(b).concat(c)
// 执行效率不一样 N*logN
// 简单算法 冒泡 选择 插入n*n
// const arr = [85, 24, 63, 45, 17, 31, 96, 50];
// function quickSort(arr){//快速排序
//     if(arr.length <= 1){
//         return arr;
//     }
//     let pivotIndex = Math.floor(arr.length / 2);
//     // let pivot = arr[pivotIndex];
//     let pivot = arr.splice(pivotIndex, 1)[0];    
//     let left = [];
//     let right = []
//     for (let i = 0; i< arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat([pivot], quickSort(right));//concat 数组拼接
// }
// let qs = quickSort(arr)
// console.log(qs)





let arr = [2,5,4,7,1]

function qs(arr){
    
    if(arr.length <= 1){
        return arr
    }
    let povidIndex = Math.floor(arr.length/2)
    let povid = arr.splice(povidIndex, 1)
    let left = []
    let right = []
    for(let i = 0; i <arr.length; i++){
        if(povid < arr[i]){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return qs(right).concat([povid], qs(left))
}
console.log(qs(arr))