// function validate() {
//     const usernameValidationPattern = /^[a-zA-Z0-9]{3,20}$/;
//     const passwordValidationPattern = /^[\w]{5,15}$/;
//     // const emailValidationPatten = /(^[a-z]+@[a-z]+[\.[a-z]+$)/;
//     const emailValidationPatten = /^[^@.]+@[^@]*\.[^@]*$/

//     const usernameInput = document.querySelector('#username');
//     const emailInput = document.querySelector('#email');
//     const passwordInput = document.querySelector('#password');
//     const confirmPasswordInput = document.querySelector('#confirm-password');
//     const companyNUmberInput = document.querySelector('#companyNumber');
//     const companyInfo = document.querySelector('#companyInfo');
//     const validationField = document.querySelector('#valid')

//     const checkBox = document.querySelector('#company')
//     checkBox.addEventListener('change', showHiddenField)

//     const submitButton  = document.querySelector('#submit');
//     submitButton.addEventListener('click', inputValidator);


//     function inputValidator(event){
//         event.preventDefault()
//         let isAllFieldsValid = true;
//         if (usernameInput.value == '' || !usernameValidationPattern.test(usernameInput.value)){
//             usernameInput.style.borderColor = 'red';
//             isAllFieldsValid = false
//         }else{
//             usernameInput.style.border = '';
//         }
//         if (passwordInput.value == '' || !passwordValidationPattern.test(passwordInput.value) || passwordInput.value != confirmPasswordInput.value){
//             passwordInput.style.borderColor = 'red';
//             confirmPasswordInput.style.borderColor = 'red'
//             isAllFieldsValid = false
//         }else{
//             passwordInput.style.border = '';
//             confirmPasswordInput.style.border = '';
//         }
//         if (emailInput.value == '' || !emailValidationPatten.test(emailInput.value)){
//             emailInput.style.borderColor = 'red';
//             isAllFieldsValid = false
//         }else {
//             emailInput.style.border= ''
//         }
//         if (checkBox.checked){
//             if (companyNUmberInput.value < 1000 || companyNUmberInput.value > 9999){
//                 companyNUmberInput.style.borderColor = 'red';
//                 isAllFieldsValid = false
//             }else{
//                 companyNUmberInput.style.border = '';
//             }
//         }
//         if (isAllFieldsValid){
//             validationField.style.display = 'block'
//         }else{
//             validationField.style.display = 'none'
//         }
//     }
//     function showHiddenField(event){
//         if (event.target.checked){
//             companyInfo.style.display = 'block'

//         }else {
//             companyInfo.style.display = 'none'
//         }
       
//     }
// }




function validate() {
    const userNameValid = /(^[A-Za-z0-9]{3,20}$)/;
    const passwordValid = /(^[\w]{5,15}$)/;
    const emailValid = /^.*@.*\..*$/;
   
    let isValidInput = true;
    let isChecked = false;
   
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
   
      const userNameInput = document.getElementById("username");
   
      if (!userNameValid.test(userNameInput.value)) {
        isValidInput = false;
        userNameInput.style.borderColor = "red";
      } else {
        userNameInput.style.borderColor = "none";
      }
   
      const emailInput = document.getElementById("email");
      if (!emailValid.test(emailInput.value)) {
        isValidInput = false;
        emailInput.style.borderColor = "red";
      } else {
        emailInput.style.borderColor = "none";
      }
   
      const passwordInput = document.getElementById("password");
      const confPasswordInput = document.getElementById("confirm-password");
   
      if (!passwordValid.test(passwordInput.value)) {
        isValidInput = false;
        passwordInput.style.borderColor = "red";
      } else {
        passwordInput.style.borderColor = "none";
      }
      if (
        !passwordValid.test(confPasswordInput.value) ||
        passwordInput.value != confPasswordInput.value
      ) {
        isValidInput = false;
        confPasswordInput.style.borderColor = "red";
      } else {
        confPasswordInput.style.borderColor = "none";
      }
      if (isChecked) {
        const companyNumber = document.getElementById("companyNumber");
        if (
          Number(companyNumber.value) < 1000 ||
          Number(companyNumber.value) > 9999
        ) {
          companyNumber.style.borderColor = "red";
          isValidInput = false;
        } else {
          companyNumber.style.borderColor = "none";
        }
      }
   
      const validDiv = document.getElementById("valid");
      if (isValidInput) {
        validDiv.style.display = "block";
      } else {
        validDiv.style.display = "none";
      }
    });
    document.getElementById("company").addEventListener("change", (e) => {
      const companyInput = document.getElementById("companyInfo");
      if (e.target.checked == true) {
        isChecked = true;
        companyInput.style.display = "block";
      } else {
        isChecked = false;
        companyInput.style.display = "none";
      }
    });
  }