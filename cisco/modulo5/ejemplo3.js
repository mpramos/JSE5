// Sin recursividad usando un while
function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        // result = result * n;

        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720


//Recursividad

function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
//6
// 6 x (5!)
//5
// 5 x (4!)
//4
// 4 x (3!)
//3
// 3 x (2!)
//2
// 2 x (1!)

console.log(factorial(6)); // -> 720

// 6!=6 x 5 x 4 x 3 x 2 x 1 = 720
// 6!=6 x 5! = 720
// 5!= 5 x 4 x 3 x 2 x 1 = 
// 4!= 4 x 3 x 2 x 1 = 
// 3!=  3 x 2 x 1 = 
// 2!=  2 x 1 = 
// 1!=   1 = 


