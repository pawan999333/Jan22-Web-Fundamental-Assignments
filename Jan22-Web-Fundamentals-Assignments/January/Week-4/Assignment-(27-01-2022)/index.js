// Take the  input from the user. It has to be dynamic. I can enter 3 numbers as well as 30 numbers. It should give me the maximum of all of them. We will be using Array as the underlying data structure.

var arr=[];
var n=prompt("Enter the size of array");
n=parseInt(n);

for(var i=0;i<n;i++) {
    arr[i]=prompt("Enter the element of array");
    arr[i]=parseInt(arr[i]);
}

var max=arr[0];

for(var j=1;j<n;j++) {				
    if(arr[j]>max) {
        max=arr[j];
    }
        
}
alert(max);