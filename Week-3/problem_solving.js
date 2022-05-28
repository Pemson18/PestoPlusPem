function createIncrement() {
  let count=0;
  function increment() {
      count++;
  }
  let message=`Count is${count}`;
  function log() {
      console.log(message);
  }
  return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?
//Output -> Count is 0;
//Count is zero because increment function is only changing the count but not message
//if we need to change the message too then we have to put that message inside the increment function
