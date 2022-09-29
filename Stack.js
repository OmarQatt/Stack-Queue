class Stacks {
    constructor() {
        this.array = [];
        this.count = 0
    }

    push(item) {
        this.array[this.count] = item;
        console.log(`${item} added to ${this.count}`)
        this.count += 1
        
        return this.count - 1
    }

    pop() {
       let deletedItem = this.array[this.count - 1];
        this.count -=1
        console.log(`${deletedItem} removed`)
        return deletedItem
    }

    peek() {
      
        console.log(`Top element is ${this.array[this.count -1]}`)
        return this.array[this.count-1]
    }

    isEmpty() {
        console.log(this.count == 0 ? 'stack is empty' : 'stack is not empty')
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

" write in the terminal node Stack.js  to test the result"
let stack = new Stacks();
stack.push(5)
stack.push(15)
stack.peek()
stack.push(50)
console.log(stack.print())
stack.pop()
console.log(stack.print())
stack.isEmpty()
module.exports = Stacks