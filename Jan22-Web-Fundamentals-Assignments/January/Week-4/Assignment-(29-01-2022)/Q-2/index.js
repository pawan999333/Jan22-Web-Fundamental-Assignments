//User enters a number,check and tell whether that number is a prime number or not.

var num=prompt("Enter the number");
num=parseInt(num);
var count=0;
if(isNaN(num)) {
    alert("please enter valid number");
}

if(num<=0) {
    alert("please enter valid number");
}


for(var i=2;i<num;i++) {
    if(num%i==0) {
        count++;
    }
}

if(count==0) {
    alert("The number is a prime number");
}

else {
    alert("The number is not a prime number");
}




 