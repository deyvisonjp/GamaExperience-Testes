describe('Clientes', () => {
   beforeEach(()=> {

   })

   //Teste que retorna uma lista com 10 clientes
   it('Retorna todos', () => {
      let clientes = Cliente.todos();
      expect((clientes.length).toEqual(10))
   });

   //Teste de verificação de dados
   it('Retorna todos', () => {
      let cliente = Cliente.primeiro();
      expect(cliente.id).not.toBeUndefined()
      expect(cliente.nome).not.toBeUndefined()
      expect(cliente.telefone).not.toBeUndefined()
   })

});
