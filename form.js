// Switch form functions
let obj = new Date()
let date = obj.getDate() + "/" + (obj.getMonth() + 1) + "/" + obj.getFullYear()
let time = obj.toLocaleTimeString()
document.getElementById('Date').innerText = 'Date: ' + date
document.getElementById('Time').innerText = 'Time: ' + time

let issue = false
function switch1() {
    let content = '<form class="formStyling" id="myForm"> <div class="container"> <div class="row"> <div class="col-12 col-lg-3" style="margin-top: 3px;"> <label>Name: </label> </div> <div class="col-12 col-lg-9"> <input type="text" name="name" id="name"><span id="nameMsg" class="redText" ></span> </div> </div> <br> <div class="row"> <div class="col-12 col-lg-3"> <label>Email: </label> </div> <div class="col-12 col-lg-9"> <input type="email" name="email" id="email"> <span id="emailMsg" class="redText"></span> </div> </div> <br> <div class="row"> <div class="col-12 col-lg-3"> <label>Password: </label> </div> <div class="col-12 col-lg-9"> <input type="password" id="pas1"> <span id="pas1Msg" class="redText"></span> </div> </div> <br> <div class="row"> <div class="col-12 col-lg-3"> <label>Re-enter Password: </label> </div> <div class="col-12 col-lg-9"> <input type="password" id="pas2"> <span id="pas2Msg" class="redText"></span> </div> </div> <br> <div class="row"> <div class="col"> <label>Show Password: &nbsp;<input type="checkbox" onclick="togglePassword()"></label> </div> </div> </div> <br> <input type="button" class="btn btn-primary" value="Create Account" onclick="validateAccount()"> <span id="validationMsg"></span> <br> <br> <p id="self">By clicking on "Create Account", you agree to the <a href="#self">terms and conditions</a> of this website.</p>'
    document.getElementById('first').className = 'selected'
    document.getElementById('second').className = 'notSelected'
    document.getElementById('myForm').innerHTML = content
}

