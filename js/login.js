function log() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let usersSTG = JSON.parse(localStorage.getItem("users")) || [];
  let adminSTG = JSON.parse(localStorage.getItem("admin"));

  if (!email || !pass) {
    Swal.fire({
      icon: "error",
      title: "¡Completa tus datos para poder iniciar sesión!",
      text: "Ingresa tus datos de inicio de sesión",
    });
  } else {
    usersSTG.push(adminSTG);
    let userLoged = usersSTG.find(
      (user) =>
        user.email === email &&
        user.pass === pass &&
        user.condition === "active"
    );
    console.log(userLoged);
    if (userLoged) {
      localStorage.setItem("userId", JSON.stringify(userLoged.id));
      setTimeout(() => {
        console.log(userLoged);
        switch (userLoged.role) {
          case "Admin":
            location.href = "../html/admin.html";
            break;
          case "Paciente":
            location.href = "../html/usuarios.html";
            break;
          case "Doctor":
            location.href = "../html/paediatrician.html";
            break;
          default:
            location.href = "../html/login.html";
        }
      }, 2000);
    } else {
      Swal.fire({
        icon: "error",
        title: "¡No se pudo iniciar sesión, revisa tus datos por favor!",
        text: "¿Estas registrado?",
        footer: '<a href="../html/register.html">Registrarse</a>',
      });
    }
  }
}
