console.log("Hello World");

console.log(9 + 5);

function greet ( name) {
   console.log("Hello" , name);
   
}
greet ("Adnan")
greet ("Arshad")
greet ("Ajmal")


function square ( num) {
   return num * num;

}
console.log(square (20));

function sayHello(){
   return "Hello World"
}

let greeting = sayHello();
console.log(greeting);



function checkAge (age) {
   if ( age >= 18){
      console.log("You can voting it");
      
   }
    else {
      console.log("Under age 10");
      
    }
}

checkAge (15)



function login (email , password) {
   if ( email === "adnan2292707@gmail.com" && password === "1234") {
      console.log("Login Successfull");
      
   }
   else {
      console.log("Invalid Email and password");
      
   }
}


login ("adnan2292707@gmail.com" , "1234")
login ("test2292707@gmail.com" , "1122")