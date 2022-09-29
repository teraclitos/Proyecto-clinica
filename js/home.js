let publicidades= JSON.parse(localStorage.getItem("publicity")) || []
let header = document.getElementById("header")
    console.log(header)
    for (let i = 0; i < publicidades.length; i++) {
        const publicidad = publicidades[i];
        if (publicidad.destacado === true) {
            header.style.backgroundImage = `url('${publicidad.url}')`;
            header.style.height='500px'
            header.style.backgroundSize='cover'
            header.style.position='relative'
            header.style.overflow='hidden'
            console.log(publicidad)
        }
}