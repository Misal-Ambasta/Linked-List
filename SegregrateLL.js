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

const LL = new LinkedList()
LL.insertLast(1)
LL.insertLast(2)
LL.insertLast(2)
LL.insertLast(1)
LL.insertLast(2)
LL.insertLast(0)
LL.insertLast(2)
LL.insertLast(2)
// console.log(LL);
segregrate(LL.head)

function segregrate(head) {

    let arr = new Array(3).fill(0)
    let curr = head
    // console.log(arr, curr);

    while (curr) {

        arr[curr.data]++
        curr = curr.next
    }
    // console.log(arr);

    let value = head

    while (value) {

        if (arr[0] != 0) {
            value.data = 0
            arr[0]--
        }
        else if (arr[1] != 0) {
            value.data = 1
            arr[1]--
        }
        else if (arr[2] != 0) {
            value.data = 2
            arr[2]--
        }
        value = value.next
    }

    console.log(head);
    // while(head){
    //     console.log(head.data);
    //     head = head.next
    // }
}
