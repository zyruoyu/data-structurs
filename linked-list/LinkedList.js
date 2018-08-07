import LinkedListNode from './LinkedListNode';
//形成一个链表 将结点连接起来
// 数据集合 从开始到结束 显示出来
// [] next 
// head
//  next
//  ....
// tail
export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;//结点
        while(currentNode) {
            nodes.push(currentNode)            
            currentNode = currentNode.next
        }
        return nodes;
    }
    append(value) {
        const newNode = new LinkedListNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode; 
            return this
        }
        this.tail.next = newNode;
        this.tail = newNode
        return this
    }
    prepend(value){
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode
        if(!this.tail){
            this.tail = newNode;
        }
        return this
        
        // this.head.next = this.head
        
    }
    delete(value){
        if(!this.head){
            return null
        }
        let deleteNode = null
        while(this.head && this.head.value === value){
            deleteNode = this.head;
            this.head = this.head.next
        }

        let currentNode = this.head;

        if(currentNode !== null){
            while(currentNode.next){
                if(currentNode.next.value === value){
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }else{
                    currentNode = currentNode.next;
                }
            }
        }
        if(this.tail.value === value){
            this.tail = currentNode;
        }
        return deleteNode;
        // deleteNode.next = null
    }
    find({value = undefined, callback = undefined}){
        if(!this.head){
            return null
        }
        let currentNode = this.head;
        while(currentNode){
            if(callback && callback(currentNode.value)){
                return currentNode;
            }
            if(value !== undefined && currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next
            
        }
        return null;
    }
    toString(callback){//打印
        return this.toArray().map(node => node.toString(callback)).toString()
    }
}