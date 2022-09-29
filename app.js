const Stack = require('./Stack')
const Queue = require('./Queue')

const stack = new Stack()
const queue = new Queue()
" write in the terminal node app.js  to test the result"

stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()
console.log(stack.print())
stack.isEmpty()

queue.enqueue(5)
queue.enqueue(15)
queue.enqueue(50)
console.log(queue.print())
queue.dequeue()
queue.dequeue()
console.log(queue.print())
queue.peek()
console.log(queue.print())
