const filterDoctors = (serviceId) => {
  return fetchDoctors().filter((doctor) => doctor.serviceId === serviceId);
};

const fetchDoctors = () => {
  return fetchItems("users").filter((user) => user.role === "Doctor");
};

window.addEventListener("load", function (evt) {
  const doctors = fetchDoctors();
  if (doctors.length === 0) {
    const services = fetchServices();

    for(let doctor of DOCTORS) {
      console.log(doctor);
      createItem('users', doctor);
    }
  }
});