function switch2() {
    let content = '<div class="container"> <h5>Login details: </h5> <br> <div class="row"> <div class="col-12 col-lg-3"> <label>Email: </label> </div> <div class="col-12 col-lg-9"> <input type="email" name="email" id="email"> <span id="emailMsg" class="redText"></span> </div> </div> <br> <div class="row"> <div class="col-12 col-lg-3"> <label>Password: </label> </div> <div class="col-12 col-lg-9"> <input type="password" id="pas1"> <span id="pas1Msg" class="redText"></span> </div> </div> <br> <div class="row"> <div class="col"> <label>Show Password: &nbsp;<input type="checkbox" onclick="togglePassword2()"></label> </div> </div> <br> <h5>Select items: <span class="redText" style="font-weight: 100;"> Purchase $20.00 worth of items for a %5 discount!</span> </h5><br> <label><input type="checkbox" name="items" value="Squirrel Finger Puppet Set" onclick="toggleQuantity(1)"> Squirrel Finger Puppet Set ~ Price: $4.99 </label> <span id="s1" class="redText"></span> <div id="d1"> </div> <label><input type="checkbox" name="items" value="SquidWard Window Poster" onclick="toggleQuantity(2)"> SquidWard Window Poster ~ Price: $12.00 </label> <span id="s2"></span> <div id="d2"> </div> <label><input type="checkbox" name="items" value="Lobster Slippers" onclick="toggleQuantity(3)"> Lobster Slippers ~ Price: $15.49</label> <span id="s3"></span> <div id="d3"> </div>'
    content += ' <label><input type="checkbox" name="items" value="Rockman Fidget Toy" onclick="toggleQuantity(4)"> Rockman Fidget Toy Price ~ Price: $5.50 </label> <span id="s4"></span> <div id="d4"> </div> <label><input type="checkbox" name="items" value="Snail Soap Dispenser" onclick="toggleQuantity(5)"> Snail Soap Dispenser ~ Price: $7.99 </label> <span id="s5"></span> <div id="d5"> </div> <label><input type="checkbox" name="items" value="Brave Cat Curtain" onclick="toggleQuantity(6)"> Brave Cat Curtain ~ Price: $30.00</label> <span id="s6"></span> <div id="d6"> </div> <br> <h5>Select Shipping Country & Shipping Option: </h5><br> <div class="container"> <div class="row"> <div class="col-12 col-lg-2"> <p>Country: &nbsp;</p> <select id="selectBox"> <option value="Jordan">Jordan</option> <option value="Syria">Syria</option> <option value="Palestine">Palestine</option> <option value="Lebanon">Lebanon</option> <option value="Iraq">Iraq</option> <option value="Egypt">Egypt</option> <option value="Kingdom of Saudi Arabia">KSA</option> </select> </div> <div class="col-12 col-lg-10"> <p>Option: </p> <label><input type="radio" name="shipping" value="Normal Shipping"> Normal Shipping ~ $10.00 &nbsp;</label> <label><input type="radio" name="shipping" value="Fast Shipping"> Fast Shipping ~ $15.99 &nbsp;</label> <span id="shipMsg" class="redText"></span> </div> </div> </div> <br><br><input type="button" class="btn btn-primary" value="Create Order" onclick="validatePurchase()"> <span id="validationMsg"></span> <br> <br> <h4 id="discount"></h4> <textarea rows="18" style="resize: none; width: 100%;" readonly id="output"></textarea> </div>'
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
    valid = !issue && valid
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
        document.getElementById('nameMsg').innerHTML = '&nbsp;&nbsp;You didn\'t enter a name!'
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
        document.getElementById('pas1Msg').innerHTML = '&nbsp; Password must have atleast 1 number!'
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
let output = "", sum = 0, shippingOption = 0
let prices = [4.99, 12.00, 15.49, 5.50, 7.99, 30.00]
let bought = []
let boughtQ = []

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

function validateItems() {
    valid = true, allFalse = true
    const items = document.getElementsByName('items')
    for (let i = 0; i < items.length; i++)
    {
        if (items[i].checked)
        {
            allFalse = false
            let q = Number(document.getElementById("q" + (i + 1)).value)
            if (q <= 0)
            {
                document.getElementById("sq" + (i + 1)).innerHTML = "Please enter a valid quantity!"
                valid = false
            }
            else
            {
                bought.push(items[i].value)
                boughtQ.push(q)
                sum += q * prices[i]
                document.getElementById("sq" + (i + 1)).innerHTML = ""
            }
        }
    }

    if (allFalse)
    {
        valid = false
        document.getElementById('s1').innerHTML = " Please Select Atleast One Item"
    }
    else
    {
        document.getElementById('s1').innerHTML = ""
    }

    return valid
}
function validateShipping() {
    const ar = document.getElementsByName('shipping')
    valid = false
    for (let i = 0; i < ar.length; i++)
    {
        if (ar[i].checked)
        {
            valid = true
            shippingOption = i
            break;
        }
    }

    if (valid)
    {
        document.getElementById('shipMsg').innerHTML = ""
    }
    else
    {
        document.getElementById('shipMsg').innerHTML = "Select a shipping option!"
    }

    return valid
}

function validatePurchase() {
    output = "", sum = 0, shippingOption = 0, 
    bought = []
    boughtQ = []
    valid = true
    let vbl = valid
    valid = validateEmail()
    if (valid)
        valid = vbl
    vbl = valid
    valid = validatePassword()
    if (valid)
        valid = vbl
    vbl = valid
    valid = validateItems()
    if (valid)
        valid = vbl
    vbl = valid
    valid = validateShipping()
    if (valid)
        valid = vbl
    


    if (valid)
    {
        if (sum >= 20)
        {
            document.getElementById('discount').innerText = 'Your order qualifies for a discount. (Not including Shipping)'
            sum *= .95
        }
        else
        {
            document.getElementById('discount').innerText = 'Your order doesn\'t qualify for a discount.'   
        }

        output += " Email: " +  document.getElementById('email').value + '\n'
        output += " Items Purchased: \n"
        for (let i = 0; i < bought.length; i++)
            output +=  ` ${i + 1}. ` + bought[i] + " x" + boughtQ[i] + '\n'
        
        output += " Shipping Country: " + document.getElementById('selectBox').value + '\n'
        output += " Shippping Option: " + (shippingOption == 0 ? "Normal Shipping\n" : "Fast Shipping\n")
        if (shippingOption == 0)
            sum += 10
        else
            sum += 15.99
        output += " Date Of Purchase: " + date + "\n"
        output += " Total Price: $" + sum.toFixed(2) + "\n"
    }
    else
    {
        document.getElementById('discount').innerText = ''
    }

    document.getElementById('output').innerHTML = output
}