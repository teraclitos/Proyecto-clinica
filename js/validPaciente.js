(function validPaciente() {
  let id = localStorage.getItem("userId");
  let localSTG = [JSON.parse(localStorage.getItem("admin"))] || [];
  let userExists = localSTG.filter((user) => user.id === Number(id));


  if (id === null) {
    window.location.href = "../html/login.html";
  } else if (userExists[0].role === "Admin") {
    window.location.href = "../html/admin.html";
  }
})();

const logout = () => {
  localStorage.removeItem("userId");
  window.location.href = "../html/login.html";
};

