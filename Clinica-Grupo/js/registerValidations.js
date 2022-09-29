const registerValidationEmail = () => {
  let email = document.getElementById("email").value;
  let isEmail = new RegExp(
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  ).test(email);

    if (isEmail) {
      console.log('todo ok')
    }else{console.log('email no valido')}
};
