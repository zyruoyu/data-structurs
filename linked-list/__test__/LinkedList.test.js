import LinkedList from '../LinkedList';

describe('LinkedList', () => {
    it('should create empty linked list', () =>{
        const linkedList = new LinkedList()
        expect(linkedList.toString()).toBe('');
    });
    it('should append node to linked list', () => {
        const linkedList = new LinkedList();
        
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        // linkedList.append(1);
        // linkedList.append(1);
        linkedList.append(1).append(2).append(3);

        expect(linkedList.toString()).toBe('1,2,3');
        
    });
    it('should prepend node to linked list', () =>{
        const linkedList = new LinkedList()
        linkedList.append(1).append(3)
        expect(linkedList.head.toString()).toBe('1')
        expect(linkedList.tail.toString()).toBe('3');
        linkedList.prepend(2);
        expect(linkedList.toString()).toBe('2,1,3')
    });
    it('should delete node by value from linked linked list', () =>{//把前一个结点的next 前一个结点的next.next
        const linkedList = new LinkedList()
        expect(linkedList.delete(5)).toBeNull(); 
        linkedList.append(1).append(1).append(2);
        expect(linkedList.head.toString()).toBe('1')
        expect(linkedList.tail.toString()).toBe('2')

        const deleteNode = linkedList.delete(2)
        expect(deleteNode.value).toBe(2)
        expect(linkedList.toString()).toBe('1,1')
        
    });
    it('should create empty linked list', () =>{
        const linkedList = new LinkedList()
        expect(linkedList.find({value:5})).toBeNull()

        linkedList.append(1).append(2).append(3)
        const node = linkedList.find({value:3});
        expect(node.value).toBe(3)
        expect(linkedList.find({value: 5})).toBeNull();
    });
})