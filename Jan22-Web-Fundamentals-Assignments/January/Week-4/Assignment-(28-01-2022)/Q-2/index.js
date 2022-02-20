//Print the first n numbers of a Fibonacci series.

var n=prompt("Enter the size of Fibonacci series");
n=parseInt(n);

var a1=0;
var a2=1;
console.log(a1);
console.log(a2);

for(var i=2;i<n;i++) {
    var a3=a1+a2;
    a1=a2;
    a2=a3;
    console.log(a3);
}