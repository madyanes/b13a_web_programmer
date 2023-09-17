const phoneNumberForm = document.querySelector('#phone-number-form');
const submitButton = document.querySelector('#phone-number-form button');
const phoneNumber = document.querySelector('[name=phone-number]');
const warningMessage = document.querySelector('#warning-message');

phoneNumberForm.addEventListener('submit', (e) => e.preventDefault());
phoneNumber.addEventListener('input', validatePhoneNumber);

function validatePhoneNumber(e) {
  const input = e.target.value;
  const regex = /^(62|0)[0-9]{9,}$/;

  if (!regex.test(input)) {
    warningMessage.textContent =
      'Nomor telepon harus diawali dengan kode negara 62 atau 0 dan memiliki minimal 9 digit angka.';
    submitButton.disabled = true;
  } else {
    warningMessage.textContent = '';
    submitButton.disabled = false;
  }
}
