function ValidarInformacion() {
    let codigo_producto = document.getElementById("codigo_producto").value;
    let nombre_producto = document.getElementById("nombre_producto").value;
    let precio_unidad = document.getElementById("precio_unidad").value;
    let cantidad_producto = document.getElementById("cantidad_producto").value;
    let marca_producto = document.getElementById("marca_producto").value;
    let categoria_producto = document.getElementById("categoria_producto").value;
    let Unidad_Medida = document.getElementById("Unidad_Medida").value;

    if (!codigo_producto || !nombre_producto || !precio_unidad || !cantidad_producto || !marca_producto || !categoria_producto || !Unidad_Medida) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        console.log(
            `Información del producto: \n
            ${codigo_producto} \n
            ${nombre_producto} \n
            ${precio_unidad} \n
            ${cantidad_producto} \n
            ${marca_producto} \n
            ${categoria_producto} \n
            ${Unidad_Medida}`
        );

        if (!/^\d+$/.test(codigo_producto)) {
            Swal.fire({
                title: "Código del producto debe contener números",
                icon: "error"
            });
            return;
        }

        if (!/^[a-zA-Z]+$/.test(nombre_producto)) {
            console.log("Nombre del producto debe contener letras");
            Swal.fire({
                title: "Nombre del producto debe contener letras",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(precio_unidad)) {
            Swal.fire({
                title: "Precio de unidad debe contener números",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(cantidad_producto)) {
            Swal.fire({
                title: "Cantidad de unidades debe contener números",
                icon: "error"
            });
            return;
        }

        if (!/^[a-zA-Z]+$/.test(categoria_producto)) {
            console.log("Categoría del producto debe contener letras");
            Swal.fire({
                title: "Categoría del producto debe contener letras",
                icon: "error"
            });
            return;
        }

        if (!/^[a-zA-Z]+$/.test(Unidad_Medida)) {
            console.log("Unidad de medida debe contener letras");
            Swal.fire({
                title: "Unidad de medida debe contener letras",
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
