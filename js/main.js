
const inputs = document.querySelectorAll('input');

//regex patterns
const patterns = { 
    fName: /^[a-z\d\s]{5,12}$/i,
    lName: /^[a-z\d\s]{5,12}$/i,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[0-9a-zA-Z!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_-]{8,20}$/,
    eMail: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
}

//validation function
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid form-control'
    }else{
        field.className = 'invalid form-control'
    }
}

// attach keypu events to inputs
inputs.forEach(input =>{
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})


