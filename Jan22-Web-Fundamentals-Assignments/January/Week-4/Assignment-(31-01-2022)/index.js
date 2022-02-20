var num=prompt("Enter the passing marks");
num=parseInt(num);


var obj = {
         "first_name":"Aayush sir",
         "second_name":"Geekster",

    "students" : [
        {
            "name":"deepak",
            "marks":15
        },
        {
            
            "name":"vishal",
            "marks":30
        },
        {
            
            "name":"pankaj",
            "marks":60
        },
        {
            
            "name":"manish",
            "marks":45
        },
        {
             
            "name":"Amit",
            "marks":90
        },
        {
             
            "name":"Raj",
            "marks":70
        },
        ],

};
    //console.log(obj);

var keys = obj.students;
for(var i=0;i<keys.length;i++)
{
    if(keys[i].marks>=num)
    {
        console.log(keys[i].name);
    }
}

