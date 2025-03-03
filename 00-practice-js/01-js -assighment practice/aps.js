 //  task -1
console.log("Average" , (30+60+80) / 3);

// function
function averageOfThreeNumbers(a , b ,c) {
    return(a+b+c) /3;
}
console.log(averageOfThreeNumbers(30 , 60 ,80))
 
// task-2
console.log("Speed data-1" , 150/2)
console.log("Speed data-2 " , 100/1.5)
// function
function speed(a , b) {
    return a/b;
}
console.log(speed(150 , 2))

function speed(a , b) {
   return a/b; 
}
console.log(speed(100 , 1.5))
// task-3
console.log(
    "Total price data-1" , 25+35+15
)
console.log("Total price data-2" , 50+20+30)

function price(a , b ,c){
    return a + b + c;
}
console.log(price(25 ,  35 ,15))

// task-4

console.log("Average height data-1" , 1.75+1.80 / 2)
console.log("Average height data-2" , 1.65+1.70 /2)

function height(a , b , c) {
    return a + b / 2;    
}
console.log(height(1.75 , 1.80 , 2))

// task-5
console.log("Time data-1" , 120/60)
console.log("Time data-2" , 160/80)

function time(a ,b) {
    return a/b;
}
console.log(time(120 ,60))
// task-6
// IF-ELSE-IF
const num = 5;
if(num>0){ console.log("positive")
}

const number = -3;
if(number>0)
    {console.log("positive")}
else{
    console.log("negative")
}

//  switch

const positive = "even";
switch (positive){
    case "even":
      console.log ("this is"   + positive) ; 
        break;
        default:
            console.log("another staement");
            break;     
}

function positiveOrNegativenum (num) {
    if (num>0) {
    return "this is positive"
    }
    else{
        return "this is negative"
    }   
}
console.log(positiveOrNegativenum(-12)) 


// task-7
 const even= 12;

    if(even%2==0){
        console.log("number is even")
    }
    const odd = 7;  
       
    if(odd%3==1){
        console.log("number is odd")
    }
    else{
        console.log("number is even")
    }
    const aven= 12;

    switch (aven) {
        case 18:
        console.log("this is  is  even")
            break;
        default:
        console.log("num is even")
            break;
    }
    
    const mass =  586558.55;
    
    if(mass>586558.55){
        console.log("person A is higher")
    }
    else{
        console.log("person A is lower")
    }
    const masses =45;
    
    if(masses>=45){
        console.log("person A is higher")
    }
    else{
        console.log("person B is higher")
    }

    function positiveOrNegativenum (num) {
        if (num%2==0) {
        return "this is even"
        }
        else{
            return "this is odd"
        }   
    }
    console.log(positiveOrNegativenum(7))
     
    function Bmi(mass) {
        if (mass>58.4567890) {

     return ("person A is higher"); 
        }
        else{
            return("person B is higher")
        }  
    }
    console.log(Bmi(58.3456789))

    // TASK-8
    const mark = 85;
    if(mark > 82 && mark < 89){
        console.log("grade-B")    
    }
    else{
        console.log("grade-A")   
    }

    const marks = 65;
    if(marks > 62 && marks < 70){
        console.log("grade-C")    
    }
    else{
        console.log("grade-A")
        
    }
    const mar= "grade-A";

    switch (mar) {
        case "grade-A":
        console.log("this is  is", mar)
            break;
        default:
        console.log("this is your mark")
            break;
    }

    function grade(marks){
    if (marks>=88) {
        return"your grade is A"
    }
    else{
        return "your grade is B "
    }   
    }
    console.log(grade(87))
    // TASK-9
    const age = 20;
    if(age>=19){
        console.log("Eligible to vote")    
    }
    const oge = 16;
    if(oge<19){
        console.log("not eligible to vote") 
        
        const ege = "not eligible to vote";
        switch (ege) {
            case "elegible to vote":
                console.log("you age is 20" + ege)
                break;
                case "not eligible to vote":
                    console.log("you age is 16" + ege)
                break;
            default:
                console.log("you are eligible to vote")
        }
    }

    function yourAge(age){
        if (age>=20) {
            return"your are elegible to vote"
        }
        else{
            return "your are not eligible to vote "
        }   
        }
        console.log(yourAge(16))
// TASK-10
    const tri = 80+80+80;
    if(tri>=180){
        console.log("Valid triangle")
    }
    const triangle = 90+90+90;
    if(triangle>180){
        console.log(" not Valid triangle")
    }
    function addition(angle1 , angle2 ,angle3) {
        if (triangle==80) 
            {
            return (angle1+angle2+angle3) ,"your triangle is valid"
        }
        else{
            return " your triangle is not valid"
        }
    }
    console.log(addition(80 , 80 ,80))       
