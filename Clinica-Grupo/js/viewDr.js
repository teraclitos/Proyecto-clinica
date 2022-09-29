function MostrarConsultas(){
    let pacientes = JSON.parse(localStorage.getItem("users"));
    let consultas = JSON.parse(localStorage.getItem("consultas"))
    let idUser = Number((localStorage.getItem("userId")))
    let userDR = localSTG.find((local) => local.id === idUser && local.role==="Doctor");

    let cardConsulta = document.getElementById("cardConsulta");

    // for (let i = 0; i < pacientes.length+1; i++) {
    //     if (pacientes.role==="Paciente") {
            for (let j = 0; j < consultas.length; j++) {
                // if (/* consulta==="pendiente" && */ consultas.userId===pacientes.id && consulta.categoria===userDr.especialidadUser) {
                    let paciente = pacientes.find((local) => local.id === consultas[j].userId && local.role==="Paciente");
                        cardConsulta.innerHTML = `  
                            <div class="col-md-6 col-lg-4">
                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4 ">
                                        <img src="/img/img-paediatrician.jpg" class="img-fluid rounded-start h-100 " alt="paediatrician">
                                        </div>
                                        <div class="col-md-8">
                                        <div class="card-body d-flex flex-column justify-content-evenly align-items-center ">
                                            
                                        <h6>Nombre: ${paciente.firstName}</h6>
                                        <h6>Apellido: ${paciente.lastName}</h6>
                                        <h6>Edad: ${consultas[j].edad}</h6>
                                        <h6>Fecha: ${consultas[j].fecha}</h6>
                                        <h6>Horario: ${consultas[j].horario}</h6>
                                        <h6 class="mt-2">      <!-- Button trigger modal -->
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Consulta
                                            </button></h6>
                                            
                                            <!-- Modal -->
                                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog  ">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Consulta</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                    <div class="modal-body">
                                                        ${consultas[j].descripcion}
                                                    </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn  btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                                    
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                                
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    `;
                }
                
            }
//         }
//     }
// }

MostrarConsultas()