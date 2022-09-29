// LocalStorage de Publicidades
let localSTGPublicity = JSON.parse(localStorage.getItem("publicity")) || [];
// Tabla de contenidos
let tablePublicitysBody = document.getElementById("table-publicitys-body");

// Array de Publicidades
let publicityArray = [];

// Botones del CRUD publicidades
// let deleteButton = document.getElementById('delete-button');

// Inputs de formulario CREAR publicidad
let codeInput = document.getElementById("exampleInputCode1");
let urlInput = document.getElementById("exampleInputUrl1");
let categoryInput = document.getElementById("exampleInputCategoria1");
let descriptionInput = document.getElementById("exampleInputDescripcion1");
let createPublicityForm = document.getElementById("create-publicity-form");

// Eventos cuando el DOM esta cargado
document.addEventListener("DOMContentLoaded", () => {
  // LocalStorage
  publicityArray = JSON.parse(localStorage.getItem("publicity")) || [];

  // Imprimir LocalStorage en el DOM
  printHTML();

  // tablePublicitysBody.addEventListener('click', deletePublicity)

  //Boton crear publicidad
  createPublicityForm.addEventListener("submit", createNewPublicity);

  // Cambios en el formulario
  codeInput.addEventListener("change", publicityData);
  urlInput.addEventListener("change", publicityData);
  categoryInput.addEventListener("change", publicityData);
  descriptionInput.addEventListener("change", publicityData);
});

const newObject = {
  code: "",
  url: "",
  category: "",
  description: "",
};

function publicityData(e) {
  newObject[e.target.name] = e.target.value;
  newObject.id = codeInput.value;
  newObject.destacado = false;

  // console.log(newObject);
}

function createNewPublicity(e) {
  e.preventDefault();
  console.log("Submit");

  //Desestructuracion para extraer la informacion del objeto newObject
  const { code, url, category, description } = newObject;

  // Validacion
  if (code === "" || url === "" || category === "" || description === "") {
    console.log("Todos los campos deben ser completados");

    return;
  }

  /* Crear una nueva publicidad
    // FIXME: Se aplica REST operator {...} Para pasar una copia del objeto
    newObject, sino este se sobreescribe y se pasa siempre el mismo objeto al array
    */
  publicityArray = [...publicityArray, { ...newObject }];
  console.log(publicityArray);

  printHTML(publicityArray);
  // administrarPublicidades.agregarPublicidad({...newObject});

  syncLocalStorage();
  // sincronizarLocalStorage(administrarPublicidades);

  //Reiniciar objeto para la validacion correcta, sin repetirse
  restartObject();

  //Reiniciar formulario
  createPublicityForm.reset();

  //Mostrar el HTML de las publicidades creadas
  // ui.imprimirPublicidades(JSON.parse(localStorage.getItem("publicity")));
}

function deletePublicity(id) {
  publicityArray = publicityArray.filter(
    (publicity) => publicity.id !== String(id)
  );
  syncLocalStorage();
  printHTML();
}

function restartObject() {
  newObject.code = "";
  newObject.url = "";
  newObject.category = "";
  newObject.description = "";
}

function syncLocalStorage() {
  // Inyeccion de array de publicidades al LST
  localStorage.setItem("publicity", JSON.stringify(publicityArray));
}

// Imprimir array de publicidades en el DOM
function printHTML() {
  // Limpiar DOM para evitar repeticion
  cleanHTML();

  //Scripting de cada publicidad
  publicityArray.forEach((publicity) => {
    const { code, url, category, description, id } = publicity;

    const divPublicitys = document.createElement("tr");
    divPublicitys.dataset.id = id;

    //Scripting de los elementos de la publicidad
    divPublicitys.innerHTML = `
                    <tr>
                    <th class="text-center align-middle " scope="row">${code}</th>
                    <td class="text-center align-middle" > 
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop10">
                    <img class="img-publicity" src="${url}" alt="publicity-1">
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content modal-content-img-publicity">
                    
                    <div class="modal-body d-flex justify-content-end ">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    </td>
                    <td class="text-center align-middle">${category}</td>
                    <td class="text-center align-middle" >${description}</td>
                    <!-- comienzo de los 3 botones-->
                    <td class="text-center align-middle">
                    <div class="d-flex justify-content-center ">
                    <!-- Button trigger modal -->
                    <button id="iconTrash${id}" type="button" class="btn btn-light btn-table-modal-width me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop1${id}">
                    <i class=" fa-solid  fa-trash-can  admin-icon-table "></i>
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop1${id}" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content admin-modal-bg ">
                    <div class="modal-header admin-modal-header">
                    
                    <button type="button" class="btn-close fs-5" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body h4 fs-4">
                    Estas seguro de eliminar la publicidad?
                    </div>
                    <div class="modal-footer admin-modal-footer d-flex justify-content-center ">
                    
                    <button id="delete-button" type="button" class="admin-modal-btn-delete px-3 py-2 " onclick="deletePublicity(${id})">Eliminar</button>
                    </div>
                    </div>
                    </div>
                    </div><!-- fin boton de eliminar-->
                
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-light btn-table-modal-width " data-bs-toggle="modal"
                data-bs-target="#exampleModal3${id}">
                <i class="fa-solid fa-star admin-icon-table star${id}"></i>
                </button>
                
                <!-- Modal -->
                <div class="modal fade   " id="exampleModal3${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content admin-modal-bg ">
                <div class="modal-header admin-modal-header">
                <button type="button" class="btn-close fs-5" data-bs-dismiss="modal" aria-label="Close">
                </button>
                </div>
                
                <div class="modal-body d-flex justify-content-center admin-modal-body">
                
                <p class="fs-5 mt-4 fs-4 "> Desea resaltar la publicidad</p>
                
                </div>
                
                <div class="modal-footer d-flex justify-content-center admin-modal-footer">
                <button type="button" id="agree" class="admin-modal-btn-accept px-4 py-2 " onclick="destacarPublicidad(${id})" data-bs-dismiss="modal">Sí</button>
                
                </div>
                </div>
                </div>
                </div>
                </div>
                </td>
                </tr>
                `;

    // Agregar las publicidades al contenedor de la lista
    tablePublicitysBody.appendChild(divPublicitys);
    console.log(publicity.destacado);
  });

  syncLocalStorage();

  syncLocalStorage();
}

function cleanHTML() {
  while (tablePublicitysBody.firstChild) {
    tablePublicitysBody.removeChild(tablePublicitysBody.firstChild);
  }
}

function destacarPublicidad(id) {
  console.log(id);
  let publicidades = JSON.parse(localStorage.getItem("publicity")) || [];
  let arrayPublicidad = [];

  for (let i = 0; i < publicidades.length; i++) {
    let starId = document.querySelector(`.star${id}`);
    const publicidad = publicidades[i];
    if (publicidad.id === String(id) || publicidad.destacado === false) {
      publicidad.destacado = true;
      starId.classList.add("text-warning");
      arrayPublicidad.push(publicidad);
      console.log("Se agrego la estrella: ", arrayPublicidad);
    } else {
      publicidad.destacado = false;
      // console.log(starId.classList.toggle('text-warning'));
      arrayPublicidad.push(publicidad);
    }
  }
  localStorage.setItem("publicity", JSON.stringify(arrayPublicidad));
  console.log("arrayPublicidad", arrayPublicidad);
  // syncLocalStorage();
}
