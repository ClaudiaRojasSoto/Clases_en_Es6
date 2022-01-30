export default class Cliente {
    constructor(nombre, impuesto = {}) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    calcularImpuesto(){

        if(JSON.stringify(this._impuesto) == "{}"){
            return `El cliente ${this.nombre} no tiene impuestos por pagar.`
        }else {

            let montoBrutoAnual = this._impuesto.monto_bruto_anual;
            let deducciones = this._impuesto.deducciones;
            let resultado = ((montoBrutoAnual - deducciones) * 0.21)

            return `El cliente ${this.nombre} deberá pagar un impuesto de ${resultado}.`

        }
    }

}