//User will give a string.Return the count of vowels.

var str=prompt("Enter the string");
//console.log(typeof str);
//console.log(str[0]);
//console.log(str.length);
var count=0;
for(var i=0;i<str.length;i++) {
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U') {
        count++;
    }
}

alert(count);
console.log(count);