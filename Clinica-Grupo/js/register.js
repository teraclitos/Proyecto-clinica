const validarEmail = (email) => {
  return new RegExp(
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  ).test(email);
};

function register() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let checkPass = document.getElementById("checkPass").value;
  let localSTG = JSON.parse(localStorage.getItem("users")) || [];

  let errors = [];
  const array = [];

  if (firstName === "") {
    errors.push("Introducir nombre");
  }

  if (lastName === "") {
    errors.push("Introducir apellido");
  }

  if (!validarEmail(email)) {
    errors.push("Email no valido");
  }

  if (pass === "") {
    errors.push("Introducir contraseña");
  }

  if (checkPass === "") {
    errors.push("Introducir contraseña");
  }

  if (errors.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errors.join(", "),
    });
  } else {
    for (let i = 0; i < localSTG.length; i++) {
      const usuarioEnLocalSTG = localSTG[i];
      array.push(usuarioEnLocalSTG);
    }

    let userExist = localSTG.filter((local) => local.email === email);
    console.log("userExist", userExist);

    if (userExist.length === 0) {
      if (pass === checkPass) {
        array.push({
          id: localSTG.length + 1,
          firstName,
          lastName,
          email,
          pass,
          matricula: "",
          role: "Paciente",
          condition: "inactive",
        });
        localStorage.setItem("users", JSON.stringify(array));
        Swal.fire({
          icon: "success",
          title: "¡Solicitud de regitro enviada con éxito!",
          text: "Espere a que el administrador active su cuenta para poder ingresar",
          allowOutsideClick: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "¡Ok!",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "../html/login.html";
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Las contraseñas no coinciden!",
          text: "Revisa tu contraseña",
        });
      }
    }
    if (userExist.length !== 0) {
      Swal.fire({
        icon: "error",
        title: "¡Ya se encuentra registrado!",
        text: "¿Desea iniciar sesión?",
        footer: '<a href="../html/login.html">Iniciar sesión</a>',
      });
    }
  }
}

function registerDr() {
  let firstName = document.getElementById("firstNameDr").value;
  let lastName = document.getElementById("lastNameDr").value;
  let matricula = document.getElementById("matricula").value;
  let email = document.getElementById("emailDr").value;
  let pass = document.getElementById("passDr").value;
  let checkPass = document.getElementById("checkPassDr").value;

  let localSTG = JSON.parse(localStorage.getItem("users")) || [];
  let errors = [];
  const array = [];

  if (firstName === "") {
    errors.push("Introducir nombre");
  }
  if (lastName === "") {
    errors.push("Introducir apellido");
  }
  if (!validarEmail(email)) {
    errors.push("Email no valido");
  }
  if (matricula === "") {
    errors.push("Introducir matricula");
  }
  if (pass === "") {
    errors.push("Introducir contraseña");
  }
  if (checkPass === "") {
    errors.push("Introducir contraseña");
  }

  if (errors.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errors.join(", "),
    });
  } else {
    for (let i = 0; i < localSTG.length; i++) {
      const usuarioEnLocalSTG = localSTG[i];
      array.push(usuarioEnLocalSTG);
    }

    let userExist = localSTG.filter((local) => local.matricula === matricula);
    console.log("userExist", userExist);

    if (userExist.length === 0) {
      if (pass === checkPass) {
        array.push({
          id: localSTG.length + 1,
          firstName,
          lastName,
          email,
          pass,
          matricula,
          role: "Doctor",
          condition: "inactive",
        });
        localStorage.setItem("users", JSON.stringify(array));
        Swal.fire({
          icon: "success",
          title: "¡Solicitud de regitro enviada con éxito!",
          text: "Espere a que el administrador active su cuenta para poder ingresar",
          allowOutsideClick: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "¡Ok!",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "../html/login.html";
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Las contraseñas no coinciden!",
          text: "Revisa tu contraseña",
        });
      }
    }
    if (userExist.length !== 0) {
      Swal.fire({
        icon: "error",
        title: "¡Ya se encuentra registrado!",
        text: "¿Desea iniciar sesión?",
        footer: '<a href="../html/login.html">Iniciar sesión</a>',
      });
    }
  }
}
