// reducer function 
// n is the number for which we want to find the factorial
function factorial(n){
    if(n==0){
        return 1;
    }
    return n *factorial(n-1);
}

// memomize function 
function memomize(functionToBeMemomized){
    const cache = new Map();
    return function(...args){

        key =args.toString();
        if(cache.has(key)){
            console.log(` we have memomized the ans for the value : ${key} so we are fetching from cache`);
            return cache.get(key);
        }
        console.log(` we dont have the  ans for the value : ${key} so we have to calculate . It might take some time`);
        cache.set(key,functionToBeMemomized(...args));
        return cache.get(key);
    }

    
}
const factorialMemo = memomize(factorial);


console.log(factorialMemo(10));
console.log(factorialMemo(10));
console.log(factorialMemo(10));
console.log(factorialMemo(10));