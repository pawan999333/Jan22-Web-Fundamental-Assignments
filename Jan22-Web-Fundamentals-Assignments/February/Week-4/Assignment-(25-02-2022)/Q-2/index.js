var string1=prompt("Enter first string");
var string2=prompt("Enter second string");

function Anagram (string1, string2) {
   var a=string1.toLowerCase();
   var b=string2.toLowerCase();

   if (a.length != b.length) {
    return false;
  }

   string1=string1.split("").sort().join("");
   string2=string2.split("").sort().join("");
   if (string1==string2) {
       return true;
    }
    else {
        return false;
    }
}
var value=Anagram(string1,string2);
document.write(value);