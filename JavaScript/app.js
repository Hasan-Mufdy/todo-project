let name = prompt("Enter your name...");

if(name == ""){
    alert("please enter a valid name");
    name = prompt("Enter your name...");
}

let gender = prompt("Enter your gender(male/female)...");
let age = prompt("Enter your age...");

if(age <= 0){
    alert("please enter a valid age");
    age = prompt("Enter your age...");
}

let title = "";
if(gender === "male"){
    title = "Mr";
}
else if(gender === "female"){
    title = "Ms";
}


let confirmation = confirm("Do you want to skip the welcoming message?");

if(confirmation == false){
    alert("Hello " + title + " " + name);
}


