// const friends = [];
// friends.push(45)
// friends.push(85)
// friends.push(123)
// console.log(friends);
// const getOne = friends.pop()
// console.log(getOne);
// console.log(friends);

class Stack {
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guests = new Stack;

guests.add('Rahman')
guests.add('Zaman')
guests.add('Kaman')
guests.add('Kamran')

console.log(guests.stack);

const speaker = guests.remove();
console.log(speaker);
console.log(guests.stack);