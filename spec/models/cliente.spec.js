const Cliente = require('../../models/cliente');

describe('Clientes', () => {
   beforeEach(() => {

   })

   //Teste de verificação de dados
   it('Valida propriedades de um cliente', () => {
      let cliente = Cliente.primeiro();
      expect(cliente.id).not.toBeUndefined()
      expect(cliente.nome).not.toBeUndefined()
      expect(cliente.telefone).not.toBeUndefined()
   });

   //Teste que retorna uma lista com 10 clientes
   it('Retorna todos', () => {
      let clientes = Cliente.todos();
      expect(clientes.length).toEqual(10);
   });   
   
   it('Verifica se o nome esta em UPPERCASE', () => {
      let cliente = Cliente.primeiro();
      cliente.nome = "danilo"
      expect(cliente.nomeUppercase()).toEqual("DANILO");
   });

});
