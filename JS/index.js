const valorFijo =20.67
let ElInmueble = {}
let metrosCuadrados = 0
let alarma = true
let sistemaDeAlarama = 1

const inmuebles = [{codigo: 1, tipo:'hogar', factor: 2.01},
                  {codigo: 2, tipo: 'comercion', factor: 2.23},
                  {codigo: 3, tipo: 'oficina / consultorio', factor: 2.78}]

function comenzarCotizacion() {
    let codigo = prompt ("ingresar el numero que corresponda al inmueble a cotizar: (1 - hogar, 2 - comercio, 3 - oficina / consultorio)")
    ElInmueble = inmuebles.find((inmueble)=> inmueble.codigo === parseInt(codigo)) 
    if (ElInmueble === undefined) {
        alert("⛔️ Error en el código ingresado.")
        return
    }

    metrosCuadrados = parseInt (prompt("Ingrese metros cuadrados (min: 15 - ams: 800)"))
    if (metrosCuadrados <= 20 || metrosCuadrados >= 800){
        alert ("⛔️El valor debe ser entre 15 a 800 metros cuadrados")
}

alarma = confirm ("Presiona ACEPTAR si el inmueble posee alarma. Si no es asi pon cancelar.")
if (alarma === false){
    sistemaDeAlarama = 1.00
}
const cotizadorInmueble = new cotizador(ElInmueble,valorFijo, sistemaDeAlarama, metrosCuadrados)
let valorPoliza = cotizadorInmueble.comenzarCotizacion()
alert("✅ El costo mensual de la póliza de seguro es de $ " + valorPoliza.toFixed(2))
}