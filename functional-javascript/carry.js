// function curryN(fn, n) {
//     n = n || fn.length; // Use provided n or fn's arity as default

//     function curried(...args) {
//         if (args.length >= n) {
//             return fn(...args);
//         } else {
//             return function (...newArgs) {
//                 return curried(...args, ...newArgs);
//             };
//         }
//     }

//     return curried;
// }

// module.exports = curryN;


function curryN(fn, n) {
    n = n || fn.length
    return function curriedN(arg) {
        if (n <= 1) return fn(arg)
        return curryN(fn.bind(this, arg), n - 1)
    }
}

module.exports = curryN