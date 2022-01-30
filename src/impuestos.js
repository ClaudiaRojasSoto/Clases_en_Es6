
export default class impuesto{
    constructor(monto_bruto_anual, deducciones = 0){
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }
    get monto_bruto_anual() {
        return this._monto_bruto_anual;
    }
    set monto_bruto_anual(nuevo_mba) {
        this._monto_bruto_anual = nuevo_mba;
    }
    get deducciones() {
        return this._deducciones;
    }
    set deducciones(nuevo_deducciones) {
        this._ddeducciones = nuevo_deducciones;
    }

}