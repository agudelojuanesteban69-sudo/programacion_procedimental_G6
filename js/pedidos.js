function ValidarInformacion() {
    let Nombre = document.getElementById("Nombre").value;
    let Dirección = document.getElementById("Dirección").value;
    let Teléfono = document.getElementById("Teléfono").value;
    let Email = document.getElementById("Email").value;
    let metodo_pago = document.getElementById("metodo_pago").value;
    let pedidos = document.getElementById("pedidos").value;


    if (!Nombre || !Dirección || !Teléfono || !Email || !metodo_pago || !pedidos ) {
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
            `Informacion del pedido: \n
            ${Nombre} \n
            ${Dirección} \n
            ${Teléfono} \n
            ${Email} \n
            ${metodo_pago} \n
            ${pedidos}`

        );


    
         if (!/^[a-zA-Z]+$/.test(Nombre)) {
            console.log("nombre debe contener letras")
            Swal.fire({
                title: "nombre  debe contener letras",
                icon: "error"
            });
            return;
        }




        if (!/^\d+$/.test(Teléfono)) {
            console.log("telefono debe contener numeros")
            Swal.fire({
                title: "telefono  debe contener numero",
                icon: "error"
            });
            return;
        }



        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            console.log("email debe contener email")
            Swal.fire({
                title: "email  debe contener email",
                icon: "error"
            });
            return;
        }



        if (!/^[a-zA-Z]+$/.test(metodo_pago)) {
            console.log("metodo de pago debe contener letras")
            Swal.fire({
                title: "metodo de pago  debe contener letras",
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
