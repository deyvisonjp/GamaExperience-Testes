module.exports = class Cliente {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.telefone = "";
    }

    static primeiro() {
        return new Cliente()
    }

    nomeUppercase(){
        return this.nome.toUpperCase()    
    }

    static todos() {
        return[
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
        ]
    }
}

