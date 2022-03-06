var num=prompt("Enter the number");
    num=parseInt(num);
    if(isNaN(num)) {
        alert("Enter the valid number");
    }
    for (var i=1;i<=num;i++) {
        if (i%3==0 && i%5==0) {
            document.write("FizzBuzz");
            document.write(" ");
        }
        else if(i%3 == 0) {
            document.write("Fizz");
            document.write(" ");
        }
        
        else if (i%5 == 0) {
            document.write("Buzz");
            document.write(" ");
        }
        
        else {

            document.write(i);
            document.write(" ");
        }
        
    }