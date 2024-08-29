function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const phone = document.getElementById("phone").value;
  const status = document.getElementById("status").checked;

  const formData = {
    name,
    email,
    city,
    zipCode,
    phone,
    status,
  };

  return formData;
}

function isNumber(zipCode) {
  for (let i = 0; i < zipCode.length; i++) {
    if (isNaN(zipCode[i])) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  if (!formData || !isNumber(formData.zipCode) || !checkboxIsChecked()) {
    return false;
  }
  return true;
}

function submit(event) {
  event.preventDefault();

  const formData = handleGetFormData();
  const isValid = validateFormData(formData);

  const warningDiv = document.getElementById("warning");

  if (!isValid) {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    warningDiv.textContent = "";
    // Lakukan proses submit form yang sebenarnya di sini (misalnya, kirim data ke server)
    console.log("Form submitted:", formData);
  }
}
document.getElementById("submit-form").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});

const form = document.getElementById("Form");
form.addEventListener("submit", submit);
