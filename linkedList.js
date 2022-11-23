class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
}

class LinkedList {
    constructor(node){
        this.current = node;
    }
    
    append(value){
        const newNode = new Node(value);
        let now = this.current;
        while(now.nextNode != null){
            now = now.newNode;
        }
        now.nextNode = newNode;
    }

    prepend(value){
        let newHead = new Node(value);

        newHead.nextNode = this.current;
        this.current = newHead;
    }

    size(){

        let count = 1;
        let now = this.current;

        while(now.nextNode != null){
            now = now.nextNode;
            count++;
        }

        return count;
    }

    head(){
        return this.current;
    }

    tail(){
        let now = this.current;
        while(now.nextNode != null){
            now = now.nextNode;
        }
        return now;
    }

    at(index){
        let i = 0;
        let now = this.current;
        while(i != index){
            if(now.nextNode == null){
                return -1;
            }
            now = now.nextNode;
            i++
        }
        return now;
    }

    pop(){
        let last = this.size() - 2;
        let now = this.current;
        let i = 0;
        while(i < last){
            now = now.nextNode;
            i++;
        }

        let temp = now.nextNode;
        now.nextNode = null;
        return temp;
    }

    contains(value){
        let now = this.current;
        while(now.value != value){
            if(now.nextNode == null){
                return false;
            }
            now = now.nextNode;
        }
        return true;
    }
    
    find(value){
        let i = 1;
        let now = this.current;
        while(now.value != value){
            if(now.nextNode == null){
                return null;
            }
            now = now.nextNode;
            i++;
        }
        return i;
    }

    toString(){
        let now = this.current;
        let str = `(${now.value}) -> `;
        while(now.nextNode != null){
            now = now.nextNode;
            str += `(${now.value}) -> `;
        }
        str = str.substring(0, str.length - 4);
        return str;
    }

    insertAt(value, index){
        if(index == 0){
            this.prepend(value);
            return this.current;
        }
        let i = 0;
        let now = this.current;
        while(i != index - 1){
            if(now.nextNode == null){
                return -1;
            }
            now = now.nextNode;
            i++;
        }        
        const newNode = new Node(value);
        newNode.nextNode = now.nextNode;
        now.nextNode = newNode;
        return now;
    }

    removeAt(index){
        let i = 1;
        let now = this.current;
        while(i != index){
            if(now.nextNode == null){
                return -1;
            }
            now = now.nextNode;
            i++
        }
        
       now.nextNode = now.nextNode.nextNode;
        return now;
    }
}

let head = new Node(5);

let list = new LinkedList(head);

list.append(6);
console.log(list.toString());

list.prepend(4);
console.log(list.toString());

console.log(list.size());
console.log(list.head());
console.log(list.tail());

console.log("At");
console.log(list.at(0));
console.log(list.at(2));

console.log("Pop");
console.log(list.pop());
console.log(list.toString());

console.log("Contains");
console.log(list.contains(4));
console.log(list.contains(2));

console.log(list.toString());
console.log(list.insertAt(2, 1));
console.log(list.toString());
console.log(list.insertAt(6, 3));
console.log(list.toString());

console.log(list.insertAt(1, 0));
console.log(list.toString());

console.log("remove")
console.log(list.removeAt(4));
console.log(list.toString());