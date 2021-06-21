
const inputs = document.querySelectorAll('input');

const patterns = { 
    fName: /^[a-z.-\s]{3,30}$/i,
    lName: /^[a-z\d\s]{3,20}$/i,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[0-9a-zA-Z!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_-]{8,20}$/,
    eMail: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
}
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid form-control'
    }else{
        field.className = 'invalid form-control'
    }
}
inputs.forEach(input =>{
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})


