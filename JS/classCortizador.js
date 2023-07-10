class cotizador {
    constructor(inmueble, valorFijo, alarma, metrosCuadrados ){
        this.inmueble = inmueble
        this.alarma = alarma
        this.metrosCuadrados = metrosCuadrados
        this.valorFijo = valorFijo  
    }
    comenzarCotizacion(){
        return this. inmueble.factor + this.valorFijo + this.alarma + this.metrosCuadrados
    }
}