//Take a character from the user and show whether it is a vowel or consonent.

var charr=prompt("Enter the character");

if(parseInt(charr)) {
    alert("please enter a valid character");
}
else if(charr=='a' || charr=='e' || charr=='i' || charr=='o' || charr=='u'||charr=='A' || charr=='E'|| charr=='I' ||charr=='O'||charr=='U')
{
    alert("character is vowel");
}
else {
    alert("character is consonent");
}