// Switch form functions
let issue = false
function switch1() {
    let content = '<label>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" id="name"> <span id="nameMsg" class="redText"></span> <br> <br> <label>E-mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" id="email"> <span id="emailMsg" class="redText"></span> <br> <br> <label>Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="password" id="pas1"> <span id="pas1Msg" class="redText"></span> <br> <br> <label>Re-enter Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="password" id="pas2"> <span id="pas2Msg" class="redText"></span> <br> <br> <label>Show Password: &nbsp;</label> <input type="checkbox" onclick="togglePassword()"> <br> <br> <input type="button" class="btn btn-primary" value="Create Account" onclick="validateAccount()"> <span id="validationMsg"></span> <br> <br> <p id="self">By clicking on "Create Account", you agree to the <a href="#self">terms and conditions</a> of this website.</p>'
    document.getElementById('first').className = 'selected'
    document.getElementById('second').className = 'notSelected'
    document.getElementById('myForm').innerHTML = content
}

function switch2() {
    let content = ''
    document.getElementById('first').className = 'notSelected'
    document.getElementById('second').className = 'selected'
    document.getElementById('myForm').innerHTML = content
}

// Toggle password visability in the Create form
function togglePassword()
{
    if (document.getElementById('pas1').type == 'password')
    {
        document.getElementById('pas1').type = 'text'
        document.getElementById('pas2').type = 'text'
    }
    else
    {
        document.getElementById('pas1').type = 'password'
        document.getElementById('pas2').type = 'password'
    }
}

function togglePassword2()
{
    if (document.getElementById('pas1').type == 'password')
    {
        document.getElementById('pas1').type = 'text'
    }
    else
    {
        document.getElementById('pas1').type = 'password'
    }
}


function validateAccount() {
    let valid = true
    valid = validateName() && valid
    valid = validateEmail() && valid
    issue = !validatePassword() 
    vaild = !issue && valid
    valid = validatePas2() && valid

    if (valid)
    {
        alert('Succussfly created a new account, switching to create order screen.')
        switch2()
    }
}

function validateName() {
    let name = document.getElementById('name').value
    if (name == "")
    {
        document.getElementById('nameMsg').innerHTML = '&nbsp;You didn\'t enter a name!'
    }
    else
    {
        document.getElementById('nameMsg').innerHTML = ''
    }


    return name != ""
}

function validateEmail() {
    let email = document.getElementById('email').value
    let valid = true

    if (email == "")
    {
        document.getElementById('emailMsg').innerHTML = '&nbsp; You didn\'t enter an email!'
        return !valid
    }

    if (email.indexOf('@') == -1 || email.lastIndexOf('.') == -1 || email.lastIndexOf('.') < email.indexOf('@') || email.lastIndexOf('.') == email.length - 1)
    {
        document.getElementById('emailMsg').innerHTML = '&nbsp; Please enter a valid email!'
        return !valid  
    }

    document.getElementById('emailMsg').innerHTML = ''

    return valid
}

function containsNumber(str) {
    return /\d/.test(str);
}  


function validatePassword() {
    let password = document.getElementById('pas1').value
    
    if (password == "")
    {
        document.getElementById('pas1Msg').innerHTML = '&nbsp; You didn\'t enter a password!'
        return false
    }

    if (password.length < 8)
    {
        document.getElementById('pas1Msg').innerHTML = '&nbsp; Password must have atleast 8 charaters!'
        return false
    }

    if (password.toUpperCase() == password)
    {
        document.getElementById('pas1Msg').innerHTML = '&nbsp; Password must have atleast 1 lowercase letter!'
        return false
    }

    if (password.toLowerCase() == password)
    {
        document.getElementById('pas1Msg').innerHTML = '&nbsp; Password must have atleast 1 uppercase letter!'
        return false
    }

    if (!containsNumber(password))
    {
        document.getElementById('pas1Msg').innerHTML = '&nbsp; Password must have atleast 1 number letter!'
        return false
    }

    document.getElementById('pas1Msg').innerHTML = ''
    return true
}

function validatePas2() {
    if (issue)
    {
        document.getElementById('pas2Msg').innerHTML = '&nbsp; There\'s an issue with your password!'
        return false
    }
    else if (document.getElementById('pas1').value != document.getElementById('pas2').value)
    {
        document.getElementById('pas2Msg').innerHTML = '&nbsp; Passwords do not match!'  
        return false
    }

    document.getElementById('pas2Msg').innerHTML = '&nbsp;'  
    return true
}

// Second form code

function toggleQuantity(no) {
    const opts = document.getElementsByName('items')
    if (opts[no - 1].checked)
    {
        document.getElementById("d" + no).innerHTML = `<label>Select Quantity: </label> <input type="number" id="q${no}"> <span class="redText" id="sq${no}"></span> <br><br>`
    }
    else
    {
        document.getElementById("d" + no).innerHTML = ""
    }
}