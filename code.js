function fib_tr(n, fib_old, fib,initialN){ 
    if(n==initialN) printIndex(n);
    if (n == 0){
        printFib(fib);
        return fib;
    }
    var fib_new = fib + fib_old;
    fib_old = fib;
    fib = fib_new;
    --n;
    return fib_tr(n, fib_old, fib_new);
}

function printFib(fib){
    console.log('fib: ', fib);
}

function printIndex(n){
    console.log('index: ', n);
}