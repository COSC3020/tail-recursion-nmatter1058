const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n, fib_old, fib) {
    if(n == 0) return fib;
    var fib_new = fib + fib_old;
    fib_old = fib;
    fib = fib_new;
    --n;
    return fibTest(n, fib_old, fib_new)
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib_tr(n,1,0,n)) ==
            JSON.stringify(fibTest(n,1,0,n));
    });
jsc.assert(test);
