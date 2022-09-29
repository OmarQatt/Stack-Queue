class Queue {
    constructor(){
        this.array = [];
        this.count = 0
    }

    enqueue(item){
        this.array.push(item)
        console.log(`${item} added to ${this.count}`)
        this.count += 1
       
    }

    dequeue() {
       let deq=this.array.shift();
       console.log(`${deq} removed`)
       this.count -=1
       return deq
    }

    peek() {
        if(this.count == 0){
            return 'empty queue'
        }else {
            console.log(`Top element is ${this.array[this.count -1]}`)
            return this.array[0];
        }
    }

    isEmpty() {
        console.log(this.count == 0 ? 'queue is empty' : 'queue is not empty')
        return this.count == 0
    }

    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.array[i] + ' '
        }
        return str
    }
}
" write in the terminal node Queue.js  to test the result"
let queue = new Queue();
queue.enqueue(5)
queue.enqueue(15)
queue.enqueue(50)
console.log(queue.print())
queue.dequeue()
queue.dequeue()
console.log(queue.print())
queue.peek()
console.log(queue.print())
queue.dequeue()
queue.peek()
console.log(queue.print())
module.exports = Queue;