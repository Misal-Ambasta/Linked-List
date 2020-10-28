class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }
}


let del_LL = new LinkedList()
del_LL.insertLast(10)
del_LL.insertLast(20)
del_LL.insertLast(4)
del_LL.insertLast(30)

let del_node = del_LL.head.next
console.log(del_node, "delnode");

DeleteNode(del_node)

function DeleteNode(delNode) {

    if (delNode == null) {
        return
    }

    let temp = delNode.next
    delNode.data = temp.data
    delNode.next = temp.next


    del_LL.size--
}
console.log(del_LL);