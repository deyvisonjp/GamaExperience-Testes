module.exports = class Cliente {
    constructor(_id=0, _nome="", _telefone="") {
        this.id = _id;
        this.nome = _nome;
        this.telefone = _telefone;
    }

    static primeiro() {
        return new Cliente()
    }

    nomeUppercase(){
        return this.nome.toUpperCase()    
    }

    static todos() {
        return[
            new Cliente(1, "Deyvison A", "32 987544321"),
            new Cliente(2, "Deyvison B", "32 987544321"),
            new Cliente(3, "Deyvison C", "32 987544321"),
            new Cliente(4, "Deyvison D", "32 987544321"),
            new Cliente(5, "Deyvison E", "32 987544321"),
            new Cliente(6, "Deyvison F", "32 987544321"),
            new Cliente(7, "Deyvison G", "32 987544321"),
            new Cliente(8, "Deyvison H", "32 987544321"),
            new Cliente(9, "Deyvison I", "32 987544321"),
            new Cliente(10, "Deyvison J", "32 987544321"),
        ]
    }
}

