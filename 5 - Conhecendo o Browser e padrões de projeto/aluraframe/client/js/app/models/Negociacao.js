 class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); //mais um nivel de proteção para datas
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //congelar propriedades as tornando imutaveis
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());//mais um nivel de proteção para datas
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
} 