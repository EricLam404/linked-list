import Node from "./node";


class LinkedList {
    constructor(data){
        this.current = data;
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
        this.head = newHead;
    }

    size(){
        let count = 1;
        let now = this.current;

        while(now.nextNode != null){
            now = now.newNode;
            count++;
        }
        return count;
    }

    head(){
        return this.current;
    }

    tail(){
        let now = this.current;
        while(now.newNode != null){
            now = now.nextNode;
        }
    }

    at(index){
        let i = 1;
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
        let now = this.current;
        while(now.newNode != null){
            now = now.nextNode;
        }

        now = null;
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
        let str = `(${$now.value}) -> `;
        while(now.nextNode != null){
            now = now.newNode;
            str += `(${$now.value}) -> `;
        }
        str = str.substring(0, str.length - 4);
        console.log(str);
    }
}