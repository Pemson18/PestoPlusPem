function createStack() {
  let items = [];
  return {
      push(item){
          return items.push(item);
      },
      pop(){
          return items.pop();
      }
  }
}
const stack = createStack();
console.log(stack.push(20));
console.log(stack.push(50));
console.log(stack.pop());//50
console.log(stack.items); // undefined