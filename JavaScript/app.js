'use strict';

let name;
let age;
let gender;
let title = "";
let confirmation;

let studentConfirmation;
let addressConfirmation;
let licenseConfirmation;

askForName();
askForAge();
askForGender();
checkTitle();
yesOrNoQuestions();

confirmMsg();

fillArray();

function fillArray(){
    let arr = [];
    arr.push(name);
    arr.push(age);
    arr.push(gender);

    if(studentConfirmation){
        arr.push("Student");
    }
    
    if(addressConfirmation){
        arr.push("Jordan");
    }
    
    if(licenseConfirmation){
        arr.push("Have a license");
    }

    // console.log(arr);
    printArray(arr);


}

function printArray(finalArray){
    for(let i = 0; i < finalArray.length; i++){
        console.log(finalArray[i]);
    }
}



function askForName(){
    name = prompt("Enter your name...");
    if(name == ""){
        // alert("please enter a valid name");
        // askForName();
        name = "invalid";    
    }
}

function askForAge(){
    age = prompt("Enter your age...");
    if(age <= 0 || typeof(parseInt(age)) != "number"){
        // alert("please enter a valid age");
        // askForAge();
        age = "invalid";
    }
}

function askForGender(){
    gender = prompt("Enter your gender(male/female)...");
}


function checkTitle(){
    
    if(gender === "male"){
        title = "Mr";
    }
    else if(gender === "female"){
        title = "Ms";
    }
    //return title;
}

function yesOrNoQuestions(){
    studentConfirmation = confirm("Are you a student?");
    addressConfirmation = confirm("Do you live in jordan?");
    licenseConfirmation = confirm("Do you have a valid license?");
}

function confirmMsg(){
    confirmation = confirm("Do you want to skip the welcoming message?");

    if(confirmation == false){
        alertMsg();    
    }
}

function alertMsg(){
    alert("Hello " + title + " " + name);
}