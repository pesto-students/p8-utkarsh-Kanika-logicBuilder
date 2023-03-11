const myfavouriteStockBroker={
    name:"Zerodha",
    appForMutualFund:"coin",
    appForStocks:"kite",
    appForAnalysis:"tickerTape",
    appForBasketOfStocks:"small case",
    appForKnowledge:"Varsity",
    founder:['Nitin Kamath',"Nikhil Kamath"]
}
function printAllArguments(pos1,pos2,pos3){
   console.log(this.a);
   console.log(this.b);
   console.log(this.c);
   console.log(pos1,pos2,pos3);
}
// we pass an object inside the bind function and it get binded to the function on which bind is called 
// object passed to the bind becomes the scope of it 
// Once we have created a binding function of the function we want to call . we cant change the value which has been attached to it 
const obj ={a:10,b:20,c:30}
const printAllArgumentsBind = printAllArguments.bind(obj);
printAllArgumentsBind(2,2,2);
// we invoke the 'call'  on the function which we need to excecuted
// 1 parameter in 'call' is the object which becomes the scope of the function( the function we want to execute)
// remaining parmaeter are the positional argument for the function ( the fucntion we want to execute)
const printAllArgumentsCall = printAllArguments.call(obj,2,3,4);
// we invoke the 'apply'  on the function which we need to excecuted
// 1 parameter in 'apply' is the object which becomes the scope of the function( the function we want to execute)
// The second paramter of the 'apply' is the array ->  act as postional arguments for the function ( the function we want to execute)
argumentArray=[100,200,300];
const printAllArgumentsApply = printAllArguments.apply(obj,argumentArray);

