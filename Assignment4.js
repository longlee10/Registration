var age = document.getElementById('age');
var province = document.getElementById('province');
var confirmPW = document.getElementById('cf');
var password = document.getElementById('password');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var address = document.getElementById('address');
var city = document.getElementById('city');
var postalCode = document.getElementById('postal');
var email = document.getElementById('email');

// Display confirmation message
document.getElementById('register').addEventListener('click', confirmMessage);

function confirmMessage(e){
    if(province.selectedIndex != -1 && age.value != "" && confirmPW.value != "" 
    && password.value != "" && fname.value != "" && lname.value !=""
    && address.value != "" && city.value != "" && postalCode.value != "" && email.value != "" )
    {
        e.preventDefault();
        window.location = "Success.html";
        clearForm(e);
    }
    else{
        e.preventDefault();
        var inputs = document.querySelectorAll('.form');
        for(var i = 0; i< inputs.length; i++){
            if(inputs[i].value===""){
                inputs[i].style.background  ="rgb(255,233,233)";  
                document.getElementById('warning').style.color = 'red';
            }
            else{
                inputs[i].style.background = 'white';
            }
        }
        if(province.selectedIndex != -1){
            province.style.background = "white";
        }
    }
}

// Make sure age is over 18
age.addEventListener('keyup', validateAge);

function validateAge(){
    var ageWarning = document.getElementById('ageWarning');

    if(age.value < 18){
        age.style.background = "rgb(255,233,233)";
        ageWarning.innerHTML = "Age must be 18 or higher!";
        ageWarning.style.display = 'block';
    }
    else if(isNaN(age.value)===true){
        age.style.background = "rgb(255,233,233)";
        ageWarning.innerHTML = "Age must be a number!";
        ageWarning.style.display = 'block';
    }
    else{
        age.style.background = 'white';
        ageWarning.style.display = 'none';
    }
}

// Check province
var province = document.getElementById('province');
province.addEventListener('click', checkProvince);
document.getElementById("province").selectedIndex = -1;
function checkProvince(){
    if(province.selectedIndex != -1)
    {
        province.style.background = "white";
    }
    if(province.selectedIndex != -1 && age.value != "" && confirmPW.value != "" 
    && password.value != "" && fname.value != "" && lname.value !=""
    && address.value != "" && city.value != "" && postalCode.value != "" && email.value != ""){
        document.getElementById('warning').style.color = 'black';
    }
}

// Check password confirm

confirmPW.addEventListener('keyup', checkConfirmPW);

function checkConfirmPW(){
    var cfpwWarning = document.getElementById('cfpwWarning');

    if(confirmPW.value != password.value){
        confirmPW.style.background = password.style.background = "rgb(255,233,233)";
        cfpwWarning.style.display = 'block';
        cfpwWarning.innerHTML = "Password must match!";
    }
    else{
        confirmPW.style.background = password.style.background = "white";
        cfpwWarning.style.display = 'none';
    }
}

// Email must contains @ and . characters

email.addEventListener('keyup', checkEmail);

function checkEmail(){
    var emailWarning = document.getElementById('emailWarning');

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) ===false)
    {
        email.style.background = "rgb(255,233,233)";
        emailWarning.style.display = 'block';
        emailWarning.innerHTML = "Valid email address must be in the format 'abc@gmail.com'";
    }
    else{
        email.style.background = "white";
        emailWarning.style.display = 'none';
    }
}

//  Passwords must have at least 6 characters and must contain at least one digit and one upper-case character
password.addEventListener('keyup', checkPW);

function checkPW(){
    var pwWarning = document.getElementById('pwWarning');

    if(/.{6,}/.test(password.value) === false || /\d/.test(password.value) ===false || 
    /[A-Z]/.test(password.value)===false){
        password.style.background = "rgb(255,233,233)";
        pwWarning.innerHTML = "Password must be at least 6-character long, including one digit and one uppercase character!";
        pwWarning.style.display = 'block';
    }
    else{
        pwWarning.style.display = 'none';
        password.style.background = "white";
    }
}


// Clear form
var clear = document.getElementById('clear');
clear.addEventListener('click', clearForm);

function clearForm(e){
    e.preventDefault();
    var inputs = document.querySelectorAll('.form');
    var errorMessage = document.querySelectorAll('.message');
    for(var i = 0; i< inputs.length; i++){
        inputs[i].value = "";
        inputs[i].selectedIndex=-1;
        inputs[i].style.background = "white";
    }
    for(var i = 0; i< errorMessage.length; i++){
        errorMessage[i].innerHTML = "";
        errorMessage[i].style.display = "none";
    }
    document.getElementById('warning').style.color = 'black'; 
}

// Postal code has to be in the a0a0a0 format

postalCode.addEventListener('keyup', checkPostalCode);

function checkPostalCode(){
    var pcWarning = document.getElementById('pcWarning');
    if(/[A-Z]\d[A-Z]\d[A-Z]\d/.test(postalCode.value)===false){
        postalCode.style.background = "rgb(255,233,233)";
        pcWarning.style.display = 'block';
        pcWarning.innerHTML = "Postal code must be in A0A0A0 form"; 
    }
    else{
        postalCode.style.background="white";
        pcWarning.style.display = 'none';
    }
}

// Return field backgrounds to normal if they are filled
fname.addEventListener('keyup', function checkFname(){
    check(fname);
});
lname.addEventListener('keyup', function checkLname(){
    check(lname);
});
address.addEventListener('keyup', function checkAddress(){
    check(address);
});
city.addEventListener('keyup', function checkCity(){
    check(city);
});

function check(item){
    if(item.value ===""){
        item.style.background = "rgb(255,233,233)";
    }
    else{
        item.style.background = "white";
    }
}

// Return color of warning line to normal when all fields are completed

var inputArray = [];
var allInputs = document.querySelectorAll('.form');

for(var i = 0; i<allInputs.length; i++){
    inputArray.push(allInputs[i]);
}

inputArray.forEach(element =>{
        element.addEventListener('keyup', function(){
            if(province.selectedIndex != -1 && age.value != "" && confirmPW.value != "" 
            && password.value != "" && fname.value != "" && lname.value !=""
            && address.value != "" && city.value != "" && postalCode.value != "" && email.value != ""){
                document.getElementById('warning').style.color = 'black';
            }
            else{
                document.getElementById('warning').style.color ='red';
            }
        })
})


