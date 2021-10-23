window.addEventListener('load', solution);

function solution() {
  const fullNameInputField = document.querySelector('#fname');
  const emailInputField = document.querySelector('#email');
  const phoneNumberInputField = document.querySelector('#phone');
  const addressInputField = document.querySelector('#address');
  const postalCodeInputField = document.querySelector('#code');
  const submitButton = document.querySelector('#submitBTN');
  submitButton.addEventListener('click', submitForm);

  const editButton = document.querySelector('#editBTN');
  const continueButton = document.querySelector('#continueBTN');
  const previewSection = document.querySelector('#infoPreview');
  const blockSection = document.querySelector('#block')

  let fullNameLiElement = document.createElement('li');
  let emailLiElement = document.createElement('li');
  let phoneNumberLiElement = document.createElement('li');
  let addressLiElement = document.createElement('li');
  let postalCodeLiElement = document.createElement('li');
  const h3ElementMessage = document.createElement('h3');

  function submitForm(event) {
    if (isFullNameAndEmailInputFields()) {
      fullNameLiElement.textContent = `Full Name: ${fullNameInputField.value}`;
      emailLiElement.textContent = `Email: ${emailInputField.value}`;
      phoneNumberLiElement.textContent = `Phone Number: ${phoneNumberInputField.value}`;
      addressLiElement.textContent = `Address: ${addressInputField.value}`;
      postalCodeLiElement.textContent = `Postal Code: ${postalCodeInputField.value}`;

      previewSection.appendChild(fullNameLiElement);
      previewSection.appendChild(emailLiElement);
      previewSection.appendChild(phoneNumberLiElement);
      previewSection.appendChild(addressLiElement);
      previewSection.appendChild(postalCodeLiElement);

      editButton.addEventListener('click', editForm)

      continueButton.addEventListener('click', makeReservation)

      submitButton.disabled = true
      continueButton.disabled = false
      editButton.disabled = false
      clearAllFields()
    }
    

  };
  function editForm(event) {

    continueButton.disabled = true
    editButton.disabled = true
    submitButton.disabled = false

    let userInfo = Array.from(previewSection.querySelectorAll('#infoPreview li'));
    fullNameInputField.value = userInfo[0].textContent.split(': ')[1]

    emailInputField.value = userInfo[1].textContent.split(': ')[1]

    phoneNumberInputField.value = userInfo[2].textContent.split(': ')[1]

    addressInputField.value = userInfo[3].textContent.split(': ')[1]

    postalCodeInputField.value = userInfo[4].textContent.split(': ')[1]

    
    userInfo.forEach(liElement => liElement.remove())
  };
  function makeReservation() {
    h3ElementMessage.textContent = 'Thank you for your reservation!'
    blockSection.innerHTML = ''
    // Why doesn't this method work ???
    // let innerElements = Array.from(blockSection.children)
    // innerElements.forEach(element => element.remove())
    // blockSection.appendChild(h3ElementMessage)
  }
  function isFullNameAndEmailInputFields() {
    return fullNameInputField.value.trim() != '' && emailInputField.value.trim() != ''
  };
  function clearAllFields() {
    fullNameInputField.value = '';
    emailInputField.value = '';
    phoneNumberInputField.value = '';
    addressInputField.value = '';
    postalCodeInputField.value = '';
  };
}
