function ValidarInformacion() {
    let Nombre = document.getElementById("Nombre").value;
    let Email = document.getElementById("Email").value;
    let Número_celular = document.getElementById("Número_celular").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let Dirección = document.getElementById("Dirección").value;
    let genero = document.getElementById("genero").value;
    let contrasena = document.getElementById("contrasena").value;




    if (!Nombre || !Email || !Número_celular || !fecha_nacimiento || !Dirección || !genero) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }

    else {
        console.log(
            `Informacion del usuario: \n
            ${Nombre} \n
            ${Email} \n
            ${Número_celular} \n
            ${fecha_nacimiento} \n
            ${Dirección} \n
            ${genero} \n
            ${contrasena} `

        );

        if (!/^[a-zA-Z]+$/.test(Nombre)) {
            console.log("nombre debe contener letras")
            Swal.fire({
                title: "nombre  debe contener letras",
                icon: "error"
            });
            return;
        }

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            console.log("email debe contener email")
            Swal.fire({
                title: "email  debe contener email",
                icon: "error"
            });
            return;
        }


        if (!/^\d+$/.test(Número_celular)) {
            Swal.fire({
                 title: "Numero de cedula debe contener números",
                icon: "error"
            });
            return;
        }

        

        if (/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(fecha_nacimiento)) {
            console.log("fecha de nacimiento")
            Swal.fire({
                title: "fecha de nacimiento",
                icon: "error"
            });
            return;
        }



        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contrasena)) {
            console.log("fecha de nacimiento")
            Swal.fire({
                title: "fecha de nacimiento",
                icon: "error"
            });
            return;
        }




        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}


document.getElementById("btnGuardar").onclick = ValidarInformacion;
