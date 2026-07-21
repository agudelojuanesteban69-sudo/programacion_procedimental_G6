function ValidarInformacion() {
    let Nombre = document.getElementById("Nombre").value;
    let Dirección = document.getElementById("Dirección").value;
    let Teléfono = document.getElementById("Teléfono").value;
    let Email = document.getElementById("Email").value;
    let metodo_pago = document.getElementById("metodo_pago").value;
    let pedidos = document.getElementById("pedidos").value;

    if (!Nombre || !Dirección || !Teléfono || !Email || !metodo_pago || !pedidos) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        console.log(
            `Información del pedido: \n
            ${Nombre} \n
            ${Dirección} \n
            ${Teléfono} \n
            ${Email} \n
            ${metodo_pago} \n
            ${pedidos}`
        );

        if (!/^[a-zA-Z]+$/.test(Nombre)) {
            console.log("El nombre debe contener letras");
            Swal.fire({
                title: "El nombre debe contener letras",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(Teléfono)) {
            console.log("El teléfono debe contener números");
            Swal.fire({
                title: "El teléfono debe contener números",
                icon: "error"
            });
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            console.log("El correo electrónico debe ser válido");
            Swal.fire({
                title: "El correo electrónico debe ser válido",
                icon: "error"
            });
            return;
        }


        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Información guardada correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}


document.getElementById("btnGuardar").onclick = ValidarInformacion;
