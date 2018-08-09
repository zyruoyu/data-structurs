// 找到数组的最小值放在第一位
// 第二小的放在第二位
// 基址查询
function selectSort(arr){
    let len = arr.length;
    for(let i = 0; i< len; i++){
        let min = i;
        // 如果已经选择了就一定有序
        for( let j = i+1; j < len; j++){
            if( arr[min] > arr[j]){
                min = j
            }
        }
        if(min !== i){
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr;
}
const arr = [85, 24, 63, 45, 17, 31, 96, 50];
console.log(selectSort(arr))