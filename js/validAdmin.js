(function validAdmin() {
  let id = localStorage.getItem("userId");
  let localSTG = JSON.parse(localStorage.getItem("users")) || [];
  let userExists = localSTG.filter((local) => local.id === Number(id));

  console.log(localSTG);

  if (id === null) {
    window.location.href = "../html/login.html";
  } else if (userExists[0].role === "Paciente") {
    window.location.href = "../html/usuarios.html";
  }
})();

function logout() {
  localStorage.removeItem('userId')
  window.location.href = "../html/login.html"
} 
