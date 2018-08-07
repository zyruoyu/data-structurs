// 链表结点[] 内存分配给我们一定数量的空间
// 存储空间的连续性问题 灵活性不够
// a[10] = [1,,2,3,4]
export default class LinkedListNode {
    // data collections data node
    // linked list
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
    toString(callback){
        return callback? callback(this.value): `${this.value}`;
    }
}