// the output for the following code is 
/* 
 count is 0
*/
// Because of the clouser concept 
// Message got its value when the increment funct
function CreateIncrement(){
    let c=0;
    function inc(){
        c++;
        console.log(c);
    }
    let message =`count is ${c}`;
  
    function log(){
        console.log(message);
    }
    return[inc,log];
}
// const c=5;
const [inc,logmsg] = CreateIncrement();
inc();
inc();
inc();
logmsg();